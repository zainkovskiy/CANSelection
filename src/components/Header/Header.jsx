import React, { useContext } from "react";

import Link from '@mui/material/Link';

import { Context } from 'components/LayoutContext';

import './Header.scss';


export function Header() {
  const { data } = useContext(Context);

  return (<div className='header'>
    <img className='header__logo' src="https://crm.centralnoe.ru/dealincom/assets/logo_can.jpg" alt="logo" />
    <div className="header__realtor">
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
        {data.realtor.name}
      </span>
      <Link
        href={`tel:${data.realtor.phone}`}
        underline="hover"
        style={{ fontSize: '12px' }}
      >
        {data.realtor.phone}
      </Link>
    </div>
  </div>)
}
