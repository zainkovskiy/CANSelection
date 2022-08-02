import React from 'react';
import ImageGallery from 'react-image-gallery';

import './Photo.scss';

export function Photo({ images, full, setFull, minHeight }) {

  return (
    <ImageGallery items={images.map(img => (
      {
        original: img,
        thumbnail: img,
        originalHeight: !full ? minHeight : '100%',
        originalClass: full ? 'image-gallery_full' : 'image-gallery_small'
      }
    ))}
      showThumbnails={full}
      thumbnailPosition={'bottom'}
      showPlayButton={false}
      lazyLoad={true}
      autoPlay={false}
      slideDuration={300}
      onErrorImageURL={'https://crm.centralnoe.ru/dealincom/assets/empty_photo.jpg'}
      onScreenChange={(event) => { setFull(event) }}
    />
  )
} 
