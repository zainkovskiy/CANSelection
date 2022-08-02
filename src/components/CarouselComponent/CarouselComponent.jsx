import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import useMediaQuery from '@mui/material/useMediaQuery';

import { FullImg } from 'components/FullImg';

const placeholderImg = 'https://crm.centralnoe.ru/dealincom/assets/empty_photo.jpg';

const styleCards = {
  small: 'card__img_small',
  full: 'card__img_full',
}

export function CarouselComponent({ photos }) {
  const mobileView = useMediaQuery('(min-width: 480px)')
  const [open, setOpen] = useState(false);
  const [curIndex, setCurIndex] = useState(null);

  const handleClose = () => {
    setOpen(!open)
  }
  return (
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={mobileView}
        showIndicators={Array.isArray(photos) && photos?.length > 1}
      >
        {
          (Array.isArray(photos) && photos?.length > 0) ?
            photos.map((photo, idx) =>
              <div key={idx} onClick={() => { handleClose(), setCurIndex(idx) }}>
                <div
                  style={{ backgroundImage: `url(${photo})` }}
                ></div>
                <img
                  className='card__img card__img_small'
                  src={photo || placeholderImg}
                  onError={(event) => {
                    event.target.src = placeholderImg
                    event.target.classList.add('card__img_error')
                  }}
                />
              </div>
            ) :
            <div>
              <img className='card__img card__img_error card__img_small' src={placeholderImg} />
            </div>
        }
      </Carousel>
      <FullImg
        idx={curIndex}
        open={open}
        onClose={handleClose}
        photos={photos ? photos : []}
      />
    </>
  );
}
