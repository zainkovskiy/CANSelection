import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Link from '@mui/material/Link';

const placeholderImg = 'https://crm.centralnoe.ru/dealincom/assets/empty_photo.jpg';

import './Card.scss';

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

const commetnVariants = {
  full: {
    height: 'auto',
    transition: { duration: 0.5 }
  },
  start: {
    height: '45px',
    transition: { duration: 0.5 }
  }
}


export function Card({ card }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <motion.div
        className='card'
        variants={cardVarints}
        initial='hidden'
        animate='visible'
        exit='hidden'
        layout
      >
        <img
          alt="photo"
          className='card__img'
          src={card.photo[0] || placeholderImg}
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
          <div className='card__description'>
            <div className='card__text-button'>
              <span className='card__text text' style={{ fontWeight: 700, color: 'grey', marginRight: 30 }}>
                Комментарий
              </span>
            </div>
            <motion.span
              className={`card__comment text card__text ${card?.comment?.length > 90 ? readMore ? '' : 'card__comment_hidden' : ''}`}
              variants={commetnVariants}
              animate={readMore ? 'full' : 'start'}
              initial='start'
            >
              {card.comment || 'Коментарий отсутствует'}
            </motion.span>
            {
              (card?.comment && card.comment.length > 90) ?
                <Link
                  onClick={() => setReadMore(!readMore)}
                  underline="none"
                  sx={{ fontSize: 12, fontFamily: 'Montserrat' }}
                >
                  {readMore ? 'Показать меньше' : 'Показать больше'}
                </Link> :
                <span style={{ height: 15 }}></span>
            }
          </div>
          <div className='card__bottom_wrap'>

          </div>
        </div>
      </motion.div>
    </>
  )
}