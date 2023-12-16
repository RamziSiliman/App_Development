import React from 'react'
import { Link } from 'react-router-dom'
const Redirect = () => {
  return (
    <div className='text-center my-5'>
    <h1>You are not allowed here</h1>
    <Link className='my-3 nav-link' to={'/'}>Go back to the <button className="btn btn-dark">Login page</button></Link>
</div>
  )
}

export default Redirect
