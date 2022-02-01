import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import luxy from 'luxy.js'
import { ParallaxProvider } from 'react-scroll-parallax';
// Routes
import Home from "./routes/Home";
import Archive from "./routes/Archive";
import Product from "./routes/Product";
import Checkout from "./routes/Checkout";
import OrderConfirm from "./routes/OrderConfirm";
import Imprint from "./routes/Imprint";
import BlogArchive from "./routes/BlogArchive";
import Blog from "./routes/Blog";
import About from "./routes/About";
import Contact from "./routes/Contact";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import AboutPayment from "./routes/AboutPayment";
import AboutShipping from "./routes/AboutShipping";
import Terms from "./routes/Terms";
// Components
import Preloader from './components/Preloader';
import PageTransition from './components/PageTransition';
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import React from "react";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [mediaQuery, setMediaQuery] = useState(window.matchMedia("(min-width: 900px)").matches);

  useEffect(() => {
    if(window.matchMedia("(min-width: 1200px)").matches){
      luxy.init({
        wrapperSpeed: 0.056
      });
    }
  }, [])

  const preloaderInterval = setInterval(() => {
    if(window.showPreloader === false){
      clearInterval(preloaderInterval);
      setTimeout(() =>{
        document.querySelector('#preloader').classList.add('hide');
      }, 2000)
      setTimeout(() =>{
        setShowPreloader(false);
      }, 2500)
    }
  }, 100)

  return (
    <>
    {
      showPreloader ? 
      <Preloader /> :
      <></>

    }

      <div className="app">
        <div className='bgFixed'></div>
        <Router>
          <Navbar />
          <div className={mediaQuery ? "page_body luxy" : "page_body"} id='luxy'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/archiv" element={<Archive />} />
              <Route path="/product" element={<Product />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirm" element={<OrderConfirm />} />
              <Route path="/imprint" element={<Imprint />} />
              <Route path="/blogs" element={<BlogArchive />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/about-payment" element={<AboutPayment />} />
              <Route path="/about-shipping" element={<AboutShipping />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
      
    </>
  );
}

export default App;
