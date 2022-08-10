import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Realtor } from 'components/Realtor';

import { Header } from 'components/Header';
import { LayoutContext } from 'components/LayoutContext';
import { Cards } from 'components/Cards';
import { CardFull } from 'components/CardFull';

export const Layout = ({ resetAuthorization }) => {
  const mobileView = useMediaQuery('(max-width: 480px)')
  const container = {
    maxWidth: '1170px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: mobileView ? '0.5rem' : '1rem'
  }
  return (
    <BrowserRouter>
      <div style={container}>
        <LayoutContext resetAuthorization={resetAuthorization}>
          <Header />
          {
            mobileView &&
            <Realtor />
          }
          <Routes>
            {/*prod*/}
            <Route path='account/client/' element={<Cards />} />
            <Route path='account/client/:id' element={<CardFull />} />

            {/*dev*/}
            {/* <Route path='dev/selection/' element={<Cards />} />
            <Route path='dev/selection/:id' element={<CardFull />} /> */}

            {/*dev/local*/}
            {/* <Route path='/' element={<Cards />} />
            <Route path='/:id' element={<CardFull />} /> */}
            <Route path='*' element={<span className="text">page not found</span>} />
          </Routes>
        </LayoutContext>
      </div>
    </BrowserRouter>
  )
}
