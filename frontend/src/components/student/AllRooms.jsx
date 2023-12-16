import Room from "./Room"
import {getHostelRooms} from '../../EXtras/GetterFunctions'
import { useContext, useEffect, useState } from "react"
import { DisplayLoader } from "../../EXtras/DislayLoader"
import AuthContext from "../../context/AuthContext"
import { useParams } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
const AllRooms = () => {
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const [rooms, setRooms] = useState([])
    const {SERVER_URL} = useContext(AuthContext)
    useEffect(()=>{
getHostelRooms(setLoading,setRooms, SERVER_URL, id )
    },[])
    return (
        <div className="container py-3 custom-shadow">
          {
            loading ? <span className="opacity-75">{DisplayLoader()}</span>:
            <div className="row gap-3 justify-content-center" id="allrooms">
            {
                rooms.length > 0 ? rooms.filter(room=>!((room.occupants).includes(jwtDecode(JSON.parse(localStorage.getItem('authtokens')).access).user_id))).map(room=><Room room = {room} key={room.id}/>):
                <p className="text-center">No rooms available</p>
            }
            
        </div>
          }

        </div>
    )
}
export default AllRooms

