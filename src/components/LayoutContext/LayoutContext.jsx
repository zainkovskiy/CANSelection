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
    const findCard = data.data.find(card => card.reqNumber === reqNumber);
    const cards = data.data;
    if (emotionName === 'likes') {
      findCard.likes = emotionStatus ? 1 : 0;
      findCard.dislikes = 0;
      cards.splice(data.data.indexOf(findCard), 1, findCard)
      setData((prevState) => {
        return { ...prevState, data: cards }
      })
      return
    }
    if (emotionName === 'dislikes') {
      findCard.dislikes = emotionStatus ? 1 : 0;
      findCard.likes = 0;
      cards.splice(data.data.indexOf(findCard), 1, findCard)
      setData((prevState) => {
        return { ...prevState, data: cards }
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