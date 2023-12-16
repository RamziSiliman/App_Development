import React, { useContext, useLayoutEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Switch from '../components/Switch'
import AuthContext from '../context/AuthContext'
import {getAllHostels} from '../EXtras/GetterFunctions'
import { DisplayLoader } from '../EXtras/DislayLoader'
import { Link } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
const D_Home = () => {
  const {SERVER_URL,Logout} = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [allhostels, setAllHostels] = useState([])
  let options=[
    {
      text: 'Signout',
      action:()=> Logout()
    }
  ]
  useLayoutEffect(()=>{
getAllHostels(setLoading, setAllHostels,SERVER_URL, 'filter')
setLoading(false)
  },[])
  let storedTokens = JSON.parse(localStorage.getItem('authtokens'))
  let authtokens = storedTokens ? jwtDecode(storedTokens.access) : ''
  let accountType = authtokens ? authtokens.groups[0] : ''
  return (
    <>
   {
    accountType == "dean" ? 
      loading ? DisplayLoader():<div>
      <Navbar theme={'dark'} fixed={true} options={options}/>
      <div className="mt-5 pt-5 container">
{
  allhostels.length > 0 ?        <table className='w-100'>
  <thead>
    <tr className='bg-dark text-light'>
      <td className='px-4 py-3'><small>Hostel Name</small></td>
      {
        window.innerWidth > 768 && <td className='px-4 py-3'><small>Address</small></td>
      }
      <td className='px-4 py-3 d-flex align-items-center justify-content-center'><small>Hostel status</small></td>
    </tr>
  </thead>
  <tbody className='custom-shadow-left'>
 {
  allhostels.map(hostel=>(
    <tr >
    <td className='px-4 py-3'><small>{hostel.name}</small></td>
    {
        window.innerWidth > 768 && <td className='px-4 py-3'><small>{hostel.address}</small></td>
      }
    <td className='px-4 py-3 d-flex align-items-center justify-content-center'><small><Switch hostel={hostel} setAllHostels={setAllHostels}/></small></td>
  </tr>
  ))
 }
  </tbody>
</table>: <h3 className="text-center my-5">No hostels found</h3>
}
      </div>
    </div>: <div className="text-center my-5 py-5">
            <h1>Your are not allowed here</h1>
            <Link className='nav-link' to={'/'}>
            <button  className='btn btn-danger px-4 py-2 border-0'><small>Back to login page</small></button></Link>
        </div>
   }
    </>
  )
}

export default D_Home
