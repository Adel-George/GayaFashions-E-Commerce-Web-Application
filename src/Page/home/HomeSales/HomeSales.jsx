import React from 'react'
import { Link } from 'react-router-dom'
import "./HomeSales.css";
import shirt1 from "../../../img/Clearance/banner-shirt1-768x976.jpg.webp"
import shirt2 from "../../../img/Clearance/banner-shirt2-768x976.jpg.webp"
import { useContext } from 'react';
import { context } from '../../store/Store';



export default function HomeSales() {
  const{clearColor}= useContext(context);

  return (
    <>
     <section id="Sales"className='container py-4 w-75 mx-auto text-center'>
      <div className="row gy-3">
        <div className="col-lg-4 col-md-6">
          <div className="img-hover overflow-hidden position-relative">
            <img src={shirt2} alt="banner" className="w-100"/>
            <div className="position-absolute top-50 start-50 translate-middle text-center">
              <p className="fs-2 text-light w-50  mx-auto fw-bold">Button Up Shirts</p>
              <Link  className="btn btn-outline-light p-3"to="/shop" onClick={clearColor}>Buy Now</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 ">
          <div className="img-hover overflow-hidden position-relative">
            <img src={shirt1} alt="banner" className="w-100"/>
            <div className="position-absolute top-50 start-50 translate-middle text-center">
              <p className="fs-2 text-light w-50  mx-auto fw-bold">Choose your price </p>
              <Link  className="btn btn-outline-light p-3"to="/shop" onClick={clearColor}>Choose Yours</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="w-100 h-100 bg-color d-flex justify-content-center align-items-center">
            <div className="text-center">
              <p className="fs-2 text-light fw-bold py-2 ">Clearance Sales </p>
              <p className=" text-light fw-lighter pb-3">Up to 70% Off & Free Shipping    </p>
              <Link  className="btn btn-outline-light p-3"to="/shop" onClick={clearColor}>Choose Yours</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr/>
    </>
  )
}
