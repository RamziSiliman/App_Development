import {FaWarehouse} from 'react-icons/fa'
const HostelInfo=({hostel})=>{
return(
<>
<h5 className="my-3 text-center text-secondary">Welcome to {hostel[0].name}</h5>
    <div className="container d-lg-flex my-5 align-items-center justify-content-center">
        <img src={hostel[0].image} className="w-lg-50 rounded" style={{maxHeight: 300}}/>
        <div className="m-3">
            <h3 style={{fontWeight: 'lighter'}}>{hostel[0].name}</h3>
            <p><b>Location</b> &nbsp;{hostel[0].location}</p>
            <p className="bg-dark rounded text-light px-3 py-2"><b>56</b> &nbsp; Rooms Availbale</p>
            <a className='d-flex align-items-center nav-link' href='#allrooms'><FaWarehouse className='mx-2'/><u>View all rooms available</u></a>
        </div>
    </div>
</>
)
}
export default HostelInfo