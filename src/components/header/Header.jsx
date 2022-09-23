import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-card1.jpg'
import HeaderSocials from './HeaderSocials'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'
import ME2 from '../../assets/me-card2.jpg'

const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <div className="header__intro">
        <h5 className="text-light">Hello, I'm</h5>
        <h1>Szymon Pozniewski</h1>
        
      </div>
      <CTA />
      <HeaderSocials />

      <div className="card">
        <div className="imgBox">
          <img src={ME} alt="Me"></img>
          <img src={ME2} alt="Me2"></img>
        </div>
        <div className="details">
          <div className="content">
            <h2>Szymon Pozniewski</h2>
            <h5>Junior Fullstack Developer, Designer, Artist</h5>
            <h4>Pronounced: Shh-mohn Poh-znieh-vski</h4>
            <h5>Thank you for taking your time to visit,
              Take a look around!
            </h5>

            <ul className="quickNav">
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="social-icons">
                <a href="https://instagram.com/shh.mon" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                <a href="https://github.com/ShhmonDai" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer"><FiDribbble /></a>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className='scroll__down'>Get to know me <AiOutlineArrowRight/> </a>

    </div>
   </header>
  )
}

export default Header

