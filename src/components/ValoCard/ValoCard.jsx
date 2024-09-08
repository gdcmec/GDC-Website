import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';



import './ValoCard.css';

const ValoCard = ({ event }) => {
  const [showGallery, setShowGallery] = useState(false);

  const handleGallery = () => {
    if (event?.status === 'View Gallery') {
      setShowGallery(!showGallery);
    }
  };

  // Disable vertical scrolling when the gallery is open
  showGallery ? (document.body.style.overflowY = 'hidden') : (document.body.style.overflowY = 'auto');

  let date = new Date(event?.date);
  date = date.toLocaleDateString('en-IN');

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          staggerChildren: 0.3,
          delayChildren: 0.5,
          duration: 0.5,
        }}
        className="mb-5 z-4 cardclass"
      >
        <div className="effect-card gaming-card">
          <div className="status-report">
            <p>{event?.date}</p>
          </div>
          <div className="card-content">
            <p className="player-name">
              {' '}
              <span>{event.college}</span>
            </p>
            <h2>{event?.title}</h2>
            <p className="player-role">
              {event?.venuep1}
              <span>{event?.venuep2}</span>
            </p>
          </div>
          <div className="card-footer">
            <p className="text-sm px-5 font-semibold text-black ">{event?.detail}</p>
            <a className="btn" onClick={handleGallery} href={event?.link} target="blank">
              <span className="btn__inner">
                <span className="btn__slide"></span>
                <span className="btn__content">{event?.status}</span>
              </span>
            </a>
          </div>
          <div className="background-image">
            <img src={event?.image} alt="Event" />
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showGallery && (
          <div className="galleryOverlay" onClick={handleGallery}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="galleryContainer"
            >
              <h1>Gallery</h1>
              {event?.images.length ? (
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                loop
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                effect="fade" 
                fadeEffect={{ crossFade: true }}
                pagination={{ clickable: false }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                  className="mySwiper"
                >
                  {event.images.map((imgUrl, index) => (
                    <SwiperSlide key={index}>
                      <img src={imgUrl} alt={`Slide ${index}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <p>No images available.</p>
              )}

              <button onClick={handleGallery} className="close-btn">
              <svg stroke="gold" fill="gold" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ValoCard;
