import React, { useContext } from "react";
import { AnimatePresence, motion } from 'framer-motion';

import { Card } from "components/Card";
import { Context } from 'components/LayoutContext';
import { Contacts } from 'components/Contacts';
import './Cards.scss';

export function Cards() {
  const { data, setNewEmotion } = useContext(Context);
  return (
    <>
      <Contacts />
      <motion.div layout className="cards" >
        <AnimatePresence>
          {
            data.data.map((card, idx) =>
              <Card
                key={card.UID}
                card={card}
                setNewEmotion={setNewEmotion}
              />
            )
          }
        </AnimatePresence>
      </motion.div>
    </>
  )
}