import React, {useContext, useState} from 'react'
import { DisplayLoader } from '../EXtras/DislayLoader'
import AuthContext from '../context/AuthContext'
import {uploadRoom} from '../EXtras/PostFunctions'
import Input from './Input'
const UplaodRoom = ({updaterooms}) => {
    const [loading, setLoading] = useState(false)
    const {SERVER_URL} = useContext(AuthContext) 
    const [roomnumber, setroomnumber] = useState('') 
    const [roomcapacity, setroomcapacity] = useState('') 
    const [roomprice, setroomprice] = useState('') 
    const [roomimage, setroomimage] = useState('') 
  return (
    <div className="modal fade" id="uploadroomModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
     {
      loading ? DisplayLoader(): <div className="modal-content bg-light">
      <div className="modal-header border-0 bg-light">
      <p className="modal-title text-db fs-5" id="exampleModalLabel">
         <small>upload new room</small>
        </p>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
     <div className="modal-body">
        <Input placeholder={'Enter the room number'} label={'Room number'} value={roomnumber} inputType={'text'} setter={setroomnumber}/>
        <Input placeholder={'Enter the number of people the room can take'} inputType={'number'} label={'Room capacity'} value={roomcapacity} setter={setroomcapacity}/>
        <Input placeholder={'Enter the price for the room'} inputType={'number'} label={'Room price (per month)'} value={roomprice} setter={setroomprice}/>
        <label htmlFor="" className="">Select a photo for the room</label>
        <input type="file" className='my-4' accept='image/*' onChange={(e)=>setroomimage(e.currentTarget.files)}/>
        <button className="btn btn-success border-0 px-4 py 2" data-bs-dismiss="modal" type='button' onClick={()=>uploadRoom(setLoading,SERVER_URL,roomnumber,roomcapacity,roomprice,roomimage,updaterooms)}><small>Confirm upload</small></button>
      </div>
    </div>
     }
    </div>
  </div>
  )
}
export default UplaodRoom
