import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Landing.css'
import logo from '../../assets/newlogo.png'
// import Omodel from '../model/model'
import { motion } from 'framer-motion'
// import explore from '../../assets/Group.png'
import controller from '../../assets/controller.png'

const landing = () => {

  // const logomodel =  useGLTF('./GDC_logo_glb.glb');


  return (
    <>

          <div className="landing">
          <svg className='bgsvg' width="100vw" overflow="hidden" height="100%" viewBox='0 0 1903 1058' fill="none" preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1341.48 69.3856H536.642C518.971 69.3856 502.122 61.9232 490.246 48.8375C488.355 46.7538 486.436 44.6005 484.487 42.4122C466.867 22.637 446.697 0 421.27 0H65C29.1015 0 0 29.1015 0 65V891.899C0 927.798 29.1015 956.899 65.0001 956.899H559.666L611.275 1007.9C617.826 1014.37 626.665 1018 635.875 1018H1249.36C1258.43 1018 1267.15 1014.48 1273.67 1008.18L1326.8 956.899H1822C1857.9 956.899 1887 927.798 1887 891.899V65C1887 29.1015 1857.9 0 1822 0H1459.94C1434.65 0 1414.18 21.4471 1395.66 40.8402C1392.3 44.3623 1389 47.8167 1385.75 51.0626C1374.01 62.7954 1358.08 69.3856 1341.48 69.3856Z" fill="url(#paint0_linear_252_21)"/>
<defs>
<linearGradient id="paint0_linear_252_21" x1="943.5" y1="0" x2="943.5" y2="1018" gradientUnits="userSpaceOnUse">
<stop offset="0.45" stop-color="#3D3D3D"/>
<stop offset="1" stop-color="#1F1F1F"/>
</linearGradient>
</defs>
</svg>

            <img className = "logo" src= { logo } alt="" />
            <motion.img
            initial={{y: -70, rotate: 45, opacity: 0}}
            whileInView={{y: 0, opacity: 0.5}}
            transition={{duration: 1}}
            className='con1' src={ controller } alt="" />
            <motion.img 
            initial={{y: 80, rotate: 45, opacity: 0}}
            whileInView={{y: 0, opacity: 0.5}}
            transition={{duration: 1}}
            className='con2' src={ controller } alt="" />
            {<a href='https://www.zetrel.in' target='blank' className='blogbtn'>Zetrel</a>}
              {/* <Navbar /> */}
              <motion.h1
               initial={{ opacity: 0, y: -50}}
               whileInView={{opacity: 1, y: 0}}
               transition={{duration: 1}}
               className='landing-h1'
               data-text = "Game Development">
              <h1 className='landing-h1'>Game Development<br></br>Club<br></br></h1></motion.h1>
              <motion.span
              id = "sub"
              initial={{ opacity: 0, y: -50}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 1}}>Think It • Build It • Play It</motion.span>
              <motion.a 
              initial = {{opacity: 0, scale: 0.9}}
              whileInView={{opacity:1, scale: 1}}
              transition={{duration: 1}}
              className='expimg' href='#about'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 9.646a.5.5 0 01.708 0L8 12.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M8 2.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V3a.5.5 0 01.5-.5z" clip-rule="evenodd"></path></svg></motion.a>
          </div>
          {/* <div className="modeldiv">
            <Omodel />
          </div> */}
    </>
  )
}

export default landing

