import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { context } from '../store/Store';
import  { useEffect } from 'react';
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import "./Product.css";

export default function Product(props) {
    const{colNumber,spliceNumber,searchItem,checkFilterAllData}=props;
    const{storeList,updateColor,clearColor,favoriteItem,filterList,storeData,searchData}= useContext(context);
    let listData=[...storeList];
    if(checkFilterAllData){
      listData=filterList.sort((e1,e2)=>(e1.title < e2.title) ? -1 : (e1.title > e2.title) ? 1 : 0);
    }
    else if(searchData.length>0&& searchItem===true){
      listData=[...searchData];
    }
    else{
      listData=spliceNumber?[...storeData].splice(0,spliceNumber):listData.sort((e1,e2)=>(e1.title < e2.title) ? -1 : (e1.title > e2.title) ? 1 : 0);
    }


    useEffect(() => {
      function tooltipTriggerList(){
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        return[...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
      }
      tooltipTriggerList();
    }, []);
  return (
    <>
      {
          listData.map((e,i)=> <div className={`col-md-6 col-lg-${colNumber}`} key={i}>
          <div className="position-relative img-line d-block" >
            <Link to={"/productDetail/"+e.id} onClick={clearColor}>
            <img src={e.defaultImg[0]} alt={e.title} className="w-100"/>
            <img src={e.hoverImg} alt={e.hoverImg?e.title:""} className="w-100 position-absolute top-0 start-0 opacity-0 img-show"/>
            </Link>
            {e.isNew?<p className="position-absolute top-0 start-0 m-2 py-1 px-3 bg-light text-dark rounded-4 fs-sm">New</p>:""}
            {e.isSale?<p className="position-absolute start-0 m-2 py-1 px-3 bg-light rounded-4 fs-sm text-danger"style={e.isNew?{top:"38px"}:{top:"0px"}}>{e.sale}</p>:""}
            <div className="position-absolute top-0 end-0 p-3 m-2 co-i d-flex justify-content-center align-items-center">
              <div className="position-relative d-flex justify-content-center align-items-center" onClick={()=>favoriteItem(e)}>
                {e.isFavorite?<i className="fa-solid fa-heart fs-5 co-bg"></i>:<i className="fa-regular fa-heart fs-5 co-bg"></i>}
                <i className="fa-solid fa-heart fs-5 position-absolute top-0 start-0 d-none i-show text-dark" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title={e.isFavorite?"Browse Wishlist":"Add to Wishlist"}></i>
              </div>
            </div>
           </div>
          <div className="py-2 d-flex justify-content-between">
                  <div className="text-start ">
                    <Link  className="text-dark" to={"/productDetail/"+e.id} onClick={clearColor}>{e.title}</Link>
                    <div className="d-flex">
                    {e.isSale?<>
                        <p className="pe-2 text-decoration-line-through text-muted">{e.price}</p>
                        <p>{"$"+e.salePrice}</p>
                        </>
                        :<p>{"$"+e.price}</p>}
                    </div>
                  </div>
                  <div className="d-flex">
                    {e.isColor?
                    <>{e.colorList.map((ec,i)=><div className="imgIcon me-2 " key={i}>
                    <div className="w-100 h-100 rounded-circle my-1 d-flex justify-content-center align-items-center border border-dark" style={{"backgroundColor":ec.color}} onClick={()=>updateColor(e,i)}>
                    <i className={ec.defaultImg?"fa-solid fa-check text-light rounded-circle fa-xs":"fa-solid fa-check text-light rounded-circle fa-xs d-none"}></i>
                    </div>
                  </div>)}
                    </>
                      :""}
                  </div>
                 </div>
        </div>)
        }
    </>
  )
}
