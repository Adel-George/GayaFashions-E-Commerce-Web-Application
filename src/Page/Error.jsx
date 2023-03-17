import React from 'react'
import { Link } from 'react-router-dom'
import err from "../img/Error.jpg"


export default function Error() {
  return (
    <>
    <div className='vh-100 d-lg-flex justify-content-lg-center align-items-lg-center pt-lg-0 pt-5'>
        <div className='text-center pt-lg-0 pt-5'>
          <h2 className='fw-bolder fs-1'>404</h2>
          <h3 className='fw-bold'>Ooops! Something went wrong.</h3>
          <p>Sorry,the page you are looking for has been moved or deleted</p>
          <Link to="/" type="button" className="btn btn-outline-primary" id='err'>Go Home</Link>
        </div>
        <div >
        <img src={err} alt="err" className='w-100'/>
        </div>
    </div>
    </>
  )
}
