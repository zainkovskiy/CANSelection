import React, { createContext, useState, useEffect } from 'react';

import { Linear } from 'components/Linear';

import { requestData } from '../../Api'; 

export const Context = createContext();

export const LayoutContext = (props) => {
  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState(null);

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    requestData().then(data => {
      if(data){
        setLoading(false);
        setData({
          client: 'Mishel',
          realtor: {
            name: 'John Smith',
            phone: '+79638524455'
          },
          cards: [
            {
                "UID": "1",
                "created": "2022-07-20 10:58:15.661672",
                "dealId": "4158",
                "clientId": "4158",
                "author": "2198",
                "address": "Каменский сельсовет, Аллея 3, 594",
                "lat": "0.0000",
                "lng": "0.0000",
                "area": "130.00",
                "livingArea": "120.00",
                "floors": "/2",
                "rooms": "5",
                "price": "24000",
                "likes": "0",
                "dislikes": "0",
                "viewes": "0",
                "lastview": null,
                "deleted": "1",
                "comment": "К продаже предлагается 1/2 дома с одним входом,  находящимся  в живописнейших мест - рядом с озером Каменка",
                "reqNumber": "56553000053",
                "source": "1c",
                "photo": [
                  "https://centromir-sc.ru/imagebase/57782000064/Resize/57782000064_fccf2181-9589-4fea-b2ba-9765ac9391fd_r.jpg",
                ]
            },
            {
                "UID": "2",
                "created": "2022-07-26 10:21:09.395630",
                "dealId": "4158",
                "clientId": "4158",
                "author": "2198",
                "address": "Каменский сельсовет, Аллея 3, 594",
                "lat": "0.0000",
                "lng": "0.0000",
                "area": "130.00",
                "livingArea": "120.00",
                "floors": "/2",
                "rooms": "5",
                "price": "2300",
                "likes": "0",
                "dislikes": "0",
                "viewes": "0",
                "lastview": null,
                "deleted": "0",
                "comment": "К продаже предлагается 1/2 дома с одним входом,  находящимся  в живописнейших мест - рядом с озером Каменка",
                "reqNumber": "56553000054",
                "source": "1c",
                "photo": [
                  "https://centromir-sc.ru/imagebase/57782000064/Resize/57782000064_fccf2181-9589-4fea-b2ba-9765ac9391fd_r.jpg"
                ]
            },
            {
                "UID": "3",
                "created": "2022-07-26 10:21:09.400914",
                "dealId": "4158",
                "clientId": "4158",
                "author": "2198",
                "address": "Каменский сельсовет, Аллея 3, 594",
                "lat": "0.0000",
                "lng": "0.0000",
                "area": "130.00",
                "livingArea": "120.00",
                "floors": "/2",
                "rooms": "5",
                "price": "2500",
                "likes": "0",
                "dislikes": "0",
                "viewes": "0",
                "lastview": null,
                "deleted": "1",
                "comment": "К продаже предлагается 1/2 дома с одним входом,  находящимся  в живописнейших мест - рядом с озером Каменка",
                "reqNumber": "56553000055",
                "source": "mlsn",
                "photo": [
                  "https://centromir-sc.ru/imagebase/57782000064/Resize/57782000064_fccf2181-9589-4fea-b2ba-9765ac9391fd_r.jpg"
                ]
            }
        ]
        })
      }
    })
  }

  const value = {
    data
  }

  return (
    <>
      {
        loading ?
        <Linear/> :
        <Context.Provider value={value}>
          { props.children }
        </Context.Provider>
      }
    </>
  )
}