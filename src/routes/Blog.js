import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import luxy from 'luxy.js';
// Components 
import PageTransition from '../components/PageTransition';
// CSS
import '../assets/css/blog.css';

export default function About() {
  const [mediaQuery, setMediaQuery] = useState(window.matchMedia("(max-width: 900px)").matches);
  useEffect(() => {
    
    AOS.init({
      duration: 2000,
    })
    document.documentElement.scrollTop = 0;
  }, [])
  return (
    <div className='blog_page'>
      <PageTransition />
      <ParallaxProvider>
      <div className='container'>
        <div className='page_title'>Title</div>
        <div className='upload_date'>21. Dezember 2021</div>

        <div className='content'>
          <section>
            <div className='left'>
              <p>SCHÖNHEIT, STIL und DESIGN faszinierten mich schon immer. Also begann ich zu sammeln. Zeitschriften. <br /> Warum Zeitschriften? </p>
              <p>Schöne Frauen, Tiere, Autos oder Kunstwerke kann man schwer in Massen besitzen und bestaunen. Außer in Zeitschriften. Da offenbart sich die Schönheit in den Titelbildern und auch oft in den Werbungen. Sehr oft sind das wirkliche Kunstwerke. Gleichzeitig so alltäglich und selbstverständlich - so banal, dass der besondere Wert von Zeitschriften vollkommen übersehen wurde. Dazu kommt noch eine zweite - genauso übersehene und gleichzeitig verborgene - Tatsache. Wir Menschen denken in Bildern. Sie sind die stärksten Eindrücke, die auf uns wirken können. Wir erleben Gefühle und besondere Momente in Bildern. Somit haben uns die Bilder der Zeitschriften seit unserer frühesten Kindheit geprägt. Diese Prägung teilen wir mit den Menschen unserer Generation - sie werden zu unserer gemeinsamen Vergangenheit und damit sind sie Teil unserer Identität.</p>
              <p>Das erklärt die Freude und Sentimentalität, wenn wir Bilder aus unserer Vergangenheit zufällig sehen. Besonders passiert das beim Blättern in alten Zeitschriften. Denn die Mischung aus altbekannten Stars, Themen und Produkten wirkt absolut energetisierend und emotional auf uns.</p>
            </div>
            <div className='right'>
              {
              mediaQuery?
              <div className='image'>
                <img src={require('../assets/images/about-image-1.png')} />
              </div>
              :
              <Parallax  y={[30, -60]} tagOuter="figure">
                <div className='image'>
                  <img src={require('../assets/images/about-image-1.png')} />
                </div>
              </Parallax>
              }
            </div>
          </section>

          <section>
            <div className='left'>
            {
            mediaQuery?
            <div className='image'>
              <img src={require('../assets/images/about-image-1.png')} />
            </div>
            :
            <Parallax  y={[30, -60]} tagOuter="figure">
              <div className='image'>
                <img src={require('../assets/images/about-image-1.png')} />
              </div>
            </Parallax>
            }
            </div>
            <div className='right'>
              <p>SCHÖNHEIT, STIL und DESIGN faszinierten mich schon immer. Also begann ich zu sammeln. Zeitschriften.</p>
              <p>Warum Zeitschriften? Schöne Frauen, Tiere, Autos oder Kunstwerke kann man schwer in Massen besitzen und bestaunen. Außer in Zeitschriften. Da offenbart sich die Schönheit in den Titelbildern und auch oft in den Werbungen. Sehr oft sind das wirkliche Kunstwerke. Gleichzeitig so alltäglich und selbstverständlich - so banal, dass der besondere Wert von Zeitschriften vollkommen übersehen wurde. Dazu kommt noch eine zweite - genauso übersehene und gleichzeitig verborgene - Tatsache. Wir Menschen denken in Bildern. Sie sind die stärksten Eindrücke, die auf uns wirken können. Wir erleben Gefühle und besondere Momente in Bildern. Somit haben uns die Bilder der Zeitschriften seit unserer frühesten Kindheit geprägt. Diese Prägung teilen wir mit den Menschen unserer Generation - sie werden zu unserer gemeinsamen Vergangenheit und damit sind sie Teil unserer Identität.</p>
              <p>Das erklärt die Freude und Sentimentalität, wenn wir Bilder aus unserer Vergangenheit zufällig sehen. Besonders passiert das beim Blättern in alten Zeitschriften. Denn die Mischung aus altbekannten Stars, Themen und Produkten wirkt absolut energetisierend und emotional auf uns.</p>
            </div>
          </section>

          <section>
            <div className='left'>
              <p>SCHÖNHEIT, STIL und DESIGN faszinierten mich schon immer. Also begann ich zu sammeln. Zeitschriften.</p>
              <p>Warum Zeitschriften? Schöne Frauen, Tiere, Autos oder Kunstwerke kann man schwer in Massen besitzen und bestaunen. Außer in Zeitschriften. Da offenbart sich die Schönheit in den Titelbildern und auch oft in den Werbungen. Sehr oft sind das wirkliche Kunstwerke. Gleichzeitig so alltäglich und selbstverständlich - so banal, dass der besondere Wert von Zeitschriften vollkommen übersehen wurde. Dazu kommt noch eine zweite - genauso übersehene und gleichzeitig verborgene - Tatsache. Wir Menschen denken in Bildern. Sie sind die stärksten Eindrücke, die auf uns wirken können. Wir erleben Gefühle und besondere Momente in Bildern. Somit haben uns die Bilder der Zeitschriften seit unserer frühesten Kindheit geprägt. Diese Prägung teilen wir mit den Menschen unserer Generation - sie werden zu unserer gemeinsamen Vergangenheit und damit sind sie Teil unserer Identität.</p>
              <p>Das erklärt die Freude und Sentimentalität, wenn wir Bilder aus unserer Vergangenheit zufällig sehen. Besonders passiert das beim Blättern in alten Zeitschriften. Denn die Mischung aus altbekannten Stars, Themen und Produkten wirkt absolut energetisierend und emotional auf uns.</p>
            </div>
            <div className='right'>
            {
            mediaQuery?
            <div className='image'>
              <img src={require('../assets/images/about-image-1.png')} />
            </div>
            :
            <Parallax  y={[30, -60]} tagOuter="figure">
              <div className='image'>
                <img src={require('../assets/images/about-image-1.png')} />
              </div>
            </Parallax>
            }
            </div>
          </section>
          
        </div>
      </div>
      </ParallaxProvider>
    </div>
  )
}
