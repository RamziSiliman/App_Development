export const getAllHostels=async(setLoading,setHostels, SERVER_URL, nofilter)=>{
setLoading(true)
const response = await fetch(`${SERVER_URL}hostels`)
if(response.status == 200){
const data = await response.json()
if(data.length > 0){
    if(!nofilter){
        setHostels(data.filter(hostel=>hostel.active))
    }
    else{
        setHostels(data)
    }
    setLoading(false)
}
}
else{
    setLoading(false)
}
setLoading(false)
}


export const getHostelRooms=async(setLoading,setRooms, SERVER_URL, id)=>{
setLoading(true)
const response = await fetch(`${SERVER_URL}rooms/${id}`)
if(response.status == 200){
const data = await response.json()
if(data.length > 0){
    setRooms(data)
    setLoading(false)
}
}
else{
    setLoading(false)
}
setLoading(false)
}



export const getHostel=async(setLoading,setCurrentHostel, SERVER_URL, id)=>{
setLoading(true)
const response = await fetch(`${SERVER_URL}hostel/${id}`)
if(response.status == 200){
const data = await response.json()
if(data){
    setCurrentHostel(data)
    setLoading(false)
}
}
else{
    setLoading(false)
}
setLoading(false)
}


export const getMyReservations=async(setLoading,setReservations, SERVER_URL,user_id)=>{
setLoading(true)
const response = await fetch(`${SERVER_URL}reservations/${user_id}`)
if(response.status == 200){
const data = await response.json()
    setReservations(data)
    setLoading(false)
}
setLoading(false)
}


export const getMyHostel=async(setLoading,setMyHostel, SERVER_URL,user_id, setRooms, setHostelReservations)=>{
setLoading(true)
const response = await fetch(`${SERVER_URL}myhostel/${user_id}`)
if(response.status == 200){
const data = await response.json()
    setMyHostel(data)
    localStorage.setItem('myhostel', JSON.stringify(data))
    setRooms && getHostelRooms(setLoading, setRooms, SERVER_URL, data.id)
    setHostelReservations && getReservations(setLoading,setHostelReservations,SERVER_URL,data.id)
    setLoading(false)
}
setLoading(false)
}

export const getReservations=async(setLoading,setHostelReservations, SERVER_URL,id)=>{
    setLoading(true)
    const response = await fetch(`${SERVER_URL}hostelReservations/${id}`)
    if(response.status == 200){
    const data = await response.json()
        setHostelReservations(data)
        setLoading(false)
    }
    setLoading(false)
    }
