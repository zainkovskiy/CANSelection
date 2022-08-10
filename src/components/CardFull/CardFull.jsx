import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';

import { Context } from 'components/LayoutContext';
import { LikeOrDislake } from 'components/LikeOrDislake';
import { YandexMap } from 'components/YandexMap';
import { Photo } from 'components/Photo';

import './CardFull.scss';

const placeholderImg = 'https://crm.centralnoe.ru/dealincom/assets/empty_photo.jpg';

export const CardFull = () => {
  const { data } = useContext(Context);
  const params = useParams();
  const mobileView = useMediaQuery('(max-width: 480px)')
  const [full, setFull] = useState(false)

  const card = data.data.find(card => card.UID === params.id);

  const navigate = useNavigate();

  const handlerClickToBack = () => {
    navigate('/dev/selection/');
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .3 }}
        className='full'
      >
        <Button
          variant="contained"
          onClick={handlerClickToBack}
          size='medium'
        >
          вернуться к подборке
        </Button>
        <span className="text">{card.address}</span>
        <div className='shot'>
          <Photo
            images={card.photo || [placeholderImg]}
            full={full}
            setFull={setFull}
            minHeight={400}
          />
          <YandexMap
            cords={(+card.lat > 0 && +card.lng > 0) && [card.lat, card.lng]}
          />
        </div>
        <div className='shot__price'>
          <span className='full__text_big text'>{card.price} тыс. ₽</span>
          <div>
            <LikeOrDislake
              UID={card.UID}
              likes={card.likes}
              dislikes={card.dislikes}
            />
          </div>
        </div>
        <div className='shot_information'>
          <p className='text full__text_vertical'>Общая площадь<span>{card.area}</span></p>
          <p className='text full__text_vertical'>Жилая площадь<span>{card.livingArea}</span></p>
          <p className='text full__text_vertical'>Этажность<span>{card.floors}</span></p>
          <p className='text full__text_vertical'>Комнатность<span>{card.rooms}</span></p>
        </div>
        <div className='full__description'>
          <span className='full__text text' style={{ fontWeight: 700, color: 'grey', marginRight: 30 }}>
            Описание
          </span>
          <span
            className={`full__comment text`}
          >
            {card.comment || 'Описание отсутствует'}
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}