import React, { useContext, useState } from 'react'
import {alterHostel} from '../EXtras/PostFunctions'
import AuthContext from '../context/AuthContext'
import spinner from '../assets/loader-icon.svg'
const Switch = ({hostel,setAllHostels}) => {
    const [on, setOn] = useState(hostel.active)
    const {SERVER_URL} = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
  return (
      <div className="d-flex align-items-center justify-content-center">
        {
          loading ? <span className="bg-dark rounded-circle">
            <img src={spinner}  alt="" style={{width: 30, height: 30}}/>
          </span>:<>
          <div className={`${on ? 'bg-success': 'bg-danger'} rounded-edges custom-shadow-left`} style={{width: 45, padding: 2}} onClick={()=>alterHostel(SERVER_URL,hostel.active,hostel.id,setOn,setLoading,setAllHostels)}>
         <div className={`rounded-circle bg-light ${on && 'move-right'} `} style={{width: 20, height: 20, transition:'.2s'}}></div>
       </div>
       <span style={{width: 110}} className="px-3 d-none d-lg-flex py-2 custom-shadow-left mx-2  rounded">{on ? 'activated': 'deactvated'}</span>
         </>
        }
      </div>
  )
}

export default Switch
