import React from "react";

import { Header } from 'components/Header';
import { LayoutContext } from 'components/LayoutContext';
import { Contacts } from 'components/Contacts';
import { Cards } from 'components/Cards';

export const Layout = () => {
  return (
    <div style={container}>
      <LayoutContext>
        <Header />
        <Contacts />
        <Cards/>
      </LayoutContext>
    </div>
  )
}

const container = {
  maxWidth: '1170px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}