import loader from '../assets/loader-icon.svg'
export const DisplayLoader=()=>{
    return(
       <div className="bg-dark text-light flex-column rounded t-center spin d-flex align-items-center py-5 justify-content-center">
        <img src={loader} alt="" style={{width: 100}} />
        <small className="text-center fader mt-5 px-3">Please stand by as we load resources</small>
       </div>
    )
}