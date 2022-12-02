import React, { useState } from 'react';
import moment from 'moment/moment';

import { Layout } from 'components/Layout';
import { Authorization } from 'components/Authorization';

import './App.scss';

function checkAutorization() {
  const localStorageDate = moment(localStorage.getItem('authorizationDate'));
  if (localStorageDate && localStorageDate.isBefore(moment(), 'day')){
    localStorage.clear();
    return false;
  }
  return localStorage.getItem('authorizationPhone') || false;
}

export function App() {
  const [authorization, setAuthorization] = useState(checkAutorization())

  const confirmAuthorization = (phone) => {
    //89232296268
    setAuthorization(phone);
    localStorage.setItem('authorizationPhone', phone)
    localStorage.setItem('authorizationDate', moment())
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