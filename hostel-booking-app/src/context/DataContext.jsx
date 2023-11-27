import { createContext, useEffect, useState } from "react";
import TestImage from '../assets/download.png'
const DataContext = createContext({})
export const DataProvider = ({ children }) => {
    const [checkout, setCheckout] = useState(false)
    const [page, setPage] = useState(2)
    let pageSize = 4

    const [rooms, setRooms] = useState([
        {
            id: 1,
            number: "Room 1",
            price: "200,000",
            image: TestImage,
            type: 'Double room'
        },
        {
            id: 2,
            number: "Room 2",
            price: "200,000",
            image: TestImage,
            type: 'Double room'
        },
        {
            id: 3,
            number: "Room 3",
            price: "200,000",
            image: TestImage,
            type: 'Double room'
        },
        {
            id: 4,
            number: "Room 4",
            price: "200,000",
            image: TestImage,
            type: 'Double room'
        },
        {
            id: 5,
            number: "Room 5",
            price: "200,000",
            image: TestImage,
            type: 'Double room'
        },
        {
            id: 6,
            number: "Room 6",
            price: "200,000",
            image: TestImage,
            type: 'Double room'
        },
        {
            id: 7,
            number: "Room 7",
            price: "200,000",
            image: TestImage,
            type: 'Double room'
        },
        {
            id: 8,
            number: "Room 8",
            price: "200,000",
            image: TestImage,
            type: 'Double room'
        }
    ])
    const [hostels, setHostels] = useState([
        {
            id: 1,
            name: "Douglas Villa",
            location: "Kikoni",
            image: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 2,
            name: "Olympia Hostel",
            location: "Kikoni",
            image: 'https://images.pexels.com/photos/2952663/pexels-photo-2952663.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 3,
            name: "Nakiyinji",
            location: "Kikoni",
            image: 'https://images.pexels.com/photos/5379219/pexels-photo-5379219.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 4,
            name: "New Nana",
            location: "Kikoni",
            image: 'https://images.pexels.com/photos/1115225/pexels-photo-1115225.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 5,
            name: "Kann Hostel",
            location: "Kikoni",
            image: 'https://images.pexels.com/photos/2957461/pexels-photo-2957461.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 6,
            name: "Dream World",
            location: "Kikoni",
            image: 'https://images.pexels.com/photos/1771832/pexels-photo-1771832.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 7,
            name: "Apex Girls",
            location: "Kikoni",
            image: 'https://images.pexels.com/photos/1441058/pexels-photo-1441058.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 8,
            name: "Muhika Hostel",
            location: "Kikoni",
            image: 'https://images.pexels.com/photos/5371484/pexels-photo-5371484.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 9,
            name: "JJ Hostel",
            location: "Kikoni",
            image: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 10,
            name: "Jabulani Hostel",
            location: "MBI",
            image: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 11,
            name: "Pearl View",
            location: "Kakukbwe",
            image: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 12,
            name: "MISH Hostel",
            location: "Kikoni",
            image: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 13,
            name: "Garden Courts",
            location: "Kikoni",
            image: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=600"
        }, {
            id: 14,
            name: "Nalika Hostel",
            location: "Kikoni",
            image: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 15,
            name: "Kare Hostel",
            location: "Kikoni",
            image: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 16,
            name: "Baskon Hostel",
            location: "Kikoni",
            image: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ])
    let pages = Math.ceil(hostels.length / pageSize)

    return (
        <DataContext.Provider value={{
            hostels,
            checkout,
            setCheckout
            , page,
            setPage,
            pageSize,
            pages,
            rooms
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext