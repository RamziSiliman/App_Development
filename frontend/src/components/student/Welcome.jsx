import React from 'react'
import WelcomeImage from '../../assets/welcomeImage.svg'
const Welcome = () => {
  return (
    <div className='container my-5 pt-5 d-flex align-items-center justify-content-center'>
      <img src={WelcomeImage} alt="" className='d-lg-block d-none'/>
      <span className='mx-3'>
        <h4 className='my-4 '>Before you proceed</h4>
        <small className='text-secondary'>
        E-Broker is an online platform that is here to
assist you <br/> on your quest for that room that will get you through
campus <br/> with ease, enjoy you journey
        </small>
      </span>
    </div>
  )
}

export default Welcome
