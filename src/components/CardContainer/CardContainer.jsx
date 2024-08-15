import React from 'react';
import ValoCard from '../ValoCard/ValoCard';
import background from '../../assets/events-bg.jpg';
import './CardContainer.css';
import eventDetails from './eventDetails';

const CardContainer = () => {
  return (
    <div
      className="min-h-[100vh] flex flex-col justify-center border-y-[1px] border-[#fff3d5] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="my-8">
        <h1 className="text-3xl text-center  text-white events-heading font-semibold">Events</h1>
      </div>
      <div id = "card" className="grid grid-cols-1 md:grid-cols-3 content-center items-center gap-16 md:gap-8 px-5 py-5 w-full">
        {eventDetails.map((event, index) => (
          <ValoCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
