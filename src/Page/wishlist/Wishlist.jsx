import React from "react";
import "./Wishlist.css";
import { context } from "./../store/Store";
import { useContext } from "react";
import { Link } from 'react-router-dom';

export default function Wishlist() {
  const { favoriteData,clearColor,favoriteItem } = useContext(context);

  return (
    <>
      <section className="container py-5 text-center" id="wishlist" style={favoriteData.length > 1 ?{marginBottom:"0px"}:{marginBottom:"270px"}}>
        <h2 className="fw-bold fs-1 py-5">Wishlist</h2>
        <div className="col-lg-8 offset-lg-2">
          <h5 className="text-start pt-5 text-muted">
            My wishlist on Goya Fashion
          </h5>
          <hr />
          <div>
            {favoriteData.length > 0 ?
            favoriteData.map((e,i)=><div key={i} >
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-2 col-4">
                <Link className="Wishlist pe-2" to={"/productDetail/"+e.id} onClick={clearColor}>
              <img
                src={e.defaultImg[0]}
                alt={e.title}
                className="w-100 rounded-2"
              />
            </Link>
                </div>
                <div className="col-4">
                <Link  className="text-dark" to={"/productDetail/"+e.id} onClick={clearColor}>{e.title}</Link>
                </div>
            <div className="col-lg-4 col-3 mt-sm-3  mt-0">
            {e.isSale?
                    <>
                        <span><span className="pe-2 text-decoration-line-through text-muted">{e.price}</span>- {"$"+e.salePrice}</span>
                    </>
                    :<p>{"$"+e.price}</p>}
            </div>
            <div className="col-1 offset-lg-1 mb-sm-1 mb-3" onClick={()=>favoriteItem(e)}>
                    <i className="fa-regular fa-trash-can fa-xl i-show"></i>
                    </div>
              </div>
          </div>
          <hr />
          </div>
)
            :
              <>
                <p>No products added to the wishlist </p>
                <hr />
              </>
            }
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}
