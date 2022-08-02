import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Realtor } from 'components/Realtor';

import { Header } from 'components/Header';
import { LayoutContext } from 'components/LayoutContext';
import { Cards } from 'components/Cards';
import { CardFull } from 'components/CardFull';

export const Layout = () => {
  const mobileView = useMediaQuery('(max-width: 480px)')
  return (
    <BrowserRouter>
      <div style={container}>
        <LayoutContext>
          <Header />
          {
            mobileView &&
            <Realtor />
          }
          <Routes>
            {/* <Route path='dev/selection/' element={<Cards />}/> */}
            <Route path='/' element={<Cards />}/>
            <Route path='/:id' element={<CardFull/>}/>
            <Route path='*' element={<span className="text">page not found</span>}/>
          </Routes>
        </LayoutContext>
      </div>
    </BrowserRouter>
  )
}

const container = {
  maxWidth: '1170px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}