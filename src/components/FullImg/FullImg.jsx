import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';

const placeholderImg = 'https://crm.centralnoe.ru/dealincom/assets/empty_photo.jpg';

export const FullImg = ({ open, onClose, photos, idx }) => {
  const mobileView = useMediaQuery('(min-width: 480px)')
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{ zIndex: 99 }}
      // maxWidth={'xl'}
      fullWidth
      PaperProps={{sx: {backgroundColor: 'transparent'}}}
      >
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={mobileView}
          showIndicators={Array.isArray(photos) && photos?.length > 1}
          selectedItem={idx}
        >
          {
            photos.map((photo, idx) =>
              <div key={idx}>
                <img
                  className='card__img card__img_full'
                  src={photo || placeholderImg}
                  onError={(event) => {
                    event.target.src = placeholderImg
                    event.target.classList.add('card__img_error')
                  }}
                />
              </div>
            )
          }
        </Carousel>
    </Dialog>
  )
}