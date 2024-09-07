import { React, useEffect } from 'react'
import Teamcard from '../Teamcard/Teamcard'
import './Team.css'
import member from './MemberDetails.js'
import { motion } from 'framer-motion'



const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className="main-container">
          <h1 className="team-title">Our Team</h1>
            <div className="team-container">
            {member.map((members, index) => (
            <Teamcard key={index} members={members} />
            ))}
                {/* <Teamcard /> */}

            </div>
        </motion.div>
    </>
  )
}

export default Team