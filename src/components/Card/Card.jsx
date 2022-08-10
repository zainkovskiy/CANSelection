import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Photo } from 'components/Photo';
import { LikeOrDislake } from 'components/LikeOrDislake';

import { setView } from '../../Api';

import './Card.scss';

const placeholderImg = 'https://crm.centralnoe.ru/dealincom/assets/empty_photo.jpg';

const cardVarints = {
  visible: {
    opacity: 1,
    transition: { duration: 0.3 }
  },
  hidden: {
    opacity: 0,
    transition: { duration: 0.3 }
  }
}

export function Card({ card }) {
  const [full, setFull] = useState(false)
  const navigate = useNavigate();

  const openFull = () => {
    const tagName = event.target.tagName;
    if (full) {
      return
    }
    if (tagName === 'INPUT' || tagName === 'svg' || tagName === 'BUTTON' || tagName === 'path' || tagName === 'polygon') {
      return
    }
    navigate(card.UID)
    setView(card.UID)
  }

  return (
    <>
      <motion.div
        className='card'
        variants={cardVarints}
        initial='hidden'
        animate='visible'
        exit='hidden'
        layout
        onClick={openFull}
      >
        <Photo
          images={card.photo || [placeholderImg]}
          full={full}
          setFull={setFull}
          minHeight={250}
        />
        <div className='card__info'>
          <span className='text' style={{ height: 38 }}>
            {card?.address}
          </span>
          <div className='card__info__wrap'>
            <div className='card__text_wrap'>
              {card?.area && <span className='text card__text'>Общая площадь</span>}
              {card?.area && <span className='text'>{card.area}м<sup>2</sup></span>}
            </div>
            <div className='card__text_wrap'>
              {card?.price &&
                <div className='card__text-button'>
                  <span className='text'>
                    {card.price} тыс. ₽
                  </span>
                </div>}

              {(card?.price && card?.area && card?.area !== 'Земельный участок') && <span className='text card__text'>{((+card.price / +card.area) * 1000).toFixed(0)} ₽/кв.м</span>}
            </div>
          </div>

          <div className='card__bottom_wrap'>
            <LikeOrDislake
              UID={card.UID}
              likes={card.likes}
              dislikes={card.dislikes}
            />
          </div>
        </div>
      </motion.div>
    </>
  )
}