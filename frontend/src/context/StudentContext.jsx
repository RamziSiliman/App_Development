import { createContext, useEffect, useState, useContext } from "react";
import { DisplayLoader } from "../EXtras/DislayLoader";
import {getAllHostels} from '../EXtras/GetterFunctions'
import AuthContext from './AuthContext'



const StudentContext = createContext({})
export const StudentProvider = ({ children }) => {
   
    const options = [
        {

            text: 'view all hostels',
            address: '/hostels',
            action: null,
        },
        {
            text: 'filter down rooms',
            address: '/hostels',
            action: null,
        },
        {
            text: 'view booking history',
            address: '/hostels',
            action: null,
        },
        {
            text: 'signout',
            address: '/hostels',
            action: () => alert(6),
        }
    ]
    const {SERVER_URL} = useContext(AuthContext)
    const [hostels, setHostels] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        getAllHostels(setLoading, setHostels, SERVER_URL)
    },[])
    return (
        <StudentContext.Provider value={{hostels, options}}>
            {loading ? DisplayLoader(): children}
        </StudentContext.Provider>
    )
}
export default StudentContext