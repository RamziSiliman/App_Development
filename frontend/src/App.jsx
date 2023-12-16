import { Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import S_Home from "./pages/student/S_Home"
import S_Hostel from "./pages/student/S_Hostel"
import S_Booking from "./pages/student/S_Booking"
import Login from "./pages/student/Login"
import Signup from "./pages/student/Signup"
import M_Home from "./pages/student/M_Home"
import D_Home from './pages/D_Home'
const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path= "/" element={<Login/>}/>
                <Route path= "/signup" element={<Signup/>}/>
                <Route path= "/student" element={<S_Home/>}/>
                <Route path= "/dean" element={<D_Home/>}/>
                <Route path="/student/hostel/:id" element={<S_Hostel/>}/>
                <Route path="/student/booking" element={<S_Booking/>}/>
                <Route path="/manager" element={<M_Home/>}/>
            </Routes>
        </AuthProvider>
    )
}
export default App