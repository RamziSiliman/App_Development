import React, {useContext, useState} from 'react'
import { DisplayLoader } from '../EXtras/DislayLoader'
import AuthContext from '../context/AuthContext'
import {getSlotsRemaining, getRoomType} from '../EXtras/GetSlots'
const ViewRoom = ({thisRoom}) => {
const [loading, setLoading] = useState(false)
const {SERVER_URL} = useContext(AuthContext)
  return (
    <div className="modal fade" id="roomModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
     {
      loading ? DisplayLoader(): <div className="modal-content hair-line bg-light">
      <div className="modal-header border-0 bg-light">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      {
        thisRoom && <div className="modal-body px-0 py-0">
        <div className="img">
                            <img src={`${SERVER_URL}${thisRoom.photo}`}  />
                        </div>
                      <div className="px-3">
                      <p className='mt-3 py-2'><b>Room {thisRoom.number}</b>
                        </p>
                        <span className="text-secondary" style={{fontSize: '14px'}}>
                        <p className=''>UGX {thisRoom.price} (per month)</p>
                        <p>{getSlotsRemaining(thisRoom.occupants, thisRoom.capacity)}</p>
                        <p className=''>{getRoomType(thisRoom.capacity)}</p>
                        </span>
                      </div>
      </div>
      }
    </div>
     }
    </div>
  </div>
  )
}

export default ViewRoom
