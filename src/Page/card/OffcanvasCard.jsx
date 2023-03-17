import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { context } from './../store/Store';

export default function OffcanvasCard() {
  const { clearColor,cardData ,deleteCardItem,plusTotalCardItem,minusTotalCardItem} = useContext(context);
  const subtotal =cardData.length>0?cardData.map((e)=>{
   return e.product.isSale?Number(e.product.salePrice)*Number(e.total):Number(e.product.price)*Number(e.total)
  }).reduce((x,y)=>Number(x)+Number(y)):"";
  return (
    <>
        <div className="offcanvas offcanvas-end" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Cart</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body text-center">
        {cardData.length > 0?<>
          <div id="card-item" className="overflow-auto">
          {cardData.map((e,i)=> <div key={i}>
            <div className="container-fluid" >
              <div className="row align-items-center">
                <div className="col-4" data-bs-dismiss="offcanvas">
              <Link className="Wishlist pe-2" to={"/productDetail/"+e.product.id} onClick={clearColor}>
                <img src={e.img} alt={e.product.title} className="w-100 rounded-2"/>
              </Link>
              </div>
              <div className="col-8">
                <div data-bs-dismiss="offcanvas">
                  <Link  className="text-dark" to={"/productDetail/"+e.product.id} onClick={clearColor}>{e.product.title}</Link>
                  </div>
                <div className="row align-items-center">
                  <div className='col-6 text-start pt-1'>
                  <div className="d-flex justify-content-evenly align-items-center ">
                    <div className="iHover d-flex justify-content-center align-items-center">
                      <i className={e.total>1?"fa-solid fa-minus i-show":"fa-solid fa-minus text-muted"} onClick={()=>minusTotalCardItem(e.id)}></i>
                    </div>
                    <span>{e.total}</span>
                    <div className="iHover d-flex justify-content-center align-items-center">
                      <i className={e.total<5?"fa-solid fa-plus i-show":"fa-solid fa-plus text-muted"} onClick={()=>plusTotalCardItem(e.id)}></i>
                    </div>
                  </div>
                  {e.size?<span className='ps-3 text-muted'>Size : <span className='fs-sm text-dark'>{e.size}</span></span>:""}
                  </div>
                  <div className='col-4'>
                  {e.product.isSale?
                    <>
                        <span><span className="pe-2 text-decoration-line-through text-muted">{e.product.price}</span> {"$"+e.product.salePrice}</span>
                    </>
                    :<span className='pe-2'>{"$"+e.product.price}</span>}
                    </div>
                   <div className=' col-2'  onClick={()=>deleteCardItem(e.id)}>
                    <i className="fa-regular fa-trash-can fa-xl i-show"></i>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <hr/>
            </div>
          )}
          </div>
          <div className="d-flex justify-content-between pt-3">
            <span className="text-muted">Subtotal:  </span>
            <span>${subtotal}.00 </span>
          </div>
          <div className="py-3 w-75 mx-auto" data-bs-dismiss="offcanvas">
            <Link className="btn btn-outline-dark py-3 w-100" onClick={clearColor} to="card" > View cart</Link>
          </div>
        </>
        :<>
        <div id="cart-shopping" className="d-flex justify-content-center align-items-center rounded-circle mx-auto mt-5">
            <i className="fa-solid fa-cart-shopping fa-2x text-muted" ></i >
          </div>
          <p className="py-3 text-muted">No products in the cart. </p>
          <div className="py-3 w-75 mx-auto" data-bs-dismiss="offcanvas">
            <Link className="btn btn-outline-dark py-3 w-100" to="shop" onClick={clearColor}> Continue Shopping</Link>
          </div>
          </>}
      </div>
    </div>

    </>
  )
}
