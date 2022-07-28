import React, { useContext } from "react";
import { AnimatePresence, motion } from 'framer-motion';

import { Card } from "components/Card";
import { Context } from 'components/LayoutContext';
import './Cards.scss';

export function Cards() {
  const { data } = useContext(Context);
  return (
    <motion.div layout className="cards" >
      <AnimatePresence>
        {
          data.cards.map(card =>
            <Card
              key={card.reqNumber}
              card={card}
            />
          )
        }
      </AnimatePresence>
    </motion.div>
  )
}