import React, { useContext } from 'react'
import StudentContext from '../../context/StudentContext'

const Statistics = ({statistics}) => {
   const {hostels} = useContext(StudentContext)
  return (
    <div className=' rounded py-3 px-4 custom-shadow-left bg-light text-dark statistics'>
      <div className="stat-container d-flex align-items-center">
        
               <span className='mx-2'>
                 <h5>{hostels.length}</h5>
                <small className='text-secondary'>Hostels available</small>
               </span>
               <span className='mx-4'>
                 <h5>200+</h5>
                <small className='text-secondary'>clients</small>
               </span>
      </div>
    </div>
  )
}

export default Statistics
