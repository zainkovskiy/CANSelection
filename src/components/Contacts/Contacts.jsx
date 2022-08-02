import React, { useContext } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

import { Context } from 'components/LayoutContext';

export const Contacts = () => {
  const mobileView = useMediaQuery('(min-width: 480px)')
  const { data } = useContext(Context);
  return (
    <span
      style={mobileView ? styleContact : styleContactMobile }
      className="text"
    >
      Подборка для клиента {data.client}
    </span>
  )
}

const styleContact = {
  padding: '0.5rem 1rem',
  border: '1px solid #484848',
  borderRadius: '5px'
}
const styleContactMobile = {
  padding: '0.5rem',
  border: '1px solid #484848',
  borderRadius: '5px',
  textAlign: 'center',
  fontSize: '12px'
}