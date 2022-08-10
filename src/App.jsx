import React, { useState } from 'react';

import { Layout } from 'components/Layout';
import { Authorization } from 'components/Authorization';

import './App.scss';

function checkAutorization() {
  return localStorage.getItem('authorization') || false;
}

export function App() {
  const [authorization, setAuthorization] = useState(checkAutorization())

  const confirmAuthorization = (phone) => {
    setAuthorization(phone);
    localStorage.setItem('authorization', phone)
  }

  const resetAuthorization = () => {
    localStorage.clear();
    setAuthorization(null);
  }

  return (
    <>
      {
        authorization ?
          <Layout
            resetAuthorization={resetAuthorization}
          /> :
          <Authorization
            confirmAuthorization={confirmAuthorization}
          />
      }
    </>
  )
}