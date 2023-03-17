import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Banner from "../../../img/Banner/curly_hair_girl-1.jpg"
import Banner1 from "../../../img/Banner/curly_hair_white-1.jpg"
import Banner2 from "../../../img/Banner/monigote.jpg"
import "./HomeSection.css";
import carousel from "bootstrap/dist/js/bootstrap.bundle"
import { context } from '../../store/Store'



export default function HomeSection() {

  const{clearColor}= useContext(context);

  return (
    <>
    <section id="pageHome">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current={carousel} aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner"id="item">
          <div className="carousel-item h-100 itemLine active" data-bs-interval="10000" style={{backgroundImage:`url(${Banner})`}}>
            <div className="d-flex justify-content-start align-items-center ps-lg-5 h-100 ms-lg-5 ">
              <div className="ps-5  ms-lg-5 ms-3">
                <span className="bg-dark text-light p-1">
                  50% OFF
                </span>
                <h1 className="fw-bolder py-3 w-75">
                  New Cocktail Dresses
                 </h1>
                <Link  className="colorBanner fs-4" to="/shop" onClick={clearColor}>Shop Now</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item h-100 itemLine" data-bs-interval="8000" style={{backgroundImage:`url(${Banner1})`}}>
            <div className="d-flex justify-content-end align-items-center pe-5 h-100">
              <div className="text-end text-lg-start">
                <span className="bg-dark text-light p-1 me-5 me-lg-0">
                  Summer'19
                </span>
                <h1 className="fw-bolder py-3 w-75 ms-auto ms-lg-0 pe-2 pe-lg-0">
                  Night Summer Dresses
                </h1>
                <Link className="colorBanner fs-4 pe-5 pe-lg-0" to="/shop" onClick={clearColor}>Shop Now</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item h-100 itemLine" data-bs-interval="7000" style={{backgroundImage:`url(${Banner2})`}}>
            <div className="d-flex justify-content-start align-items-center ps-lg-5 h-100 ms-lg-5">
              <div className="ps-5  ms-lg-5 ms-3">
                <span className="bg-dark text-light p-1 ">
                  Spring/Summer '19
                </span>
                <h1 className="fw-bolder py-3 w-75">
                  The Weekent Getaway
                </h1>
                <Link className="colorBanner fs-4" to="/shop" onClick={clearColor}>Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon color" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon color" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    </>
  )
}
