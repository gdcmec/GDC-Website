import React from 'react'
import { Link } from 'react-router-dom'
import './Team.css'

const TeamPage = () => {
  return (
    <>
        <div className="teampage-container">
            <h1>Our Team</h1>
            <Link to="/team">Meet The Team</Link>
        </div>
    </>
  )
}

export default TeamPage