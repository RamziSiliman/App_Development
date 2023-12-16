import { FaArrowRight } from 'react-icons/fa'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
const Room = ({room}) => {
    const {SERVER_URL,setPendingRoom} = useContext(AuthContext)
    return (
        <div className="custom-card custom-shadow-left mb-5 px-0 no-border col-lg-4 overflow-hidden custom-shadow">
            
            <div className="img">
                <img src={`${SERVER_URL}${room.photo}`} alt="" style={{justifySelf: 'flex-end'}}/>
            </div>
            <div className="px-3 py-4 d-flex flex-column">
                <small><b className="card-title no-border my-2">Room {room.number}</b></small> 
                <small className='mb-2'><span className="lead">UGX {room.price}</span>(per month)</small> 
                <small className='mb-2'>tripple room</small>
                <button
                onClick={() => setPendingRoom(room)} 
                data-bs-toggle="modal" data-bs-target="#paypalModal"
                className={`btn btn-dark py-1 px-3 rounded px-2 d-flex align-items-center justify-content-between ${window.innerWidth > 768? 'w-50': 'w-75'}`}>
                    <small>Book Now</small><FaArrowRight />
                </button>
            </div>
        </div>
    )
}
export default Room