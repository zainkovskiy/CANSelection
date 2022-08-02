import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export const YandexMap = ({ cords }) => {
  return (
    <div
      style={{ height: 400, width: '100%', backgroundColor: '#e5e5e5' }}
    >
      <YMaps>
        <Map
          width='100%'
          height={400}
          defaultState={{
            center: cords ? cords : ['55.030204', '82.920430'],
            zoom: 17,
          }}
          instanceRef={yaMap => {
            if (yaMap) {
              yaMap.behaviors.disable('scrollZoom');
              if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                //... отключаем перетаскивание карты
                yaMap.behaviors.disable('drag');
              }
            }
          }}
        >
          <Placemark geometry={cords ? cords : ['55.030204', '82.920430']} />
        </Map>
      </YMaps>
    </div>
  )
}