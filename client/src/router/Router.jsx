import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from "../redux/Store"
import Navbar from '../components/Navbar';
import Home from '../components/Home/Index';
import Products from "../components/Products/Index"
import Cart from "../components/cart/Index"
import { ProductDetails } from './../components/Products/ProductDetails';
import Newlatter from '../components/Newlatter';
import Footer from '../components/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/products/:productId" element={<ProductDetails />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        <Newlatter />
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default Router;