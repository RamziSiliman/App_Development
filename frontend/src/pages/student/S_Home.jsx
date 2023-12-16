import React, { useContext, useState } from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/student/HeroSection'
import Welcome from '../../components/student/Welcome'
import Hostels from '../../components/student/Hostels'
import Footer from '../../components/Footer'
import { StudentProvider } from '../../context/StudentContext'
import StudentContext from '../../context/StudentContext'
import { jwtDecode } from 'jwt-decode'
import Redirect from '../../components/Redirect'
import AuthContext from '../../context/AuthContext'
const S_Home = () => {
    const {hostels} = useContext(StudentContext)
    const { Logout } = useContext(AuthContext)
    let storedTokens = JSON.parse(localStorage.getItem('authtokens'))
    let authtokens = storedTokens ? jwtDecode(storedTokens.access) : ''
    let accountType = authtokens ? authtokens.groups[0] : ''
    let options = [
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
                accountType == "student" ?
                    <StudentProvider>
                        <Navbar options={options} theme={'dark'} fixed={true} />
                        <div className="">
                            <HeroSection  />
                            <Welcome />
                            <Hostels />
                            <Footer />
                        </div>
                    </StudentProvider> : <Redirect />

            }
        </>
    )
}

export default S_Home
