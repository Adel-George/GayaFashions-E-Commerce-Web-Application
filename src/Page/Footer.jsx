import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="container py-4 w-75 mx-auto">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <h5 className="fw-bolder">COMPANY</h5>
          <p>About Us</p>
          <p>Contact</p>
          <p>Store Locations</p>
          <p>Careers</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="fw-bolder">HELP</h5>
          <p>Order Tracking</p>
          <p>FAQ</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="fw-bolder">STORE</h5>
          <p>Women</p>
          <p>Contact</p>
          <p>Men</p>
          <p>Speakers</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="fw-bolder">FOLLOW US</h5>
          <p>And get Free Shipping on all your orders! </p>
          <div className="d-flex justify-content-evenly w-50 ">
            <i className="fa-brands fa-facebook-f pe-3"></i>
            <i className="fa-brands fa-twitter pe-3"></i>
            <i className="fa-brands fa-instagram pe-3"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
