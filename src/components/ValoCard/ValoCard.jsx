import React from 'react';
import { motion } from 'framer-motion'

import './ValoCard.css';

const ValoCard = ({ event }) => {
  let date = new Date(event?.date);
  date = date.toLocaleDateString('en-IN');
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{
        staggerChildren: 0.3,
        delayChildren: 0.5,
        duration: 0.5
      }}
    className="mb-5 z-4 cardclass">
      <div class="effect-card gaming-card">
        <div class="status-report">
          <p>{date}</p>
        </div>
        <div class="card-content">
          <p class="player-name">
            {' '}
            <span>GDCMEC</span>
          </p>
          <h2>{event?.title}</h2>
          <p class="player-role">
            {event?.venue}
            <span>Hall</span>
          </p>
        </div>
        <div class="card-footer">
          {/* <p className="font-black text-xl tracking-wide text-black">{date}</p> */}
          <p className="text-sm px-5 font-semibold text-black ">{event?.detail}</p>
          <a class="btn" href= {event?.link} target='blank'>
            <span class="btn__inner">
              <span class="btn__slide"></span>
              <span class="btn__content">{event?.status}</span>
            </span>
          </a>
        </div>
        <div class="background-image">
          <img src={event?.image} />
        </div>
      </div>
    </motion.div>
  );
};

export default ValoCard;



