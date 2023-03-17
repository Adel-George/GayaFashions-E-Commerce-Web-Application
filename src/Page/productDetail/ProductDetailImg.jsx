import React from 'react'

export default function ProductDetailImg(props) {
    const {listData}=props;
  return (
    <>
    <div className="col-lg-6 col-10 order-lg-last order-first">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="false">
          <div className="carousel-inner">
            {listData.defaultImg.map((e,i)=><div className={i===0?"carousel-item active":"carousel-item"} key={i}>
              <img src={e} className="d-block position-relative w-100"  alt="abstract"/>
            </div>)}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="col-lg-1 col-2 order-lg-last order-first" style={{paddingTop: "150px"}}>
        <div className="carousel-indicators position-static d-block">
            {
                listData.defaultImg.map((e,i)=><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i} className={i===0?"active":""} aria-current="true" aria-label={"Slide"+(i+1)} key={i}>
                <img src={e} className="d-block w-100" alt="abstract"/>
               </button>)
            }
        </div>
      </div>
    </>
  )
}
