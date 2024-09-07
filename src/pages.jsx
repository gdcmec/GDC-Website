import { useState, useEffect } from 'react';
import './App.css';
import About from './components/About/About';

import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/footer'
import Team from './components/Team/Team';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';
import { Nintendo } from './components/Nintendo/Nintendo';
import { NintendoMob } from './components/NintendoMob/NintendoMob';
import { Responsivehook1 } from './components/ResponsiveHook';
import ValoCard from './components/ValoCard/ValoCard';
import CardContainer from './components/CardContainer/CardContainer';
import Events from './components/CardContainer/CardContainer';
import TeamPage from './components/Team/TeamPage';

const pages = () => {
  return (
    <>
        <Navbar />
        <section id="home">
              <Landing />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="events">
              <Events />
            </section>
            {/* <section id="team">
              <TeamPage />
            </section> */}
            <section id="contact">
              <Contact />
        </section>
        <Footer />
    </>
  )
}

export default pages