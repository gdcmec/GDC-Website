import React, { useState } from 'react';
import ValoCard from '../ValoCard/ValoCard';
import background from '../../assets/events-bg.jpg';
import './CardContainer.css';
import eventDetails from './eventDetails';
import pastEvents from './pastEvents.js';
import { color, motion } from 'framer-motion'
// import ScrollAnimation from 'react-animate-on-scroll';


const CardContainer = () => {
  const [active, setActive] = useState(true);
  console.log(active);

  return (
    <>
    {/* <div
      className="min-h-[100vh] flex flex-col justify-center mb-12 border-y-[1px] border-[#fff3d5] bg-cover bg-center bg-no-repeat w-[100vw]"
      style={{
        backgroundImage: `url(${background})`,
      }}
    > */}
      <motion.div 
      initial={{ opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1}}
      className="my-8">
        <h1 className="text-center text-white events-heading font-semibold">Events</h1>
        <div className="eve">
          <button
            className={`btn ${active ? 'active' : ''}`}
            id='upc'
            onClick={() => {setActive(true); changeColor()}}
            // style={{color: "#fff"}}
          >
            Upcoming
          </button>
          <button
          id='pas'
            className={`btn ${active ? '' : 'active'}`}
            onClick={() => {setActive(false); changeColor()}}
            // style={{color: "#fff"}}
          >
            Past
          </button>
        </div>
      </motion.div>
        
      {
        active? 
      <motion.div id = "cardcont" >
        {eventDetails.map((event, index) => (
          <ValoCard key={index} event={event} />
        ))}
      </motion.div>
      :<div id = "cardcont2" >
      {pastEvents.map((event, index) => (
        <ValoCard key={index} event={event}/>
      ))}
    </div>
      }
    </>
  );
  
};

export default CardContainer;