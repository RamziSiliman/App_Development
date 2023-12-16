import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import AuthContext from '../../context/AuthContext'
import { getMyReservations } from '../../EXtras/GetterFunctions'
import { DisplayLoader } from '../../EXtras/DislayLoader'
import { jwtDecode } from 'jwt-decode'
import Redirect from '../../components/Redirect'
const S_Booking = () => {
    const { SERVER_URL ,Logout,reservations, setReservations} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    
    let storedTokens = JSON.parse(localStorage.getItem('authtokens'))
    let authtokens = storedTokens ? jwtDecode(storedTokens.access): ''
    let accountType = authtokens ? authtokens.groups[0] : ''
    useEffect(() => {
        getMyReservations(setLoading, setReservations, SERVER_URL, jwtDecode(JSON.parse(localStorage.getItem('authtokens')).access).user_id)
    }, [])
    let options = [
        {

            text: 'view all hostels',
            address: '/student',
            action: null,
        },
        {
            text: 'view booking history',
            address: '/student/booking',
            action: null,
        },
        {
            text: 'signout',
            action: () => Logout(),
        }
    ]
    return (
        <>
        {
            accountType == "student" ? <>
            <Navbar options={options} fixed={true} theme={'dark'} />
        {
            loading ? DisplayLoader() :
                reservations.length > 0 ?
                <div>
                    <div className="mt-5 pt-5 container">
                        <p className="my-3">My reservations</p>
                        <table className='custom-shadow-left w-100'>
                            <thead>
                            <tr className='bg-dark text-light rounded'>
                                <td className='p-3'>Hostel</td>
                                <td className='p-3'>Room</td>
                                <td className='p-3'>Date of Payment</td>
                                
                            </tr>
                            </thead>
                            <tbody>
                            {
                                reservations.map(reservation => (
                                    <tr className=''>
                                    <td className='p-3'><small>{reservation.hostel}</small></td>
                                    <td className='p-3'><small>{reservation.roomNo}</small></td>
                                    <td className='p-3'><small>{`${new Date(reservation.date).getDay()}/${new Date(reservation.date).getMonth()}/${new Date(reservation.date).getFullYear()}`}</small></td>

                                </tr>
                                ))
                            }
                            </tbody>

                        </table>
                    </div>
                </div>:
                <p className="my-5 py-5 text-center">No reservations found</p>
        }
    </>: <Redirect/>
        }
        </>
    )
}

export default S_Booking
