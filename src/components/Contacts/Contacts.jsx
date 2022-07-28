import React, { useContext } from "react";

import { Context } from 'components/LayoutContext';

export const Contacts = () => {
  const { data } = useContext(Context);
  return (
    <span
      style={styleContact}
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