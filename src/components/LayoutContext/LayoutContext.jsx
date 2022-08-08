import React, { createContext, useState, useEffect } from 'react';

import { Linear } from 'components/Linear';

import { requestData } from '../../Api';

export const Context = createContext();

export const LayoutContext = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    requestData().then(data => {
      console.log(data);
      if (data?.result === 'OK') {
        setData(data)
      }
      setLoading(false);
    })
  }

  const setNewEmotion = (reqNumber, emotionName, emotionStatus) => {
    const findCard = data.cards.find(card => card.reqNumber === reqNumber);
    if (emotionName === 'likes') {
      findCard.likes = emotionStatus ? 1 : 0;
      findCard.dislikes = 0;
      setData((prevState) => {
        return { ...prevState, data: data.cards.splice(data.cards.indexOf(findCard), 1, findCard) }
      })
      return
    }
    if (emotionName === 'dislikes') {
      findCard.dislikes = emotionStatus ? 1 : 0;
      findCard.likes = 0;
      setData((prevState) => {
        return { ...prevState, data: data.cards.splice(data.cards.indexOf(findCard), 1, findCard) }
      })
      return
    }
  }

  const value = {
    data,
    setNewEmotion
  }

  return (
    <>
      {
        loading ?
          <Linear /> :
          <Context.Provider value={value}>
            {
              data ?
                <>
                  {props.children}
                </> :
                <p className="text">нет данных</p>
            }
          </Context.Provider>
      }
    </>
  )
}