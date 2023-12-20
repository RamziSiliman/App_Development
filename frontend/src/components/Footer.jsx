import React from 'react'
import { Link } from 'react-router-dom'
import {FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='d-flex align-items-center my-5'>
          <div className="container text-center">
                <p className="opacity-75"><small>All rights reserved</small></p>
                <p className=""><small>avici webdesign solutions company Limited</small></p>
                <p>&copy;{new Date().getFullYear()}</p>
                <p className='text-secondary'><small>contact us via</small></p>
               <div className="d-flex align-items-center justify-content-center">
               <Link to="http://www.instagram/v.in.ce.nt._" className='nav-link'><FaInstagram className='mx-1' size={23}/> </Link>
                <Link to="http://www.linkedin.com/kigongovincent" className='nav-link'><FaLinkedin className='mx-1' size={23}/></Link>
                <Link to="http://www.youtube.com/@stemsdj" className='nav-link'><FaYoutube className='mx-1' size={23}/></Link>
               </div>   
            </div>
    </div>
  )
}
export default Footer
