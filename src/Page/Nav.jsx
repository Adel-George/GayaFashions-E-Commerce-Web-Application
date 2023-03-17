import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from "../img/logo-light.png.webp"
import  {  useEffect } from 'react';
import { context } from './store/Store';
import OffcanvasCard from './card/OffcanvasCard';

export default function Nav() {

  const{clearColor,favoriteData,cardData,searchList,searchData,searchClear}= useContext(context);
  const searchDataSplice=searchData.length>0?[...searchData].splice(0,5):"";
  const [searchValue, setSearchValue] = useState("");

  const navigateList= useNavigate();


  function navColor(){
    const navList  = document.querySelector("nav");
      navList.classList.toggle("bg-light");
  }

  function collapseNavbar(){
    const collapseList  = document.querySelector(".collapse");
    collapseList.classList.replace("show","hide");
    collapseList.classList.remove("bg-light");
  }

  function searchNavigator(e){
    e.preventDefault();
    searchValue.value="";
    navigateList("/search");
    collapseNavbar();
  }

 function searchClearItem(){
    searchValue.value="";
    searchClear();
  }
  
  function searchClearList(){
    searchClearItem();
    collapseNavbar();
  }


  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navList  = document.querySelector("nav");

      const scrollList = window.scrollY;
      if (scrollList === 0) {
        navList.classList.remove("bg-light");

      } else {
        navList.classList.add("bg-light");
      }
    });
    const inputSearch=document.querySelector("input");
    setSearchValue(inputSearch);
  }, []);


  return (
    <>
      <nav className="navbar navbar-expand-lg position-fixed top-0 start-0 end-0 index py-3">
      <div className="container-fluid">
        <div id="logo" className="d-flex align-items-center" onClick={collapseNavbar}>
          <NavLink className="navbar-brand" to="/"><img src={logo}alt="logo" className="w-100" onClick={clearColor}/></NavLink>
        </div>
        <button
          className="navbar-toggler text-bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation" onClick={navColor}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={collapseNavbar}>
              <NavLink className="nav-link active fs-5" aria-current="page" to="home" onClick={clearColor}>Home</NavLink>
            </li>
            <li className="nav-item" onClick={collapseNavbar}>
              <NavLink className="nav-link fs-5" to="shop" onClick={clearColor}>Shop </NavLink>
            </li>
            <li className="nav-item" onClick={collapseNavbar}>
              <NavLink className="nav-link fs-5" onClick={clearColor} to="aboutUs">About Us </NavLink>
            </li>
            <li className="nav-item" onClick={collapseNavbar}>
              <NavLink className="nav-link fs-5" to="FAQ" onClick={clearColor}>FAQ</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div className=" d-lg-flex align-items-center">
              <li className="nav-item">
                <form className="d-flex" role="search" onSubmit={(e)=>searchNavigator(e)}>
                <div className="position-relative">
                  <input
                    className="form-control pe-5"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e)=>searchList(e.target.value)}
                  />
                    {searchValue.value?<div className='position-absolute xmark i-show' onClick={searchClearList}>
                    <i className="fa-sharp fa-solid fa-xmark text-secondary"></i>
                    </div>:""}
                  {
                    searchValue.value?
                    searchData.length>0?
                    <div className="list-group position-absolute" id="search">
                    {searchDataSplice.map((e,i)=><Link  className={i===0?"list-group-item list-group-item-action border-top-0 rounded-0":"list-group-item list-group-item-action"} to={"/productDetail/"+e.id}  key={i}  onClick={searchClearList}>{e.title}</Link>
                    )}
                    <Link  className="list-group-item list-group-item-action list-group-item-secondary" to="search" onClick={(e)=>searchNavigator(e)}>Show all search results</Link>
                    </div>
                    : <div className="list-group position-absolute" id="search">
                      <p className="list-group-item list-group-item-action border-top-0 rounded-0 rounded-bottom">No products were found.</p>
                      </div>
                      :""
                  }
                 </div>
                  <Link className="nav-link ps-2" to="search" onClick={(e)=>searchNavigator(e)}><i className="fa-solid fa-magnifying-glass"></i></Link>
                </form>
              </li>
              <li className="nav-item"onClick={collapseNavbar}>
                <Link className="nav-link d-flex align-items-center" to="wishlist" onClick={clearColor}>
                  <i className="fa-regular fa-heart pe-1"></i>
                  {favoriteData.length > 0 ?<div className='span-color d-flex justify-content-center align-items-center rounded-circle'>
                    <span>{favoriteData.length}</span>
                  </div>
                  :""}
                </Link>
              </li>
              <li className="nav-item">
                <span className="nav-link d-flex align-items-center" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                  <i className="fa-solid fa-cart-shopping pe-1"></i>
                  {cardData.length > 0?<div className='span-color d-flex justify-content-center align-items-center rounded-circle'>
                    <span>{cardData.length}</span>
                    </div>
                  :""}
                  </span>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    <OffcanvasCard/>

    </>
  )
}
