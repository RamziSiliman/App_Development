import React, {useContext, useState} from 'react'
import { DisplayLoader } from '../EXtras/DislayLoader'
import AuthContext from '../context/AuthContext'
import {updateRoom} from '../EXtras/PostFunctions'
import Input from './Input'
const ViewRoom = ({thisRoom, updaterooms}) => {
const [number, setnumber] = useState('')    
const [capacity, setcapacity] = useState(0)    
const [price, setprice] = useState(0)    
const [image, setImage] = useState([])    
const [loading, setLoading] = useState(false)
const {SERVER_URL} = useContext(AuthContext)
  return (
    <div className="modal fade" id="updateroomModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
     {
      loading ? DisplayLoader(): <div className="modal-content bg-light">
      <div className="modal-header border-0 bg-light">
      <p className="modal-title text-db fs-5" id="exampleModalLabel">
         <small>update Room {thisRoom && thisRoom.number}</small>
        </p>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      {
        thisRoom && <div className="modal-body">
                        <Input label={'Room Number'} value={number} inputType={'text'} setter={setnumber}/>
                        <Input label={'Number of students the room can take'} value={capacity} inputType={'number'} setter={setcapacity}/>
                        <Input label={'Room Price (per month)'} value={price} inputType={'number'} setter={setprice}/>
                        <label htmlFor="">Select a photo of the room</label>
                        <input type="file" name="" id="" className='my-4' accept='image/*' onChange={(e)=>setImage(e.currentTarget.files)}/>
                        <button className="btn btn-dark px-4 py-2" data-bs-dismiss="modal" type='button' onClick={()=>updateRoom(setLoading,SERVER_URL,number,capacity,price,image,thisRoom && thisRoom.id, updaterooms)}><small>Save changes</small></button>
      </div>
      }
    </div>
     }
    </div>
  </div>
  )
}

export default ViewRoom
