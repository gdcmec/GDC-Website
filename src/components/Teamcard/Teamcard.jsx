import React from 'react'
import './Teamcard.css'
import image from '../../assets/newlogo_crop.png'
import { motion } from 'framer-motion'

const Teamcard = ({members}) => {
  return (
    <>
        <motion.div
        initial={{ opacity: 0 , y: 50 }}
        animate={{opacity: 1, y:0}}
        transition={{ duration: 1 }}
        className="card-container">
            <div className="cardimg">
                <img src={ image } alt="" />
            </div>

            <div className="card-data">
                <h2 className="member-name"><b>{members?.name}</b></h2>
                <h3 className="position">{members?.position}</h3>
                <div className="connect-btn">
                    <button className="message">Message</button>
                    <button className="connect">Connect</button>
                </div>
            </div>
        </motion.div>
    </>
  )
}

export default Teamcard