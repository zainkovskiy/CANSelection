import React, { useContext } from 'react';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

import Checkbox from '@mui/material/Checkbox';

import { Context } from 'components/LayoutContext';

export const LikeOrDislake = ({ likes, dislikes, UID }) => {
  const { setNewEmotion } = useContext(Context);

  const handlerEmotion = () => {
    setNewEmotion(UID, event.target.name, event.target.checked)
  }

  return (
    <>
      <Checkbox
        name='isLike'
        checked={likes > 0}
        onClick={handlerEmotion}
        icon={<ThumbUpOutlinedIcon />}
        checkedIcon={<ThumbUpIcon color='success' />}
      />
      <Checkbox
        name='isDislike'
        checked={dislikes > 0}
        onClick={handlerEmotion}
        icon={<ThumbDownAltOutlinedIcon />}
        checkedIcon={<ThumbDownAltIcon color='error' />}
      />
    </>
  )
}