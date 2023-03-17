import React, { useContext, useState } from "react";
import bannerBag from "../../img/Banner/banner-bag.jpg";
import Product from "../products/Product";
import Filter from "./Filter";
import "./Shop.css";
import { context } from "./../store/Store";

export default function Shop() {
  const { storeList, filterSaleList } = useContext(context);

  const range = storeList.sort(
    (e1, e2) =>
      (e1.isSale ? Number(e1.salePrice) : Number(e1.price)) -
      (e2.isSale ? Number(e2.salePrice) : Number(e2.price))
  );
  const minRange = range[0].isSale ? range[0].salePrice : range[0].price;
  const maxRange = range[range.length - 1].isSale
    ? range[range.length - 1].salePrice
    : range[range.length - 1].price;

  const [checkData, setCheckData] = useState({
    category: {
      categoryName: "",
      categoryCheck: false,
    },
    size: {
      sizeName: "",
      sizeCheck: false,
    },
    range: {
      rangeMin: minRange,
      rangeMax: maxRange,
      rangeCheckMin: false,
      rangeCheckMax: false,
    },
  });
  let checkFilterAllData =
    checkData.category.categoryCheck ||
    checkData.size.sizeCheck ||
    checkData.range.rangeCheckMin ||
    checkData.range.rangeCheckMax ||
    filterSaleList.new ||
    filterSaleList.sale;

  return (
    <>
      <section
        id="shop"
        style={{ backgroundImage: `url(${bannerBag})` }}
        className="d-flex justify-content-center align-items-center"
      >
        <h3 className="fw-lighter fs-1">Shop</h3>
      </section>
      <section className="container-fluid py-5">
        <div className="row">
          <Filter
            checkData={checkData}
            setCheckData={setCheckData}
            checkFilterAllData={checkFilterAllData}
            range={range}
            minRange={minRange}
            maxRange={maxRange}
          />
          <div className="col-lg-9 col-11">
            <div className="row">
              <Product colNumber={3} spliceNumber={0} checkFilterAllData={checkFilterAllData}/>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}
