import React,{useContext} from 'react'
import Hostel from '../Hostel'
import StudentContext from '../../context/StudentContext'
const Hostels = () => {
  const {hostels} = useContext(StudentContext)
  return (
    <div className='bg-dark py-5' id='hostels'>
      {
        hostels.length > 0 ? <>
        <p className="text-center text-light my-5">View all hostels available</p>
    <div className="container">
      <div className="row gap-1 justify-content-center">
      {
        hostels.map(hostel=><Hostel key={hostel.id} hostel={hostel}/>)
      }
      </div>
    </div>
        </>: <p className='text-light text-center lead'>No Hostels available</p>
      }
    </div>
  )
}

export default Hostels
