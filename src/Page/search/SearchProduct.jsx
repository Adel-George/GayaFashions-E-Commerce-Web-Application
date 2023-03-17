import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context } from '../store/Store';
import Product from './../products/Product';

export default function SearchProduct() {
  const { clearColor,searchValue,searchList,searchData,searchClear} = useContext(context);

  return (
    <>
      <section className="container py-5 text-center" style={searchData.length>0?{marginBottom:"0px"}:{marginBottom:"200px"}}>
        <h2 className="fw-bold fs-1 py-5">Search results:</h2>
        <div className="col-lg-6 offset-lg-3 position-relative">
                  <input
                    className="form-control me-2 pe-5 py-2"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchValue}
                    onChange={(e)=>searchList(e.target.value)}
                  />
                  {searchValue.length>0? <div className='position-absolute xmark i-show' id='xmark' onClick={searchClear}>
                    <i className="fa-sharp fa-solid fa-xmark text-secondary"></i>
                    </div>:""}
        </div>
        <div className="col-lg-8 offset-lg-2 my-4">
        <Link to="/shop" onClick={clearColor}> <h5 className="text-start pt-5 text-muted" onClick={searchClear}><i className="fa-solid fa-angle-left pe-1"></i>Continue Shopping</h5></Link>
          <hr/>
          {searchData.length>0?
          <div  className="row">
          <Product colNumber={3} searchItem={true}/>
          </div>
          :<div>
           <p>No products were found matching your selection. </p>
          <hr />
          </div>}
        </div>
      </section>
      <hr />

    </>
  )
}
