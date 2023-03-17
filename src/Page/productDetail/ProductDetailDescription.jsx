import React from 'react';
import icon from "../../img/Icon/93f8c919ba78f69b5544acec1062f483.png"


export default function ProductDetailDescription(props) {
    const {listData}=props;
  return (
    <>
    <section className="container pt-5">
  <h3 className="fw-bold">Description</h3>
  <ul className="py-3 w-75 mx-auto text-muted fs-5">
    {listData.description.map((e,i)=> <li className="pb-3" key={i}>{e}</li>)}
  </ul>

  <h3 className="fw-bold pb-2">{listData.reviews.length>0&&listData.reviews.length} reviews for "{listData.title}" </h3>
  <div className="pt-3 w-75 mx-auto">
    {listData.reviews.length>0?listData.reviews.map((e,i)=><div className="d-flex" key={i}>
      <div className="pe-3 avatar-size">
        <img src={e.img?e.img:icon} alt="Icon" className="w-100 rounded-circle"/>
      </div>
      <div>
        <h5>{e.name}</h5>
        <span className="text-muted">{e.date}</span>
        <p className="pt-1">{e.description}</p>
        <hr/>
      </div>
    </div>):<>
    <p className="pt-1 text-center fs-4 text-muted">There are no reviews yet.</p>
    <hr/>
    </>}

    <div className="d-flex justify-content-center">
      <span className="text-muted pe-1">SKU:</span>
      <p className="pe-5">{listData.id}</p>
      <span className="text-muted pe-1">Category:</span>
      <p>{listData.category}</p>
    </div>
  </div>
</section>
<hr/>
    </>
  )
}
