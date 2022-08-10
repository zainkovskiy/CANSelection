import React, { createContext, useState, useEffect } from 'react';

import { Linear } from 'components/Linear';

import { requestData, sendEmotion } from '../../Api';

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
      setLoading(false);
      if (data?.result === 'OK') {
        setData(data)
        return
      }
      if (data?.result === 'error' && data?.reason === "Exception on"){
        props.resetAuthorization();
        return
      }
    })
  }

  const setNewEmotion = (UID, emotionName, emotionStatus) => {
    const findCard = data.data.find(card => card.UID === UID);
    const cards = data.data;
    sendEmotion(UID, emotionName, emotionStatus);
    if (emotionName === 'isLike') {
      findCard.likes = emotionStatus ? 1 : 0;
      findCard.dislikes = 0;
      cards.splice(data.data.indexOf(findCard), 1, findCard)
      setData((prevState) => {
        return { ...prevState, data: cards }
      })
      return
    }
    if (emotionName === 'isDislike') {
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