import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { context } from "../store/Store";
import "./ProductDetail.css";
import Product from "./../products/Product";
import ProductDetailDescription from "./ProductDetailDescription";
import ProductDetailTitle from "./ProductDetailTitle";
import ProductDetailImg from "./ProductDetailImg";

export default function ProductDetail() {
  const { id } = useParams();
  const { storeList, updateColor, favoriteItem, cardItem } =
    useContext(context);
  let listData = [...storeList];
  listData = listData.filter((e) => e.id === id);
  listData = { ...listData[0] };
  const [totalProduct, setTotalProduct] = useState(1);
  const [sizeSelect, setSizeSelect] = useState("");
  const [valid, setValid] = useState(true);
  function plusTotalProduct() {
    if (totalProduct < 5) {
      let plus = totalProduct;
      plus++;
      setTotalProduct(plus);
    }
  }
  function minusTotalProduct() {
    if (totalProduct > 1) {
      let minus = totalProduct;
      minus--;
      setTotalProduct(minus);
    }
  }
const [alterPlaceHolder, setAlterPlaceHolder] = useState();
  const alert = () => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `<div class="bg-success py-1 rounded-5 text-center text-light">Done</div> `;
    alterPlaceHolder.append(wrapper);
    setTimeout(()=>wrapper.remove(),700);
  };

  function cartList() {
    if (listData.size.length > 0) {
      if (sizeSelect) {
        cardItem(listData, totalProduct, sizeSelect);
        alert();
        setValid(true);
      } else {
        setValid(false);
      }
    } else {
      cardItem(listData, totalProduct, sizeSelect);
      alert();
    }
  }

  useEffect(() => {
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    setAlterPlaceHolder(alertPlaceholder)
  }, []);


  return (
    <>
      <section
        className="container-fluid"
        style={{ backgroundColor: listData.backColor }}
        id="project"
      >
        <div className="row" style={{ paddingTop: "200px" }}>
          <ProductDetailTitle
            listData={listData}
            updateColor={updateColor}
            favoriteItem={favoriteItem}
            totalProduct={totalProduct}
            plusTotalProduct={plusTotalProduct}
            minusTotalProduct={minusTotalProduct}
            setSizeSelect={setSizeSelect}
            cartList={cartList}
            valid={valid}
            setValid={setValid}
            sizeSelect={sizeSelect}
          />
          <ProductDetailImg listData={listData} />
        </div>
      </section>
      <ProductDetailDescription listData={listData} />
      <section className="container py-2 ">
        <h3 className="fw-bold py-4">Related products</h3>
        <div className="row" onClick={() => setTotalProduct(1)}>
          <Product colNumber={3} spliceNumber={4} />
        </div>
      </section>
      <hr />
    </>
  );
}
