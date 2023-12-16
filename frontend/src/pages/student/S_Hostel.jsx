import React, {useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import AllRooms from '../../components/student/AllRooms'
import Footer from '../../components/Footer'
import AuthContext from '../../context/AuthContext'
import {getHostel} from '../../EXtras/GetterFunctions'
import { DisplayLoader } from '../../EXtras/DislayLoader'
import Redirect from '../../components/Redirect'
import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'
import Paypal from '../../components/Paypal'
const S_Hostel = () => {
  const {SERVER_URL,Logout} = useContext(AuthContext)
  let storedTokens = JSON.parse(localStorage.getItem('authtokens'))
  let authtokens = storedTokens ? jwtDecode(storedTokens.access): ''
  let accountType = authtokens ? authtokens.groups[0] : ''
  const [loading, setLoading] = useState(true)
  const [currentHostel, setCurrentHostel] =useState({})
  const { id } = useParams()
  let options = [
    {

      text: 'Back to home',
      address: '/student',
      action: null,
    },
    {
      text: 'view booking history',
      address: '/student/booking',
      action: null,
    },
    {
      text: 'signout',
      address: '/hostels',
      action: () => Logout(),
    }
  ]
  useEffect(()=>{
getHostel(setLoading,setCurrentHostel, SERVER_URL, id)
  window.scrollTo(0, 0);

  },[])
  return (
   <>
   {
    accountType == "student" ? loading ? DisplayLoader() :  <div>
    <Navbar theme={'dark'} options={options} fixed={true}/>
    <div className="mt-5 pt-4">
    {
      currentHostel ? <div className="container custom-shadow-left px-lg-5 pb-3 px-2 py-lg-4 my-5 d-lg-flex align-items-center justify-content-center">
      <div className="custom-card">
        <div className="img rounded">
          <img src={`${SERVER_URL}${currentHostel.photo}`} alt="" />
        </div>
      </div>
      <div className={`mx-lg-4 mx-2 desc`}>
        <h1 className=' my-4'>{currentHostel.name}</h1>
        <small>
        <p className='text-success'>Hostel Desscription</p>
        <p className=' text-secondary'>{currentHostel.description}</p>
        <p>Custodian's email, <u>{currentHostel.hostelManager}</u></p>
        </small>
      </div>
    </div>: <p className="text-center my-4">Hostel info not found</p>
    }
    </div>

    <h6 className='text-center'>Rooms Available</h6>

    <AllRooms/>
    <Paypal/>
    <Footer/>
  </div>: <Redirect/>
   }
   </>
  )
}

export default S_Hostel
