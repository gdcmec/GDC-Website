import React, { useState } from 'react';
import ValoCard from '../ValoCard/ValoCard';
import background from '../../assets/events-bg.jpg';
import './CardContainer.css';
import eventDetails from './eventDetails';
import pastEvents from './pastEvents.js';
import { color, motion } from 'framer-motion';
// import ScrollAnimation from 'react-animate-on-scroll';

const CardContainer = () => {
  const [active, setActive] = useState(true);
  const [selectedCollege, setSelectedCollege] = useState('MEC');

  const handleCollegeChange = (college) => {
    setSelectedCollege(college);
  };
  console.log(active);

  const getEvents = (events) => {
    return events[selectedCollege] || []; // Return the specific college's events or empty array if none
  };

  const filteredEvents = getEvents(eventDetails);
  const filteredPastEvents = getEvents(pastEvents);

  return (
    <>
      {/* <div
      className="min-h-[100vh] flex flex-col justify-center mb-12 border-y-[1px] border-[#fff3d5] bg-cover bg-center bg-no-repeat w-[100vw]"
      style={{
        backgroundImage: `url(${background})`,
      }}
    > */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="my-8"
      >
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-center text-white events-heading font-semibold">Events</h1>
          <div className="flex items-center justify-between my-4">
            <div className="relative inline-flex max-w-xs sm:max-w-none">
              <select
                className="block w-full sm:w-auto py-3 px-4 text-sm  font-medium bg-black border border-black rounded-lg shadow-sm appearance-none focus:outline-none focus:bg-black focus:border-black text-white hover:bg-black"
                value={selectedCollege}
                id="college-select"
                onChange={(e) => handleCollegeChange(e.target.value)}
              >
                <option value="MEC">Model Engineering College</option>
                <option value="MES Engineering College">MES Engineering College</option>
                <option value="Illahia College of Engineering">Illahia College of Engineering</option>
                <option value="Adi Shankara Institute of Engineering and Technology">
                  Adi Shankara Institute of Engineering and Technology
                </option>
                <option value="Mar Athanasius College of Engineering">Mar Athanasius College of Engineering</option>
                <option value="LBS Institute of Technology">LBS Institute of Technology</option>
                <option value="KMEA Engineering College">KMEA Engineering College</option>
                <option value="Albertian Institute of Science & Technology">
                  Albertian Institute of Science & Technology
                </option>
                <option value="Vishwajyothi College of Engineering and Technology">
                  Vishwajyothi College of Engineering and Technology
                </option>
                <option value="Rajadhani Institute of Science & Technology">
                  Rajadhani Institute of Science & Technology
                </option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-white transition-transform duration-300 transform"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="eve">
          <button
            className={`btn ${active ? 'active' : ''}`}
            id="upc"
            onClick={() => {
              setActive(true);
              changeColor();
            }}
            // style={{color: "#fff"}}
          >
            Upcoming
          </button>
          <button
            id="pas"
            className={`btn ${active ? '' : 'active'}`}
            onClick={() => {
              setActive(false);
              changeColor();
            }}
            // style={{color: "#fff"}}
          >
            Past
          </button>
        </div>
      </motion.div>

      {active ? (
        <motion.div id="cardcont">
          {filteredEvents.length ? (
            filteredEvents.map((event, index) => <ValoCard key={index} event={event} />)
          ) : (
            <p className="text-white font-mfont h-[50vh] text-3xl text-center mx-10 pt-20">
              No upcoming events for {selectedCollege === 'All' ? 'any college' : selectedCollege}.
            </p>
          )}
        </motion.div>
      ) : (
        <div id="cardcont2">
          {filteredPastEvents.length ? (
            filteredPastEvents.map((event, index) => <ValoCard key={index} event={event} />)
          ) : (
            <p className="text-white font-mfont h-[50vh] text-3xl text-center mx-10 pt-20">
              No past events for {selectedCollege === 'All' ? 'any college' : selectedCollege}.
            </p>
          )}
        </div>

        
      )}
    </>
  );
};

export default CardContainer;
