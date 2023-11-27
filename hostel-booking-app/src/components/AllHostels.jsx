import Hostel from "./Hostel"
import { useContext,useEffect,useLayoutEffect,useState } from "react"
import DataContext from "../context/DataContext"
import {FaBackward, FaForward} from 'react-icons/fa'
const AllHostels = () => {
    let {hostels,page,pageSize,setPage, pages} = useContext(DataContext)
    let [load, setLoad] = useState(true)
    let pageNumbers = []
    for(let i =0;i<pages;i++){
        pageNumbers.push(i+1)
        console.log(pageNumbers.length)
    }
    useEffect(()=>{
        setLoad(false)
    },[])
    return (
        <>
        {
            load ?'Loading':
            <>
            <div className="my-5 container text">
            <p className="text-center my-4">Discover Hostels near Makerere</p>
            <div className="row gap-3 justify-content-center container" id="allhostels">
                {
                    (hostels.slice((page-1)*pageSize, (pageSize*page))).map(hostel=>(
                        <Hostel hostel={hostel} key={hostel.name}/>
                    ))
                }
            </div>
           <div className="d-flex my-5 justify-content-center align-items-center">
            <FaBackward className="pointer" onClick={()=>setPage(page >1 ? page-1: 1)}/>
           {
                pageNumbers.map(pageNumber=><span onClick={()=>setPage(pageNumber)} className={`mx-3 ${page===pageNumber?'bg-primary px-2 text-light rounded': ''} pointer`}>{pageNumber}</span>)
            }
            <FaForward className="pointer" onClick={()=>setPage(page >=0 && page < pages ? page+1: pages)}/>
           </div>
        </div>
            </>
        }
        </>
    )
}
export default AllHostels