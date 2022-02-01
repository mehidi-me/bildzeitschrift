import React, {useEffect} from 'react'
import AOS from 'aos'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
// Components 
import PageTransition from '../components/PageTransition';
// CSS
import '../assets/css/product.css'
import '../assets/owl carousel/owl.carousel.min.css'
import '../assets/owl carousel/owl.theme.default.min.css'
// Icons
import ArrowIcon from '../assets/icons/arrow.png'

export default function Product() {
  
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
    document.documentElement.scrollTop = 0;
  }, [])
  return (
    <div className='product_page'>
      <PageTransition />
      <div className='container'>
        <div className='header'>
          <div className='top'>
            <div className='title'>Die Woche</div>
            <div className='date'>5. September 1925 | Ausgabe 36</div>
          </div>
          <div className='details'>
          <div className='section_line_1'>
            <img src={require('../assets/images/productpage-line-1.png')} alt='' />
          </div>
            <div className='image'>
              <img src={require('../assets/images/thumbnail.png')} alt='' />
            </div>
            <div className='actions'>
              <div className='price'>€ 15,95</div>
              <span>inkl. 20% Mwst.</span>
              <button className='btn_primary bg icon'>In den Warenkorb <img src={require('../assets/icons/arrow.png')} /></button>
            </div>
          </div>
        </div>

        <section className='categories'>
          <div className='content'>
             <div className='title'>Kategorien</div>
             <div className='items'>
                <span>Illustration<br />Frau<br />Politik<br />Deutschland<br />Künstler<br />Beruf</span>
             </div>
          </div>
        </section>

        <section className='featured'>
          <div className='title'>Das könnte dich auch interessieren:</div>
          <div className='slider'>
            <OwlCarousel 
              className='owl-theme'
              items={1}
              nav={true}
              navText={['<img src="'+ArrowIcon+'" />', '<img src="'+ArrowIcon+'" />']}
              dots={false}
              loop={true}
            >
              <div className='item'>
                <img src={require('../assets/images/topic-1.jpg')} alt='' />
              </div>
              <div className='item'>
                <img src={require('../assets/images/topic-1.jpg')} alt='' />
              </div>
              <div className='item'>
                <img src={require('../assets/images/topic-1.jpg')} alt='' />
              </div>
            </OwlCarousel>
          </div>
        </section>
      </div>
    </div>
  )
}
