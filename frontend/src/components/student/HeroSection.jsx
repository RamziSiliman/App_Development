import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
import Statistics from './Statistics'
const HeroSection = () => {
  
  return (
    <div className='s-home-hero-section  position-relative bg-room fixed-bg  text-light  d-flex align-items-center justify-content-center flex-column'>
      <div className=" container d-flex align-items-center justify-content-center flex-column">
      <p className='text-center'>ITS MORE THAN JUST A SITE</p>
      <h1 className='text-center'>GET A ROOM WITH EASE</h1>
      <a href="#hostels" className='nav-link'>
      <button className="btn bg-light-brown text-light btn-dark px-3 py-2 border-0 rounded-edges d-flex align-items-center justify-content-between">Start your journey <FaArrowRight className='mx-3'/></button>
      <span className="d-lg-block d-none">
      <Statistics/>
      </span>
      </a>
      </div>
    </div>
  )
}

export default HeroSection
