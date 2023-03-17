import React from 'react'
import carousel from "bootstrap/dist/js/bootstrap.bundle"
import "./HomeTestimonials.css";
import woman from "../../../img/Icon/woman-abstract-b1-150x150.jpg.webp"
import men from "../../../img/Icon/men-shirt-a1-150x150.jpg.webp"


export default function HomeTestimonials() {
  return (
    <>
    <section id="Testimonials">
      <div className='container py-4 w-75 mx-auto text-center'>
        <h2 className="pt-5">Testimonials </h2>
        <div id="carouselIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner text-center py-3">
            <div className="carousel-item active" data-bs-interval="8000">
              <p className="w-50 mx-auto">Disrupt single-origin coffee hammock quinoa cronut jean shorts coloring book brooklyn seitan authentic craft beer.</p>
              <div className="w-50 mx-auto d-lg-flex justify-content-lg-center align-items-lg-center">
                <img src={woman} className="d-block w-25 mx-lg-0 mx-auto rounded-circle pe-2" alt="abstract"/>
                <div className="text-lg-start pt-4">
                    <span className="fw-bolder">Sarah Connor</span>
                    <p>Waitress</p>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="6000">
              <p className="w-50 mx-auto">Pok pok flannel drinking vinegar, succulents lumbersexual XOXO artisan. Succulents tousled drinking vinegar, cardigan.</p>
              <div className="w-50 mx-auto d-lg-flex justify-content-lg-center align-items-lg-center">
                <img src={men} className="d-block w-25 mx-lg-0 mx-auto rounded-circle pe-2" alt="abstract"/>
                <div className="text-lg-start pt-4">
                  <span className="fw-bolder">Calvin Reeves</span>
                  <p>Actor</p>
              </div>
              </div>
            </div>
          </div>
          <div className="carousel-indicators position-static">
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current={carousel} aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-light rounded-circle d-flex justify-content-center align-items-center" aria-hidden="true"><i className="fa-solid fa-chevron-left text-dark"></i></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-light rounded-circle d-flex justify-content-center align-items-center" aria-hidden="true"><i className="fa-solid fa-chevron-right text-dark"></i></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </div>
    </section>

    </>
  )
}
