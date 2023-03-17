import React from 'react'
import "./CardItem.css";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { context } from './../store/Store';

export default function CardItem() {
  const { clearColor,cardData,deleteCardItem,plusTotalCardItem,minusTotalCardItem} = useContext(context);
  const subtotal =cardData.length>0?cardData.map((e)=>{
    return e.product.isSale?Number(e.product.salePrice)*Number(e.total):Number(e.product.price)*Number(e.total)
   }).reduce((x,y)=>Number(x)+Number(y)):0;
   const flatRate="10.00";
  return (
    <>
    <section className="container py-5 text-center"id="Cart">
      <h2 className="fw-bold fs-1 py-5">Cart</h2>
      <div className="row">
        <div className="col-lg-6 offset-lg-1">
         <Link to="/shop" onClick={clearColor}> <h5 className="text-start pt-5 text-muted"><i className="fa-solid fa-angle-left pe-1"></i>Continue Shopping</h5></Link>
          <hr/>
          <div>
    {cardData.length > 0?cardData.map((e,i)=> <div key={i} >
                <div className="row align-items-center px-lg-0 px-2">
                    <div className="col-3">
                      <Link className="Wishlist pe-2" to={"/productDetail/"+e.product.id} onClick={clearColor}>
                        <img src={e.img} alt={e.product.title} className="w-100 rounded-2"/>
                      </Link>
                      </div>
              <div className="col-4 text-start ">
                <div>
                <Link  className="text-dark" to={"/productDetail/"+e.product.id} onClick={clearColor}>{e.product.title}</Link>
                </div>
                {e.size?<span className='text-muted'>Size : <span className='fs-sm text-dark'>{e.size}</span></span>:""}
              {e.product.isSale?
                    <>
                        <p>{"$"+e.product.salePrice}</p>
                    </>
                    :<p>{"$"+e.product.price}</p>}
               </div>
                <div className="d-flex justify-content-evenly align-items-center col-2">
                  <div className="iHover d-flex justify-content-center align-items-center">
                    <i className={e.total>1?"fa-solid fa-minus i-show":"fa-solid fa-minus text-muted"} onClick={()=>minusTotalCardItem(e.id)}></i>
                  </div>
                  <span>{e.total}</span>
                  <div className="iHover d-flex justify-content-center align-items-center">
                    <i className={e.total<5?"fa-solid fa-plus i-show":"fa-solid fa-plus text-muted"} onClick={()=>plusTotalCardItem(e.id)}></i>
                  </div>
                </div>
                  <p className="mt-3 col-2">${e.product.isSale?Number(e.product.salePrice)*Number(e.total):Number(e.product.price)*Number(e.total)}.00</p>
              <div className='col-1' onClick={()=>deleteCardItem(e.id)}>
                <i className="fa-regular fa-trash-can fa-xl i-show"></i>
              </div>
              </div>
            <hr/>
             </div>):
             <>
                  <p>No products added to the Cart </p>
                  <hr/>
                  </>}
          </div>
        </div>
        <div className="col-lg-3 offset-1 col-10 border border-2 border-dark pt-5 pb-2 px-5 text-start my-5 h-25">
          <p className="fs-4">Cart totals   </p>
          <hr/>
          <div className="d-flex justify-content-between">
            <span className="text-muted">SUBTOTAL</span>
            <span>${subtotal}.00 </span>
          </div>
          <hr/>
          <span>SHIPPING          </span>
          <div className="d-flex justify-content-between py-2">
            <span className="text-muted">Flat Rate:</span>
            <span>${flatRate}  </span>
          </div>
          <p>Shipping to CA. </p>
          <hr/>
          <div className="d-flex justify-content-between">
            <p className="text-muted">TOTAL</p>
            <p>${Number(subtotal)+Number(flatRate)}.00</p>
          </div>
          <div className="pt-3 pb-4 ">
            <Link className="btn btn-dark py-3 w-100">Proceed to checkout </Link>
          </div>
        </div>
      </div>
    </section>
    <hr/>

    </>
  )
}
