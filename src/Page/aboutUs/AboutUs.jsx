import React from 'react'
import "./AboutUs.css";
import ribTank from "../../img/AboutUs/rib_tank.jpg.webp";
import cashmere from "../../img/AboutUs/banner-cashmere.jpg";
import womenCashmere from "../../img/AboutUs/women-cashmere-b3-1024x1024.jpg.webp";
import shirtGreen from "../../img/AboutUs/men-shirtgreen-a3-1024x1024.jpg";
import relaxedShirt from "../../img/AboutUs/women-relaxedshirt-a3-1024x1024.jpg";
import turtleneck from "../../img/AboutUs/women-turtleneck-b2-1024x1024.jpg";






export default function AboutUs() {
  return (
    <>
    <section id="aboutUs" className="vh-100 d-flex align-items-center mt-lg-0 mt-5" style={{backgroundImage: `url(${cashmere})`}}>
      <div className="col-lg-4 col-9 ps-lg-5 ms-lg-5 ps-2">
        <h3 className="fw-bold fs-1 text-center">About Us      </h3>
        <div className="position-relative">
          <p className="fs-5 px-lg-4 px-3">“Air winged, above, seed whales face so void which so. Fish bring light blessed, midst light set and us rule said dominion”</p>
          <div className="position-absolute top-0 start-0 bg-dark" style={{width: "4px",height: "100%"}}></div>
        </div>
      </div>
    </section>
    <section className="container py-5">
      <div className="row">
        <div className="col-lg-6 offset-lg-1 position-relative">
          <img src={ribTank} alt="ribTank" className="w-100"/>
          <div className="position-absolute top-50 start-50 translate-middle rounded-circle play-click i-show text-light d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-play fa-3x rounded-circle"></i>
          </div>
        </div>
        <div className="col-lg-5 ps-lg-5 pt-lg-0 pt-3 d-lg-flex align-items-lg-center">
          <div>
            <span className="colorSpan">OUR HISTORY  </span>
            <h4 className="fw-lighter fs-3 py-2">Setting Industry Standards          </h4>
            <p className="text-muted fs-5">Portland meggings chartreuse plaid palo santo, gluten-free ramps iPhone etsy salvia cray kombucha copper mug single-origin coffee.
            </p>
            <div className="d-flex align-items-center">
              <div className="pe-2 text-center">
                <span className="fw-bold fs-1">12,346</span>
                <p className="text-muted">CUSTOMERS</p>
              </div>
              <p className="text-muted">Satisfied customers worldwide and growing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container-fluid py-5 bg-Next">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-lg-center">
          <div>
            <span className="colorSpan">EST. 2017    </span>
            <h4 className="fw-lighter fs-3 py-2">Our Story </h4>
            <div className="d-lg-flex text-start py-2 ">
              <div className="col-lg-6 p-size px-lg-4">
                <p className="text-muted">Messenger bag man braid waistcoat neutra 8-bit. Chartreuse disrupt put a bird on it quinoa jianbing. Paleo drinking vinegar brunch hashtag, skateboard cold-pressed pour-over tilde cliche. Craft beer salvia occupy retro farm-to-table cronut cardigan, gastropub keytar flannel.
                </p>
                <p className="text-muted">Unicorn jean shorts quinoa authentic cronut tilde twee YOLO, offal aesthetic yuccie iPhone truffaut seitan. Craft beer wayfarers lumbersexual DIY succulents, helvetica vexillologist next level woke hoodie keffiyeh tumblr schlitz chambray typewriter.
                </p>
                <p className="text-muted">Hexagon brunch subway tile keffiyeh.
                </p>
              </div>
              <div className="col-lg-6 p-size">
                <p className="text-muted">Synth ethical biodiesel poutine. Bitters beard salvia lo-fi. Palo santo literally plaid edison bulb, pitchfork drinking vinegar authentic pabst street art subway tile craft beer single-origin coffee shaman dreamcatcher.
                </p>
                <p className="text-muted">Williamsburg sriracha portland, microdosing asymmetrical pork belly la croix 3 wolf moon umami.
                </p>
                <p className="text-muted">Four dollar toast truffaut fashion axe, lomo plaid meh PBR&B scenester austin paleo thundercats heirloom knausgaard farm-to-table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container py-5">
      <div className="row">
        <div className="col-lg-5 offset-lg-1 pe-lg-5 pb-lg-0 pb-3 d-lg-flex align-items-lg-center">
          <div>
            <span className="colorSpan">OUR FUTURE            </span>
            <h4 className="fw-lighter fs-3 py-2">Growing Fast            </h4>
            <p className="text-muted fs-5">Thundercats art party edison bulb authentic roof party taiyaki synth gluten-free squid tumeric retro iPhone etsy.
            </p>
            <div className="d-flex align-items-center">
              <div className="pe-2 text-center">
                <span className="fw-bold fs-1">107</span>
                <p className="text-muted">OFFICES</p>
              </div>
              <p className="text-muted">Regional offices around the world              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={womenCashmere} alt="ribTank" className="w-100"/>
        </div>
      </div>
    </section>
    <section className="container-fluid py-5 bg-Next">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center">
          <div>
            <span className="colorSpan">CORE VALUES            </span>
            <h4 className="fw-lighter fs-4 py-2">Humblebrag gochujang pabst, master cleanse franzen vexillologist.            </h4>
            <div className="d-lg-flex py-2">
              <div className="pe-lg-2">
                <div className="py-4 text-muted">
                  <i className="fa-regular fa-trash-can fa-3x"></i>
                </div>
                <span className="fs-4">Cruises & Water Tours                </span>
                <p className="text-muted fs-5">Sustainable direct trade paleo semiotics. </p>
              </div>
              <div className="pe-lg-2">
                <div className="py-4 text-muted">
                  <i className="fa-solid fa-wifi fa-3x"></i>
                </div>
                <span className="fs-4">Night Life                </span>
                <p className="text-muted fs-5">Master cleanse franzen a bird brooklyn.</p>
              </div>
              <div>
                <div className="py-4 text-muted">
                  <i className="fa-solid fa-share-nodes fa-3x"></i>
                </div>
                <span className="fs-4">Hiking                </span>
                <p className="text-muted fs-5">Gluten-free ramps iPhone etsy coffee.  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container py-5">
      <div className="row mx-auto w-founders">
        <div className="col-lg-3  pb-lg-0 pb-3 d-lg-flex align-items-lg-center">
          <div>
            <span className="colorSpan">FOUNDERS            </span>
            <h4 className="fw-lighter fs-3 py-2">Key People            </h4>
            <p className="text-muted fs-5">Yielding fowl their brought is own day place fruit creature our day lesser cant bring hath after.
            </p>
            <p className="text-muted fs-5">Divide there forth fruitful.            </p>
          </div>
        </div>
        <div className="col-lg-3 text-center">
            <div className="mb-2 position-relative bg-foundersHover">
              <img src={shirtGreen} alt="ribTank" className="w-100"/>
              <div className="position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-founders d-flex justify-content-center align-items-center text-light">
                <i className="fa-brands fa-facebook-f pe-4 i-show "></i>
                <i className="fa-brands fa-twitter pe-4 i-show"></i>
                <i className="fa-brands fa-pinterest pe-4 i-show"></i>
                <i className="fa-brands fa-linkedin-in i-show"></i>
              </div>
            </div>
            <span >John Nicholson          </span>
            <p className="text-muted">Developer</p>
        </div>
        <div className="col-lg-3 text-center">
          <div className="mb-2 position-relative bg-foundersHover">
            <img src={relaxedShirt} alt="ribTank" className="w-100"/>
            <div className="position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-founders d-flex justify-content-center align-items-center text-light">
              <i className="fa-brands fa-facebook-f pe-4 i-show"></i>
                <i className="fa-brands fa-twitter pe-4 i-show"></i>
                <i className="fa-brands fa-pinterest pe-4 i-show"></i>
                <i className="fa-brands fa-linkedin-in i-show"></i>
            </div>
          </div>
          <span >Sandra Monroe          </span>
          <p className="text-muted">Marketing          </p>
        </div>
        <div className="col-lg-3 text-center">
          <div className="mb-2 position-relative bg-foundersHover">
            <img src={turtleneck} alt="ribTank" className="w-100"/>
            <div className="position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-founders d-flex justify-content-center align-items-center text-light">
              <i className="fa-brands fa-facebook-f pe-4 i-show "></i>
              <i className="fa-brands fa-twitter pe-4 i-show"></i>
              <i className="fa-brands fa-pinterest pe-4 i-show"></i>
              <i className="fa-brands fa-linkedin-in i-show"></i>
            </div>
          </div>
          <span >Denisse MacDonnell          </span>
          <p className="text-muted">CEO</p>
        </div>
      </div>
    </section>
    <hr/>
    </>
  )
}
