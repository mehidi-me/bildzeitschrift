import React, { useEffect, useState } from 'react'
import $, {jQuery} from 'jquery'
import { Link, NavLink } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import 'jquery.marquee'
import 'jquery.easing'
// Components
import PageTransition from '../components/PageTransition'
// CSS
import '../assets/css/home.css'
import '../assets/owl carousel/owl.carousel.min.css'
import '../assets/owl carousel/owl.theme.default.min.css'
// Icons
import ArrowIcon from '../assets/icons/arrow.png'
import StarIcon from '../assets/icons/star.png'
// Images
import Decade1 from '../assets/images/decades/1.svg'
import Decade2 from '../assets/images/decades/2.svg'
import Decade3 from '../assets/images/decades/3.svg'
import Decade4 from '../assets/images/decades/4.svg'
import Decade5 from '../assets/images/decades/5.svg'
import Decade6 from '../assets/images/decades/6.svg'
import Decade7 from '../assets/images/decades/7.svg'
import Decade8 from '../assets/images/decades/8.svg'
import Decade9 from '../assets/images/decades/9.svg'
import FeaturedCollection from '../assets/images/featured-collection.png'

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [mediaQuery, setMediaQuery] = useState(window.matchMedia("(max-width: 900px)").matches);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    $(function(){
			$('#marquee').marquee({
				allowCss3Support:true,
				css3easing:'linear',
        startVisible: true,
				easing:'linear',
				duration: 14000,
				duplicated:true,
				startVisible:true,
        gap: 0
			});   
		});

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
    <PageTransition />
    <div className='home_page'>
      <ParallaxProvider>
      <div className='container'>
        <header>
          <h1 className='hero_text'><span>Entdecke</span> Zeitschriften<br />aus den letzten <span>100 Jahren.</span></h1>
          <div className='wrapper'>
            <div className='details'>
              <p>Von Politik über Schönheit, Erotik, Lifestyle, Kunst und Design findest du hier die digitale Magazinsammlung dem 20. Jahrhundert & damit einen noch nie dagewesenen Blick in die Vergangenheit.</p>
              <div className='actions'>
                <Link to='/archiv' className='btn_primary icon bg'>Direkt zum Archiv <img src={ArrowIcon} /></Link>
                <Link to='/about' className='btn_primary'>Über uns</Link>
              </div>
              <div className='section_line section_line_1'>
                <img src={require("../assets/images/homepage-line-1.png")} alt="section_line" />
              </div>
            </div>
  
            <div className='images'>
              <div className='images_container'>
                <div className='card'>
                  <img src={require('../assets/images/hero-image-3.png')} alt="image" />
                </div>
                <div className='card'>
                  <img src={require('../assets/images/hero-image-2.png')} alt="image" />
                </div>
                <div className='card'>
                  <img src={require('../assets/images/hero-image-1.png')} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      
      <div id='marquee' className='big_text overflow'>Heute vor 57 Jahren <img src={StarIcon} alt="" /> Heute vor 100 Jahren <img src={StarIcon} alt="" /></div>


      <div className='container'>
        <div className='section_line section_line_2'>
          <img src={require("../assets/images/homepage-line-2.png")} alt="section_line" />
        </div>

        <section className='featured_magazine'>
          <div className='section_line section_line_3'>
            <img src={require("../assets/images/homepage-line-3.png")} alt="section_line" />
          </div>
          <div className='wrapper'>
            <div className='image'>
              <img src={require('../assets/images/featured-magazine.png')} alt="image" />
              <div className='bg' style={{width: offsetY / 3, height: offsetY / 3}}>
                <div style={{width: offsetY / 3.25, height: offsetY / 3.25}}></div>
              </div>
            </div>
            <div className='details'>
              <div className='name'>Brigitte</div>
              <div className='date'>13.6.1964</div>
              <div className='subheading'>
                <p>PS: auch ein super Geburtstagsgeschenk!</p>
              </div>
              <div className='actions'>
                <Link to='' className='btn_primary bg icon'>Zum Magazin <img src={require("../assets/icons/arrow.png")} /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className='topics'>
          <div className='section_title'>themen<span>welten</span></div>
          <div className='wrapper'>
            <div className='section_line section_line_4'>
              <img src={require("../assets/images/homepage-line-4.png")} alt="section_line" />
            </div>
            <div className='topics_container'>
              <div className='topic' style={{willChange: 'transform', marginLeft: `-${offsetY / 27}px`, transform: `rotateZ(-${offsetY/ 200}deg)`}}>
                <img src={require("../assets/images/topic-1.jpg")} alt="image" />
                <div className='name'>Kunst<br />&<br />Kultur</div>
              </div>
              <div className='topic' style={{willChange: 'transform', marginLeft: `${offsetY / 30}px`, transform: `rotateZ(${offsetY/ 200}deg) `}}>
                <img src={require("../assets/images/topic-2.jpg")} alt="image" />
                <div className='name'>Erotik</div>
              </div>
              <div className='topic' style={{willChange: 'transform', marginLeft: `-${offsetY / 30}px`, transform: `rotateZ(-${offsetY/ 200}deg)`}}>
                <img src={require("../assets/images/topic-3.jpg")} alt="image" />
                <div className='name'>Mode<br />&<br />Lifestyle</div>
              </div>
              <div className='topic' style={{willChange: 'transform', marginLeft: `${offsetY / 30}px`, transform: `rotateZ(${offsetY/ 200}deg)`}}>
                <img src={require("../assets/images/topic-4.jpg")} alt="image" />
                <div className='name'>Technik<br />&<br />Umwelt</div>
                <div className='section_line section_line_5'>
                  <img src={require("../assets/images/homepage-line-5.png")} alt="section_line" />
                </div>
              </div>
              <div className='topic' style={{willChange: 'transform', marginLeft: `-${offsetY / 30}px`, transform: `rotateZ(-${offsetY/ 200}deg)`}}>
                <img src={require("../assets/images/topic-5.jpg")} alt="image" />
                <div className='name'>Politik<br />&<br />Gesellschaft</div>
                <div className='section_line section_line_6'>
                  <img src={require("../assets/images/homepage-line-6.png")} alt="section_line" />
                </div>
              </div>
              <div className='topic' style={{willChange: 'transform', marginLeft: `${offsetY / 30}px`, transform: `rotateZ(${offsetY/ 200}deg)`}}>
                <img src={require("../assets/images/topic-6.jpg")} alt="image" />
                <div className='name'>Promis</div>
              </div>
            </div>
            
            <div className='section_line section_line_7' style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <img src={require("../assets/images/homepage-line-7.png")} alt="section_line" />
            </div>
          </div>
          <div className='actions'>
            <Link to='' className='btn_primary w-100 bg_animate an'>Alle Themen durchstöbern <span className='bg'></span></Link>
          </div>
        </section>

        <section className='text_highlight'>
          <div className='section_line section_line_8'>
            <img src={require("../assets/images/homepage-line-8.png")} alt="section_line" />
          </div>
          <div className='section_title'>Durch die<br /><span>Jahrzehnte</span></div>
        </section>

        <section className='slider'>
          <div className='circle' style={{transfrom: `scale(0.${offsetY})`}}>
            <div className='bg'>
              <OwlCarousel
                className='owl-theme'
                items={1}
                autoPlay={true}
                autoplayHoverPause={true}
                autoplaySpeed={1000}
                dots={false}
                nav={true}
                loop={true}
                navText={['<img src="'+ArrowIcon+'" />', '<img src="'+ArrowIcon+'" />']}
              >
                <div className='item'>
                  <img src={Decade1} />
                </div>
                <div className='item'>
                  <img src={Decade2} />
                </div>
                <div className='item'>
                  <img src={Decade3} />
                </div>
                <div className='item'>
                  <img src={Decade4} />
                </div>
                <div className='item'>
                  <img src={Decade5} />
                </div>
                <div className='item'>
                  <img src={Decade6} />
                </div>
                <div className='item'>
                  <img src={Decade7} />
                </div>
                <div className='item'>
                  <img src={Decade8} />
                </div>
                <div className='item'>
                  <img src={Decade9} />
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className='section_line section_line_9'>
            <img src={require("../assets/images/homepage-line-9.png")} alt="section_line" />
          </div>
        </section>

        <section className='featured_collection'>
          <div className='wrapper'>
            <div className='details'>
              <div className='title'>Eine Sammlung der Vergangenheit für<br />die Zukunft.</div>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <Link to='' className='btn_primary bg icon'>Mehr zur Enstehung <img src={require('../assets/icons/arrow.png')} /></Link>
              <div className='section_line section_line_10'>
                <img src={require("../assets/images/homepage-line-10.png")} alt="section_line" />
              </div>
            </div>
            {
              mediaQuery?
              <div className='image'>
                <img src={require('../assets/images/featured-collection.png')} alt="image" />
              </div>
              :
                <Parallax className="image" y={[-10, 10]} tagOuter="figure">
                  <img src={require('../assets/images/featured-collection.png')} alt="image" />
                </Parallax>
            }
          </div>
        </section>
        
        <section className='blogs'>
          <div className='section_title'><span>BLOG</span></div>
          <div className='wrapper'>
            <div className='card left'>
              {
                mediaQuery?
                <div className='image'>
                  
                <img src='https://via.placeholder.com/360x500.png?text=Placeholder%20image' alt="image" />
                </div>
                :
                <ParallaxProvider>
                  <Parallax className="image" y={[-10, 10]} tagOuter="figure">
                    <img src='https://via.placeholder.com/360x500.png?text=Placeholder%20image' alt="image" />
                  </Parallax>
                </ParallaxProvider>
              }
              <div className='details'>
                <div className='title'>Aussichten</div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
                <div className='actions'>
                  <Link to='' className='btn_primary bg'>Weiterlesen</Link>
                </div>
              </div>
            </div>
            <div className='card right'>
              <div className='details'>
                <div className='title'>Schönheit</div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
                <div className='actions'>
                  <Link to='' className='btn_primary bg'>Weiterlesen</Link>
                </div>
              </div>
              {
                mediaQuery?
                <div className='image'>
                <img src='https://via.placeholder.com/360x500.png?text=Placeholder%20image' alt="image" />
                </div>
                :
                  <Parallax className="image" y={[-10, 10]} tagOuter="figure">
                    <img src='https://via.placeholder.com/360x500.png?text=Placeholder%20image' alt="image" />
                  </Parallax>
              }
            </div>
            
            <div className='card left'>
              {
                mediaQuery?
                <div className='image'>
                <img src='https://via.placeholder.com/360x500.png?text=Placeholder%20image' alt="image" />
                </div>
                : 
                <ParallaxProvider>
                  <Parallax className="image" y={[-10, 10]} tagOuter="figure">
                    <img src='https://via.placeholder.com/360x500.png?text=Placeholder%20image' alt="image" />
                  </Parallax>
                </ParallaxProvider>
              }
              <div className='details'>
                <div className='title'>Impressionen</div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
                <div className='actions'>
                  <Link to='' className='btn_primary bg'>Weiterlesen</Link>
                </div>
              </div>
            </div>
          </div>
          <div className='section_actions'>
            <Link to='' className='btn_primary bg icon'>Entdecke alle Blogposts <img src={require('../assets/icons/arrow.png')} /></Link>
          </div>
        </section>
      </div>
      </ParallaxProvider>
    </div>
    </>
  )
}
