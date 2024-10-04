import React from 'react'
import './footer.css'
import logo from '../../assets/newlogo_crop.png'
import { motion } from 'framer-motion'

const footer = () => {
  return (
    <>
        <footer>
            <div className="maincontent">
                <img className='logoimgfooter' src={ logo } alt="" />
                <div className="socials">
                    <div className="follow">
                        <h3>Follow Us<motion.label
                        initial = {{width: 0}}
                        whileInView={{width: '80%'}}
                        transition={{duration: 0.5}}
                        className='uline' /></h3>
                    </div>
                    <div className="slinks">
                        <motion.a
                        initial = {{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.2}}
                        href="https://www.instagram.com/gdcmec?igsh=MTBrZzk4eXZjODFvag==" target='blank'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path></svg></motion.a>
                        <motion.a 
                        initial = {{opacity: 0, x: -40}}
                        whileInView={{opacity: 1, x: 0}}
                        
                        transition={{duration: 0.2}}
                        href="https://www.linkedin.com/company/gdc-mec" target='blank'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg></motion.a>

                    </div>
                </div>
                    <div className="socials">
                        <h3>Contact Us<motion.label
                        initial = {{width: 0}}
                        whileInView={{width: '40%'}}
                        transition={{duration: 0.5}}
                        className='uline' /></h3>
                        <p className='caddr'>
                            Govt. Model Engineering College<br />
                            Thrikkakara, Kochi<br />
                            Kerala, PIN: 682021<br />
                            Contact Id: gdc.mec1@gmail.com<br />
                            Phone: +91 9495925312
                        </p>
                    </div>
            </div>

            <div className="rights">
                <h3 className="rightsh3">
                <span>© 2024 GDC MEC All rights reserved. </span> Terms and Conditions | Privacy Policy
                </h3>
            </div>
        </footer>
    </>
  )
}

export default footer