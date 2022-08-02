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
            center: cords ? cords : [55.04, 82.93],
            zoom: 14,
          }}
        >
          <Placemark geometry={cords ? cords : [55.04, 82.93]} />
        </Map>
      </YMaps>
    </div>
  )
}