import React from 'react';
import "./App.css";
import Home from './Page/home/Home';
import Footer from './Page/Footer';
import Nav from './Page/Nav';
import { Route, Routes } from 'react-router-dom';
import Error from './Page/Error';
import Store from './Page/store/Store';
import Shop from './Page/shop/Shop';
import ProductDetail from './Page/productDetail/ProductDetail';
import Faq from './Page/Faq';
import AboutUS from './Page/aboutUs/AboutUs';
import Wishlist from './Page/wishlist/Wishlist';
import CardItem from './Page/card/CardItem';
import SearchProduct from './Page/search/SearchProduct';


export default function App() {

  return (
    <>
    <Store>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='FAQ' element={<Faq/>}/>
      <Route path='aboutUs' element={<AboutUS/>}/>
      <Route path='wishlist' element={<Wishlist/>}/>
      <Route path='search' element={<SearchProduct/>}/>
      <Route path='card' element={<CardItem/>}/>
      <Route path='productDetail' element={<ProductDetail/>}>
      <Route path=':id' element={<ProductDetail/>}/>
      </Route>
      <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </Store>
    </>
  )
}
