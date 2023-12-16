import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {DisplayLoader} from '../EXtras/DislayLoader'
import {jwtDecode} from 'jwt-decode'
const AuthContext = createContext({})
export const AuthProvider = ({ children }) => {
  const [pendingRoom, setPendingRoom] = useState({})
    let SERVER_URL = "https://ebroker.pythonanywhere.com/"
    const [reservations, setReservations] = useState(null)
    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [laoding, setLoading] = useState(false)
    const [myHostel, setMyHostel] = useState(null)

    useEffect(()=>{
      window.scrollTo(0, 0);
    },[])
    const Logout = async () => {
        localStorage.clear()
        navigate('/')
        setEmail('')
        setPassword('')
        alert('You have been signed out')
      }
    
    
      const Redirect = (accountType) => {
        setLoading(true)
        switch (accountType) {
          case 'manager':
            navigate("/manager")
    
            break
          case 'dean':
            navigate("/dean")
            break
          case 'student':
            navigate("/student")
            break
          default:
            navigate('/')
            break
    
    
        }
        setLoading(false)
      }
    
    
      let signin = async () => {
          setLoading(true)
          const response = await fetch(`${SERVER_URL}token/`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
              username: email,
              password: password
            })
          })
          if (response.status == 200) {
            const data = await response.json()
            localStorage.setItem('authtokens', JSON.stringify(data))
            Redirect(jwtDecode(data.access).groups[0])
            setLoading(false)
          }
          else {
            alert('please provide the correct credentials')
            setEmail('')
            setPassword('')
            setLoading(false)
          }
          setLoading(false)
      };
    return (
        <AuthContext.Provider value={{SERVER_URL, email, password,myHostel, pendingRoom,reservations, setReservations, setPendingRoom,setMyHostel, setPassword, setEmail,signin, Logout}}>
            {laoding ? DisplayLoader():children}
        </AuthContext.Provider>
    )
}
export default AuthContext
