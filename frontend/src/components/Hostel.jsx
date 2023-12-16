import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {FaArrowAltCircleRight} from 'react-icons/fa'
import AuthContext from '../context/AuthContext'
const Hostel = ({hostel}) => {
  const {SERVER_URL} = useContext(AuthContext)
  return (
    <div className="custom-card text-light col-lg-3 mb-5">
        <div className="img">
            <img src={`${SERVER_URL}${hostel.photo}`} alt="" />
        </div>
        <p className='mt-3'>{hostel.name}</p>
        <p className='opacity-75'>Location, {hostel.address}</p>
        <Link to={`/student/hostel/${hostel.id}`} className='nav-link'>
        <button className='btn btn-light px-4 py-2 border-0 rounded'><small>View all rooms</small><FaArrowAltCircleRight className='mx-2'/></button>
      
        </Link>
    </div>
  )
}

export default Hostel
