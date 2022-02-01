import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import luxy from 'luxy.js'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
// Components 
import PageTransition from '../components/PageTransition';
// CSS
import '../assets/css/about.css'

export default function About() {
  const [mediaQuery, setMediaQuery] = useState(window.matchMedia("(max-width: 900px)").matches);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
    
    // if(window.matchMedia("(min-width: 1200px)").matches){
    //   luxy.init({
    //     wrapperSpeed: 0.04
    //   });
    // }

    document.documentElement.scrollTop = 0;
  }, [])
  return (
    <div className='about_page'>
      <PageTransition />
      <ParallaxProvider>
      <div className='container'>
        <div className='page_title'>Faszination <span>Zeitschrift</span></div>

        <div className='content'>
          <section>
            <div className='left'>
              <p>SCHÖNHEIT, STIL und DESIGN faszinierten mich schon immer.Also begann ich zu sammeln. Zeitschriften. <br /> Warum Zeitschriften? Schöne Frauen, Tiere, Autos oder Kunstwerke kann man schwer in Massen besitzen und bestaunen. Außer in Zeitschriften. Da offenbart sich die Schönheit in den Titelbildern und auch oft in den Werbungen. Sehr oft sind das wirkliche Kunstwerke. Gleichzeitig so alltäglich und selbstverständlich – so banal, dass der besondere Wert von Zeitschriften vollkommen übersehen wurde. Dazu kommt noch eine zweite – genauso übersehene und gleichzeitig verborgene – Tatsache. Wir Menschen denken in Bildern. Sie sind die stärksten Eindrücke, die auf uns wirken können. Wir erleben Gefühle und besondere Momente in Bildern. Somit haben uns die Bilder der Zeitschriften seit unserer frühesten Kindheit geprägt. Diese Prägung teilen wir mit den Menschen unserer Generation – sie werden zu unserer gemeinsamen Vergangenheit und damit sind sie Teil unserer Identität. <br /> Das erklärt die Freude und Sentimentalität, wenn wir Bilder aus unserer Vergangenheit zufällig sehen. Besonders passiert das beim Blättern in alten Zeitschriften. Denn die Mischung aus altbekannten Stars, Themen und Produkten wirkt absolut energetisierend und emotional auf uns.</p>
              <img className='section_line_1 section_line' src={require('../assets/images/aboutpage-line-1.png')} alt='section_line_1' />
            </div>
            <div className='right'>
              <img className='section_line_2 section_line' src={require('../assets/images/aboutpage-line-2.png')} />
              
              {
                mediaQuery?
                <div className='image'>
                <img src={require('../assets/images/about-image-1.png')} />
                </div>
                :
                <Parallax className="image" y={[-0, -10]} tagOuter="figure">
                  <img src={require('../assets/images/about-image-1.png')} />
                </Parallax>
              }
            </div>
          </section>

          <section>
            <div className='left'>
              {
                mediaQuery?
                <div className='image'>
                <img src={require('../assets/images/about-image-2.png')} />
                <img src={require('../assets/images/about-image-3.png')} />
                </div>
                :
                <Parallax y={[10, -10]} tagOuter="figure">
                  <div className='image' style={{marginTop: '100px'}}>
                  <img src={require('../assets/images/about-image-2.png')} />
                  <img src={require('../assets/images/about-image-3.png')} />
                  </div>
                </Parallax>
              }
            </div>
            <div className='right'>
              <p>Als Teenager kaufte ich meine ersten Zeitschriften auf Flohmärkten und Antiquariaten.  Daraus ist im Laufe der Jahrzehnte eine stattliche Sammlung geworden. Diese Faszination möchte ich gerne teilen. Deswegen stelle ich die private Sammlung bildZEITschrift der Allgemeinheit zur Verfügung. Mit dem Wunsch, dass meine Freude und Faszination für die Bilder der Vergangenheit geteilt werden und Menschen glücklicher machen. Diese Freude kann man auch schenken – in Form einer Geburtstagszeitschrift oder aber zu Themengebieten, welche Menschen interessieren.</p>
              <img className='section_line_3 section_line' src={require('../assets/images/aboutpage-line-3.png')} />
            </div>
          </section>

          <section>
            <div className='left'>
              <p>Die Erlöse aus dem Verkauf dienen rein dazu, die Sammlung, deren Digitalisierung und Verbreitung im Internet sowie deren laufenden Betrieb zu finanzieren. Rein dafür wurde eine wunderbare, alte Immobilie angemietet – der FREIRAUM in Klagenfurt am Wörthersee. Diese alte Tischlerei aus den 50er Jahren hat genau den richtigen Charakter, um die Nostalgie und Schönheit der 2D-Schätze zu beherbergen.</p>
              <img className='section_line_4 section_line' src={require('../assets/images/aboutpage-line-4.png')} />
            </div>
            <div className='right'>
              {
                mediaQuery?
                <div className='image'>
                  <img src={require('../assets/images/about-image-4.png')} />
                  <img src={require('../assets/images/about-image-5.png')} />
                </div>
                :
                <Parallax y={[10, -10]} tagOuter="figure">
                  <div className='image'>
                    <img src={require('../assets/images/about-image-4.png')} />
                    <img src={require('../assets/images/about-image-5.png')} />
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
