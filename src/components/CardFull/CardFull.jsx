import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';

import { Context } from 'components/LayoutContext';
import { LikeOrDislake } from 'components/LikeOrDislake';
import { YandexMap } from 'components/YandexMap';

import './CardFull.scss';

export const CardFull = () => {
  const { data } = useContext(Context);
  const params = useParams();
  const mobileView = useMediaQuery('(max-width: 480px)')

  const card = data.cards.find(card => card.reqNumber === params.id);

  const navigate = useNavigate();

  const handlerClickToBack = () => {
    navigate('/');
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
            variant="outlined"
            onClick={handlerClickToBack}
            size='medium'
          >
            вернуться к подборке
          </Button>
        <span className="text">{card.address}</span>
        <YandexMap
          cords={(+card.lat > 0 && +card.lng > 0) && [card.lat, card.lng]}
        />
        <div>
          <LikeOrDislake
            reqNumber={card.reqNumber}
            likes={card.likes}
            dislikes={card.dislikes}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}