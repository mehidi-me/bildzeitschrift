import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import luxy from 'luxy.js';
// Components 
import PageTransition from '../components/PageTransition';
// CSS
import '../assets/css/blogs.css';

export default function BlogArchive() {
  const [mediaQuery, setMediaQuery] = useState(window.matchMedia("(max-width: 900px)").matches);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
    
    // if(window.matchMedia("(min-width: 1200px)").matches){
    //   luxy.init();
    // }
    document.documentElement.scrollTop = 0;
  }, [])

  return (
    <div className='blogs_page'>
      <PageTransition />
      <ParallaxProvider>
      <div className='container'>
        <div className='page_title'>Entdecke unseren <span>Blog</span></div>
        <div className='content'>
          <div className='categories'>
            <button className='btn_primary'>Blog Category</button>
            <button className='btn_primary'>Blog Category</button>
            <button className='btn_primary'>Blog Category</button>
            <button className='btn_primary'>Blog Category</button>
            <button className='btn_primary active'>Blog Category</button>
          </div>
          <div className='blogs_container'>
            <div className='card left'>
              {
                mediaQuery?
                <div className='image'>
                  <img src={require('../assets/images/blog-1.png')} alt="image" />
                </div>
                :
                <Parallax y={[-10, 10]} tagOuter="figure">
                  <div className='image'>
                    <img src={require('../assets/images/blog-1.png')} alt="image" />
                  </div>
                </Parallax>
              }
              <div className='details'>
                <div className='title'>Aussichten</div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
                <div className='actions'>
                  <Link to='/blog' className='btn_primary bg'>Weiterlesen</Link>
                </div>
              </div>
            </div>
            <div className='card right'>
              <div className='details'>
                <div className='title'>Schönheit</div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
                <div className='actions'>
                  <Link to='/blog' className='btn_primary bg'>Weiterlesen</Link>
                </div>
              </div>
              {
                mediaQuery?
                <div className='image'>
                  <img src={require('../assets/images/blog-2.png')} alt="image" />
                </div>
                :
                <Parallax y={[-10, 10]} tagOuter="figure">
                  <div className='image'>
                    <img src={require('../assets/images/blog-2.png')} alt="image" />
                  </div>
                </Parallax>
              }
            </div>
            
            <div className='card left'>
              {
                mediaQuery?
                <div className='image'>
                  <img src={require('../assets/images/blog-3.png')} alt="image" />
                </div>
                :
                <Parallax y={[-10, 10]} tagOuter="figure">
                  <div className='image'>
                    <img src={require('../assets/images/blog-3.png')} alt="image" />
                  </div>
                </Parallax>
              }
              <div className='details'>
                <div className='title'>Impressionen</div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
                <div className='actions'>
                  <Link to='/blog' className='btn_primary bg'>Weiterlesen</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className='pagination'>
            <img src={require('../assets/icons/arrow.png')} style={{transform: 'rotate(180deg)'}} alt='' />
            <span>Seite 1 von 84</span>
            <img src={require('../assets/icons/arrow.png')} alt='' />
          </div>
        </div>
      </div>
      </ParallaxProvider>
    </div>
  )
}
