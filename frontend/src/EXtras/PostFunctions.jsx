import { jwtDecode } from "jwt-decode"
import { getAllHostels, getHostelRooms, getMyHostel, getMyReservations } from "./GetterFunctions"

export const Register = async (setLoading, SERVER_URL, setEmail, SetPassword, newEmail, newPassword, navigate, accountType, newPassword2) => {
    if (accountType.length > 0) {
        if (newEmail.length > 0) {
            if (newPassword.length > 7 && newPassword2.length > 7) {
                if (newPassword == newPassword2) {
                    setLoading(true)
                    const response = await fetch(`${SERVER_URL}register/${accountType}`, {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: newEmail,
                            username: newEmail,
                            password: newPassword,
                            is_staff: true,
                            is_active: true,
                        })
                    })
                    if (response.status == 201) {
                        setEmail(newEmail)
                        SetPassword(newPassword)
                        alert('Account created successfully')
                        setLoading(false)
                        navigate('/')
                    } else if (response.status == 200) {
                        alert('User under this account already exists, please try using another email')
                        setLoading(false)
                    } else {
                        alert('Something went wrong, please try again')
                        setLoading(false)
                    }
                    setLoading(false)
                } else {
                    alert('you provided password fields which donot match')
                }
            } else {
                alert('password field must be provided with atleast 8 characters')
            }
        }
        else {
            alert('provide an email')
        }
    }
    else {
        alert('please select the type of account you want to create')
    }
}

export const updateHostel = async (setLoading, SERVER_URL, name, description, image,setMyHostel) => {
    if (image.length > 0) {
        if (name.length > 4) {
            if (description.length > 0) {
                setLoading(true)
                const hostelInfo = new FormData()
                hostelInfo.append('name', name)
                hostelInfo.append('description', description)
                hostelInfo.append('photo', image[0])
                const response = await fetch(`${SERVER_URL}update/${localStorage.getItem('myhostel') ? JSON.parse(localStorage.getItem('myhostel')).id : ''}`, {
                    method: 'PATCH',
                    body: hostelInfo
                })
                if (response.status == 202) {
                    alert('hostel info updated successfully')
                    getMyHostel(setLoading,setMyHostel, SERVER_URL,jwtDecode(JSON.parse(localStorage.getItem('authtokens')).access).user_id)
                    setLoading(false)
                } else {
                    alert('failed to update')
                    setLoading(false)
                }
                setLoading(false)
            }
            else {
                alert('please provide a descriptionfor your hostel')
            }
        }
        else {
            alert('please provide a valid name for your hostel')
        }
    }
    else {
        alert('please select a photo of your hostel')
    }
}
export const updateRoom = async (setLoading, SERVER_URL, number, capacity, price, image, room_id, updaterooms) => {
    if (image.length > 0) {
        if (number.length > 0) {
            if (price > 390000) {
                if(capacity > 0){
                    setLoading(true)
                const roomInfo = new FormData()
                roomInfo.append('number', number)
                roomInfo.append('capacity', capacity)
                roomInfo.append('price', price)
                roomInfo.append('photo', image[0])
                const response = await fetch(`${SERVER_URL}updateroom/${room_id}`, {
                    method: 'PATCH',
                    body: roomInfo
                })
                if (response.status == 202) {
                    getHostelRooms(setLoading, updaterooms, SERVER_URL,JSON.parse(localStorage.getItem('myhostel')).id)
                    alert('room info updated successfully')
                    setLoading(false)

                } else {
                    alert('failed to update')
                    setLoading(false)
                }
                setLoading(false)
                }else{
                    alert('please provide the room capacity')
                }
            }
            else {
                alert('please provide the correct price for the room')
            }
        }
        else {
            alert('please provide a valid room number')
        }
    }
    else {
        alert('please select a photo of the room')
    }
}


export const uploadRoom = async (setLoading, SERVER_URL, number, capacity, price, image, updaterooms) => {
    if (image.length > 0) {
        if (number.length > 0) {
            if (price > 390000) {
                if(capacity > 0){
                    setLoading(true)
                const roomInfo = new FormData()
                roomInfo.append('number', number)
                roomInfo.append('capacity', capacity)
                roomInfo.append('price', price)
                roomInfo.append('hostel', JSON.parse(localStorage.getItem('myhostel')).id)
                roomInfo.append('photo', image[0])
                const response = await fetch(`${SERVER_URL}rooms/${JSON.parse(localStorage.getItem('myhostel')).id}`, {
                    method: 'POST',
                    body: roomInfo
                })
                if (response.status == 201) {
                    getHostelRooms(setLoading, updaterooms, SERVER_URL,JSON.parse(localStorage.getItem('myhostel')).id)
                    alert('new room added successfully')
                    setLoading(false)

                } else {
                    alert('failed to upload')
                    setLoading(false)
                }
                setLoading(false)
                }else{
                    alert('please provide the room capacity')
                }
            }
            else {
                alert('please provide the correct price for the room')
            }
        }
        else {
            alert('please provide a valid room number')
        }
    }
    else {
        alert('please select a photo of the room')
    }
}


export const uploadHostel = async (setLoading, SERVER_URL, name, description, image, address,setMyHostel) => {
    if (image.length > 0) {
        if (name.length > 4) {
            if (description.length > 0) {
                if(address.length > 4){
                    setLoading(true)
                const hostelInfo = new FormData()
                hostelInfo.append('name', name)
                hostelInfo.append('description', description)
                hostelInfo.append('address', address)
                hostelInfo.append('manager', jwtDecode(JSON.parse(localStorage.getItem('authtokens')).access).user_id)
                hostelInfo.append('photo', image[0])
                const response = await fetch(`${SERVER_URL}hostels/`, {
                    method: 'POST',
                    body: hostelInfo
                })
                if (response.status == 201) {
                    alert('hostel info uploaded successfully')
                    getMyHostel(setLoading,setMyHostel, SERVER_URL,jwtDecode(JSON.parse(localStorage.getItem('authtokens')).access).user_id)
                    setLoading(false)
                } else {
                    alert('failed to upload')
                    setLoading(false)
                }
                setLoading(false)
                }else{
                    alert('provide an address')
                }
            }
            else {
                alert('please provide a description for your hostel')
            }
        }
        else {
            alert('please provide a valid name for your hostel')
        }
    }
    else {
        alert('please select a photo of your hostel')
    }
}

export const alterHostel=async(SERVER_URL,status, hostel_id, setOn, setLoading,setHostels)=>{
    setLoading(true)
    const response = await fetch(`${SERVER_URL}update/${hostel_id}`,{
        method: 'PATCH',
        headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify({active: !status})
    })
    if(response.status == 202){
        const data =await response.json()
        await setOn(data.active)
        getAllHostels(setLoading, setHostels,SERVER_URL,'filter')
        setLoading(false)
        
    }else{
        alert('failed to update')
        setLoading(false)
    }
    
}
export const makeresevation=async(SERVER_URL, hostel, room, amount, setLoading, navigate, setReservations)=>{
    setLoading(true)
    const response = await fetch(`${SERVER_URL}hostelReservations/${hostel}`,{
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify({
            "room":room,
            "hostel":hostel,
            "amount":amount,
            "user": jwtDecode(JSON.parse(localStorage.getItem('authtokens')).access).user_id
        })
    })
    if(response.status == 201){
        alert('Reservation made successfully')
        setLoading(false)
        navigate('/student/booking')
        await getMyReservations(setLoading,setReservations,SERVER_URL,jwtDecode(JSON.parse(localStorage.getItem('authtokens')).access).user_id)
    }else{
        alert('Something went wrong')
        setLoading(false)
    }
    setLoading(false)
}