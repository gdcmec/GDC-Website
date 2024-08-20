import React from 'react';
import './style.css';
import logo from '../../assets/element.png'
import { motion } from 'framer-motion'
function About() {
  return (

      <div className="About">
                  <svg className='bgsvga' width="100vw" overflow="hidden" height="100vh" viewBox='0 0 1903 1058' fill="none" preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1341.48 69.3856H536.642C518.971 69.3856 502.122 61.9232 490.246 48.8375C488.355 46.7538 486.436 44.6005 484.487 42.4122C466.867 22.637 446.697 0 421.27 0H65C29.1015 0 0 29.1015 0 65V891.899C0 927.798 29.1015 956.899 65.0001 956.899H559.666L611.275 1007.9C617.826 1014.37 626.665 1018 635.875 1018H1249.36C1258.43 1018 1267.15 1014.48 1273.67 1008.18L1326.8 956.899H1822C1857.9 956.899 1887 927.798 1887 891.899V65C1887 29.1015 1857.9 0 1822 0H1459.94C1434.65 0 1414.18 21.4471 1395.66 40.8402C1392.3 44.3623 1389 47.8167 1385.75 51.0626C1374.01 62.7954 1358.08 69.3856 1341.48 69.3856Z" fill="url(#paint0_linear_252_21)"/>
<defs>
<linearGradient id="paint0_linear_252_21" x1="943.5" y1="0" x2="943.5" y2="1018" gradientUnits="userSpaceOnUse">
<stop offset="0.45" stop-color="#1F1F1F"/>
<stop offset="1" stop-color="#3D3D3D"/>
</linearGradient>
</defs>
</svg>
        {/* <div className="abtcontent"> */}
          {/* <div className="abttext"> */}
              <motion.h2
              initial={{opacity: 0, scale: 0.9}}
              whileInView={{opacity: 1, scale: 1}}
              transition={{duration: 1}}
              className='abh2'>About</motion.h2>
              <motion.p
              initial={{opacity: 0, scale: 0.9}}
              whileInView={{opacity: 1, scale: 1}}
              transition={{duration: 1}}
              className='abp'>
                The Game Development Club (GDC) at Govt. Model Engineering College is an active community of students who are
                passionate about gaming and game development. Through hands-on workshops, engaging discussions, and innovative
                projects, members enhance their skills in programming, game design, and graphics.
                <br />
                <br /> The MAZE-X Esports Community within GDC organizes exciting multiplayer competitions, providing
                leadership and event management opportunities. Our club welcomes diverse interests, creating a space where
                members can connect with peers and explore the evolving world of gaming and esports.
              </motion.p>
          {/* </div> */}

            {/* <div className="abtimg">
              <img className = "abtlogo" src={ logo } alt="" />
            </div> */}

        {/* </div> */}
      </div>

  );
}
export default About;
