import React, { useContext } from "react";

import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Context } from 'components/LayoutContext';

export const Realtor = () => {
  const mobileView = useMediaQuery('(min-width: 480px)')
  const { data } = useContext(Context);
  return (
    <div
      style={ mobileView ? realtor : realtorMobile}
    >
      <span
        className="text"
        style={{ fontSize: '12px' }}
      >
        Ваш риелтор
      </span>
      <span
        className="text"
        style={{ fontSize: '12px' }}
      >
        {data.realtor}
      </span>
      <Link
        href={`tel:${data.realtorPhone}`}
        underline="hover"
        style={{ fontSize: '12px' }}
      >
        {data.realtorPhone}
      </Link>
    </div>
  )
}

const realtor = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const realtorMobile = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid rgb(72, 72, 72)',
  borderRadius: '5px',
  padding: '0.5rem',
}