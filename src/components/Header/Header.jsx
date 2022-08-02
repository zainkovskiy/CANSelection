import React from "react";

import { Realtor } from 'components/Realtor';
import useMediaQuery from '@mui/material/useMediaQuery';

import './Header.scss';


export function Header() {
  const mobileView = useMediaQuery('(min-width: 480px)')

  return (
    <div
      className='header'
      style={ !mobileView ? headerMobile : {} }
    >
      <img className='header__logo' src="https://crm.centralnoe.ru/dealincom/assets/logo_can.jpg" alt="logo" />
      {
        mobileView &&
        <Realtor/>
      }
    </div>)
}
const headerMobile = {
  padding: '0.5rem',
  justifyContent: 'center'
}