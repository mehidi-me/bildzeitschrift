import React, { useEffect, useState } from "react"
import { NavLink, Link } from 'react-router-dom'
import Branding from "../assets/Branding"
import AOS from "aos"
import $ from 'jquery'
// CSS
import '../assets/css/navbar.css'
import '../assets/css/mini-cart.css'
// Icons
import SearchIcon from '../assets/icons/search.svg'
import CartIcon from '../assets/icons/cart.svg'
import { animate } from "luxy.js"

export default function Navbar() {
  const [navLinks, setNavlinks] = useState([{name: 'ARCHIV', path: '/archiv'}, {name: 'ÜBER UNS', path: '/about'}, {name: 'BLOG', path: '/blogs'}, {name: 'KONTAKT', path: '/contact'}]);
  const [menubarShow, setMenubarShow] = useState(false);
  const [miniCartShow, setMiniCartShow] = useState(false);
  const [searchFormShow, setSearchFormShow] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000
    })

    setTimeout(() => {
      document.querySelector('.main_nav').classList.add('show')
    }, 1000)

    var lastScrolledTop = 0;
    
    setInterval(() => {
      if(window.scrollY === 0){
        document.querySelector('.main_nav').classList.add('show')
      }
    })
    
    setTimeout(() => {
      $(window).scroll(function(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(scrollTop > lastScrolledTop){
          setTimeout(() => {
            $(".main_nav").removeClass("show");
          }, 800)
        }
        else{
          setTimeout(() => {
            $(".main_nav").addClass("show");
          }, 100)
        }
        lastScrolledTop = scrollTop;
      });
    }, 1000);
  }, [])

  if(window.matchMedia('(max-width: 900px)').matches){
    miniCartShow?
      document.body.style.overflow = 'hidden'
    :
      document.body.style.overflow = 'auto'
  }

  function handleLinkClick(){
    setMenubarShow(false);
    setMiniCartShow(false);

    if(menubarShow === true){
      animateBurger()
    }
  }

  function animateBurger() {
    $(".menu-parent").toggleClass('state1');
    setTimeout(function(){
      $(".menu-parent").toggleClass('state2');
    }, 300);
    setTimeout(function(){
      $(".menu-parent").toggleClass('state3');
    }, 600);
  }

  return (
    <>
    <nav className="main_nav">
      <div className="nav_container">
        <div className="container">
          <Link to='/' className="branding" onClick={() => {handleLinkClick()}}>
            {
              menubarShow?
              <Branding txtColor="var(--bgColor)" />
              :
              <Branding txtColor="#1c1c1c" />
            }
          </Link>
          <div className="nav_links">
            <ul className={menubarShow? "links navigations show" : searchFormShow? "links navigations" : "links navigations margin"}>
              {
                navLinks.map((link, index) => {
                  return (
                    <li key={index} onClick={handleLinkClick}>
                      <NavLink to={link.path} exact>{link.name}</NavLink>
                    </li>
                  )
                })
              }
            </ul>
            <ul className="links">
              <li className="icon" onClick={handleLinkClick}>
                <a>
                  <form className={searchFormShow? "search_form show" : "search_form"}>
                    <input type="text" placeholder="Suchbegriff eingeben" />
                    <img src={SearchIcon} onClick={() => {setSearchFormShow(!searchFormShow)}} />
                  </form>
                </a>
              </li>
              <li className="icon"><a onClick={() => {setMiniCartShow(true)}}>
                <img src={CartIcon} />
                <span className="count">1</span>
              </a></li>
              <li className="icon menu_icon" onClick={() => {setMenubarShow(!menubarShow); animateBurger()}}>
                <div className="menu-parent">
                  <div className="menu-bar top" />
                  <div className="menu-bar center" />
                  <div className="menu-bar bottom" />
                  <div className="menu-bar cross1" />
                  <div className="menu-bar cross2" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    
    
    <div className={miniCartShow? 'mini_cart show' : 'mini_cart'}>
      <div className='header'>
        <div className='title'>Dein Warenkorb</div>
        <div className='close_btn' onClick={() => {setMiniCartShow(false)}}><img src={require('../assets/icons/cross.png')} /></div>
      </div>
      <div className='products_container'>
        <div className='item'>
          <div className='image'><img src={require('../assets/images/thumbnail.png')} /></div>
          <div className='details'>
            <div className='top'>
              <div className='title'>Die Woche</div>
              <div className='date'>1925 - Ausgabe 36</div>
            </div>
            <div className='bottom'>
              <div className='price'>€15,95</div>
              <div className='remove_btn'>Enfernen</div>
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='image'><img src={require('../assets/images/thumbnail.png')} /></div>
          <div className='details'>
            <div className='top'>
              <div className='title'>Die Woche</div>
              <div className='date'>1925 - Ausgabe 36</div>
            </div>
            <div className='bottom'>
              <div className='price'>€15,95</div>
              <div className='remove_btn'>Enfernen</div>
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='image'><img src={require('../assets/images/thumbnail.png')} /></div>
          <div className='details'>
            <div className='top'>
              <div className='title'>Die Woche</div>
              <div className='date'>1925 - Ausgabe 36</div>
            </div>
            <div className='bottom'>
              <div className='price'>€15,95</div>
              <div className='remove_btn'>Enfernen</div>
            </div>
          </div>
        </div>
      </div>
      <div className='actions'>
        <div className='subtotal'>
          <span className='title'>Summe</span>
          <span className='price'>€ 31,90</span>
        </div>
        <Link to='/checkout' onClick={() => {setMiniCartShow(false)}} className='btn_primary bg icon'>Zur Kasse <img src={require('../assets/icons/arrow.png')} /></Link>
      </div>
    </div>
    </>
  )
}
