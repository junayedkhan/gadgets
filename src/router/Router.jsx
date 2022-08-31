import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from "../redux/Store"
import Navbar from '../components/Navbar';
import Home from '../components/Home/Index';
import Products from "../components/Products/Index"
import Cart from "../components/cart/Index"
import { ProductDetails } from './../components/Products/ProductDetails';
import About from "../components/about/Index"
import Blog from "../components/Blog/Index"
import Newlatter from '../components/Newlatter';
import Footer from '../components/Footer';
import BlogDetails from '../components/Blog/BlogDetails';
import Contact from "../components/contact/Index"

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
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:blogId" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Newlatter />
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default Router;