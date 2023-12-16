import React, { useContext, useState } from 'react'
import { DisplayLoader } from '../EXtras/DislayLoader'
import Input from '../components/Input'
import {updateHostel} from '../EXtras/PostFunctions'
import AuthContext from '../context/AuthContext'
const EditHostel = () => {

    const {SERVER_URL,setMyHostel, myHostel} = useContext(AuthContext)

    const [loading, setLoading] = useState(false)
    const [hostelname, sethostelname] = useState(myHostel && myHostel.name)
    const [description, setdescription] = useState(myHostel && myHostel.description)
    const [image, setimage] = useState([])


  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
     {
      loading ? DisplayLoader(): <div className="modal-content bg-light">
      <div className="modal-header border-0 bg-light">
        <p className="modal-title text-db fs-5" id="exampleModalLabel">
         <small>update hostel info</small>
        </p>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <Input label={'Hostel name'} inputType={'text'} placeholder={'Enter your new hostel name'} value={hostelname} setter={sethostelname}/>
        <Input label={'Description'} inputType={'text'} placeholder={'write something about your hostel'} value={description} setter={setdescription}/>
        <label htmlFor="" className='my-3'>Select a picture for your hostel</label>
        <input type="file" name="" id="" onChange={(e)=>setimage(e.currentTarget.files)}/>
        <button type="button"  data-bs-dismiss="modal" className="btn btn-dark my-3" onClick={()=>updateHostel(setLoading,SERVER_URL,hostelname,description,image,setMyHostel)}><small>Confirm changes</small></button>
      </div>
    </div>
     }
    </div>
  </div>
  )
}

export default EditHostel
