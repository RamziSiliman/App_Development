import React, { useContext, useEffect, useRef, useState } from 'react'
import Navbar from '../../components/Navbar'
import ViewRoom from '../../components/ViewRoom'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaEdit, FaEye } from 'react-icons/fa'
import { getMyHostel } from '../../EXtras/GetterFunctions'
import { DisplayLoader } from '../../EXtras/DislayLoader'
import AuthContext from '../../context/AuthContext'
import { jwtDecode } from 'jwt-decode'
import EditHostel from '../../components/EditHostel'
import Input from '../../components/Input'
import EditRoom from '../../components/EditRoom'
import UplaodRoom from '../../components/UplaodRoom'
import { uploadHostel } from '../../EXtras/PostFunctions'
import { Link } from 'react-router-dom'
const M_Home = () => {
    const { SERVER_URL, Logout, myHostel, setMyHostel } = useContext(AuthContext)
    const [hrooms, setHrooms] = useState([])

    const [loading, setLoading] = useState(false)
    const [currentRoom, setCurrentRoom] = useState(0)
    const [hostelReservations, setHostelReservations] = useState([])

    const [hostelname, sethostelname] = useState('')
    const [hosteladdress, sethosteladdress] = useState('')
    const [hosteldescription, sethosteldescription] = useState('')
    const [hostelimage, sethostelimage] = useState('')

    const prevRoom = () => {
        setCurrentRoom(currentRoom > 0 ? currentRoom - 1 : hrooms.length - 1)
    }
    const nextRoom = () => {
        setCurrentRoom(currentRoom < hrooms.length - 1 ? currentRoom + 1 : 0)
    }


    let storedTokens = JSON.parse(localStorage.getItem('authtokens'))
    let authtokens = storedTokens ? jwtDecode(storedTokens.access) : ''
    let accountType = authtokens ? authtokens.groups[0] : ''
    useEffect(() => {
        getMyHostel(setLoading, setMyHostel, SERVER_URL, authtokens && authtokens.user_id, setHrooms, setHostelReservations)
    }, [])
    let options = [
        {
            text: 'Add room',
            type: 'button',
            target: '#uploadroomModal',
            toggle: 'modal',
            action: null,
        },
        {
            text: 'signout',
            action: () => {
                setMyHostel(null)
                setCurrentRoom(null)
                setHostelReservations(null)
                setHrooms(null)
                setMyHostel(null)
                sethosteladdress(null)
                sethosteldescription(null)
                sethostelimage(null)
                sethostelname(null)
                Logout()
            },
        }
    ]
    return (
        <>
            {
                accountType == 'manager' ? loading ? DisplayLoader() : myHostel ?
                    myHostel.active ? <div>
                        <Navbar theme={'dark'} options={options} fixed={true} />
                        <div className="container mt-5 pt-5">




                            <div className="row gap-2 justify-content-center">
                                <div className="col-lg-8 col-md-10 px-lg-3 py-lg-3 hair-line mx-lg-1 d-lg-flex align-items-center">
                                    {
                                        myHostel ? <>
                                            <span className="m-hero-pic">
                                                <div className="img">
                                                    <img src={`${SERVER_URL}${myHostel.photo}`} alt="" className='rounded' />
                                                </div>
                                            </span>
                                            <div className='mx-3 my-5 my-md-0 desc'>
                                                <h2>{myHostel.name}</h2>
                                                <div className='my-3' style={{overflowY: 'scroll', maxHeight: window.innerHeight/10}}><small>
                                                {myHostel.description}
                                                    </small></div> 
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" className="btn my-2 btn-dark rounded-edges px-4"><small className='d-flex align-items-center'>Update Hostel info <FaEdit className='mx-2' /></small></button>
                                            </div>
                                        </> :
                                            <p className="mx-2 my-4">Hostel info not found</p>
                                    }
                                </div>
                                <div className="col-lg-3 d-flex flex-column justify-content-between custom-card px-0 custom-shadow-left mx-0">
                                    {
                                        hrooms.length > 0 ? <>
                                            <div className="img">
                                                <img src={`${SERVER_URL}${hrooms[currentRoom].photo}`} alt="" />
                                            </div>
                                            <span className='d-flex px-4 py-3 align-items-center justify-content-between'><small>Room {hrooms[currentRoom].number}</small><span><FaEye title='view more information about the room' data-bs-toggle="modal" data-bs-target="#roomModal" type="button" size={20} className='mx-2 hover' /><FaEdit size={20} title='edit the infrmation about the room' className='mx-2 hover' data-bs-toggle="modal" data-bs-target="#updateroomModal" type="button" /><FaArrowAltCircleLeft onClick={prevRoom} size={20} className='mx-2 hover' title='go to previous room' /><FaArrowAltCircleRight onClick={nextRoom} size={20} className='mx-2 hover' title='go to the next room' /></span></span>
                                        </> : <p className='my-4 mx-2 '>No Rooms found <br /><button data-bs-toggle="modal" data-bs-target="#uploadroomModal" className=" mt-3 btn btn-dark px-4 py-2"><small>Add your first room</small></button></p>
                                    }
                                </div>
                            </div>






                            <div className="row mt-5 gap-1">
                                <div className="col-lg-12 " style={{ height: '30vh', overflow: 'scroll' }}>
                                    {
                                        hostelReservations.length > 0 ? <table className='w-100 custom-shadow-left' >
                                            <thead>
                                                <tr className='bg-dark text-light'>
                                                    <td className='px-4 py-2'><small>Client</small></td>

                                                    <td><small>Room</small></td>
                                                    <td className='d-lg-block d-none'><small>Date of payment</small></td>
                                                </tr>
                                            </thead>
                                            <tbody >

                                                {
                                                    hostelReservations.map(reservation => (
                                                        <tr>
                                                            <td className='px-4 py-2'><small>{reservation.student}</small></td>

                                                            <td><small>Room {reservation.roomNo}</small></td>
                                                            <td className='d-lg-block d-none'><small>{`${new Date(reservation.date).getDay()}/${new Date(reservation.date).getMonth()}/${new Date(reservation.date).getFullYear()}`}</small></td>
                                                        </tr>
                                                    ))
                                                }



                                            </tbody>
                                        </table> : <p className='mx-4 my-2'>No reservations found</p>
                                    }
                                </div>
                            </div>
                        </div>



                        <ViewRoom thisRoom={hrooms[currentRoom] && hrooms[currentRoom]} />
                        <UplaodRoom updaterooms={setHrooms} />
                        <EditRoom thisRoom={hrooms[currentRoom] && hrooms[currentRoom]} updaterooms={setHrooms} />
                        <EditHostel />
                    </div> :
                        <div className="text-center my-5 py-5">
                            <h1>Your hostel is still under review</h1>
                            <p className='text-secondary'>Please be patient, your hostel will be activated shortly</p>
                            <button onClick={Logout} className='btn btn-danger px-4 py-2 border-0'><small>Logout</small></button>
                        </div>
                    : <>
                        <Navbar theme={'dark'} fixed={true} options={[
                            {
                                text: 'please provide your hostel inforamtion, by filling the form below'
                            },
                            {
                                text: 'signout',
                                action: () => Logout(),
                            }
                        ]} />
                        <div className="container mt-5 pt-5">
                            <p className='custom-shadow-left p-4 rounded'>Upload your hostel information</p>
                            <div className="container my-4 hair-line rounded px-5 py-2" style={{ overflowY: 'scroll', maxHeight: window.innerHeight / 1.5 }}>
                                <Input label={'Hostel Name'} placeholder={'my hostel'} inputType={'text'} value={hostelname} setter={sethostelname} />
                                <Input label={'Hostel Address'} placeholder={'kikoni, makerere'} inputType={'text'} value={hosteladdress} setter={sethosteladdress} />
                                <label htmlFor="" className='my-2'>Hostel description</label>
                                <textarea name="" id="" cols="30" rows="5" placeholder='write something about your hostel....' className='w-100 bg-none hair-line outline p-4' value={hosteldescription} onChange={(e) => sethosteldescription(e.target.value)}>

                                </textarea>
                                <label htmlFor="" className="my-2">Select a photo of your hostel</label> <br />
                                <input type="file" name="" id="" className="my-3" onChange={(e) => sethostelimage(e.currentTarget.files)} /> <br />
                                <button className="btn btn-dark px-4 py-2 border-0" onClick={() => uploadHostel(setLoading, SERVER_URL, hostelname, hosteldescription, hostelimage, hosteladdress, setMyHostel)}><small>Submit</small></button>
                            </div>
                        </div>
                    </> : <div className="text-center my-5 py-5">
                    <h1>Your are not allowed here</h1>
                    <p className='text-secondary'>Please try creating an account for a manager before attempting <br />to access this page</p>
                    <Link className='nav-link' to={'/'}>
                        <button className='btn btn-danger px-4 py-2 border-0'><small>Back to login page</small></button></Link>
                </div>
            }
        </>
    )
}

export default M_Home
