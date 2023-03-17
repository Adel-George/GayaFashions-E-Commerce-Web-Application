import React, { useEffect, useState } from 'react';
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";


export default function ProductDetailTitle(props) {
    const {listData,updateColor,favoriteItem,totalProduct,plusTotalProduct,minusTotalProduct,sizeSelect,setSizeSelect,cartList,valid,setValid}=props;
    const [sizeData, setSizeData] = useState();
    function sizeProduct(element){
      if(sizeSelect.includes(element.target.innerHTML)){
        setSizeSelect("");
      }
      else{
        setSizeSelect(element.target.innerHTML);
      }

      sizeData.forEach((e)=>{
        if(e===element.target&&!e.classList.contains("btn-secondary")){
          e.classList.add("btn-secondary");
          e.classList.replace("text-dark","text-light");
          setValid(true);
        }
        else{
          e.classList.remove("btn-secondary","text-light");
          e.classList.replace("text-light","text-dark");
        }
      });
    }

    useEffect(() => {
        function tooltipTriggerList(){
          const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
          return[...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
        }
        tooltipTriggerList();

        const sizeList=document.querySelectorAll(".size");
        setSizeData(sizeList);

      }, []);

  return (
    <>
    <div className="col-lg-4 offset-lg-1 text-center text-lg-start order-lg-first order-last">
      <h3 className="fs-1">{listData.title}</h3>
      {
        listData.isSale?
        <div className="py-3">
        <span className="pe-2 fs-5 text-muted">{"$"+listData.salePrice} - {"$"+listData.price}</span>
        <span className="px-2 border border-danger rounded-4 fs-sm text-danger">{listData.sale} Off</span>
        </div>
      :""
      }
      <div className="pt-3 pb-1 d-lg-flex d-block">
      {listData.isColor?
                    <div>
                    <p className="pe-lg-5 fs-5 ">Pattern:</p>
                    <div className="d-flex py-2 justify-content-lg-start justify-content-center">
                    {listData.colorList.map((e,i)=><div className='imgIcon me-2'  key={i}>
                        <div className="w-100 h-100 rounded-circle my-1 d-flex justify-content-center align-items-center border border-dark" style={{backgroundColor:e.color}} onClick={()=>updateColor(listData,i)}>
                         <i className={e.defaultImg?"fa-solid fa-check text-light rounded-circle fa-xs":"fa-solid fa-check text-light rounded-circle fa-xs d-none"}></i>
                    </div>
                    </div> )}
                  </div>
                  </div>
                      :""}
       {
        listData.size.length>0?
        <div>
        <p className={valid?"fs-5":"fs-5 is-invalid"}>Size:</p>
        <div className=" d-flex pb-3 justify-content-lg-start justify-content-center">
           {listData.size.map((e,i)=><button type="button" className="btn text-dark border border-secondary me-2 size" key={i} onClick={(e)=>sizeProduct(e)}>{e}</button>)}
        </div>
        <div id="validationServerUsernameFeedback" className="invalid-feedback">
          Please choose a Size.
          </div>
      </div>
        :"" }
      </div>

      <div className="py-3">
        {
        listData.isSale?<>
        <span className=" text-muted text-decoration-line-through pe-2">{"$"+listData.price}</span>
        <span className="fs-2 ">{"$"+listData.salePrice}</span>
        </>:<span className="fs-2 ">{"$"+listData.price}</span> }
      </div>
      <div className="d-flex justify-content-lg-start justify-content-center pt-4">
        <div className="bg-light d-flex justify-content-evenly align-items-center py-3 w-25">
          <i className={totalProduct>1?"fa-solid fa-minus i-show":"fa-solid fa-minus text-muted"} onClick={minusTotalProduct}></i>
          <span>{totalProduct}</span>
          <i className={totalProduct<5?"fa-solid fa-plus i-show":"fa-solid fa-plus text-muted"} onClick={plusTotalProduct}></i>
        </div>

        <div className="ps-2 w-50 position-relative">
        <div id="liveAlertPlaceholder" className='position-absolute w-100 '>
        </div>
          <button className="text-light bg-dark py-3 w-100" id="addCard" onClick={cartList}>Add to cart</button>
        </div>

        <div className="d-flex justify-content-center align-items-center px-3 ms-1" style={{backgroundColor: "#d4d5d7"}}>
            <div className="position-relative d-flex justify-content-center align-items-center i-hover" onClick={()=>favoriteItem(listData)}>
            {listData.isFavorite?<i className="fa-solid fa-heart fs-5 co-bg"></i>:<i className="fa-regular fa-heart fs-5 co-bg"></i>}
              <i className="fa-solid fa-heart fs-5 position-absolute top-0 start-0 d-none i-show"data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title={listData.isFavorite?"Browse Wishlist":"Add to Wishlist"}></i>
            </div>
        </div>
      </div>

      <div className="py-3">
        <span className="pe-2 fs-5 text-muted">Share</span>
          <i className="fa-brands fa-facebook-f pe-3"></i>
          <i className="fa-brands fa-twitter pe-3"></i>
          <i className="fa-brands fa-pinterest"></i>
    </div>
  </div>
    </>
  )
}
