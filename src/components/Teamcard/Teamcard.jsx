import React from 'react'
import './Teamcard.css'
import image from '../../assets/newlogo_crop.png'

const Teamcard = () => {
  return (
    <>
        <div className="card-container">
            <div className="cardimg">
                <img src={ image } alt="" />
            </div>

            <div className="card-data">
                <h2 className="member-name"><b>Name</b></h2>
                <h3 className="position">Tech Lead</h3>
                <div className="connect-btn">
                    <button className="message">Message</button>
                    <button className="connect">Connect</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Teamcard