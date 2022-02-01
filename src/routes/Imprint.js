import React, {useEffect} from 'react'
import AOS from 'aos'
// Components 
import PageTransition from '../components/PageTransition';
// CSS
import '../assets/css/imprint.css'

export default function Imprint() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
    document.documentElement.scrollTop = 0;
  }, [])
  return (
    <div className='imprint_page'>
      <PageTransition />
      <div className='container'>
        <div className='page_title'>Impressum</div>
        <div className='content'>
          <span>Mag. Christof Doboczky <br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br /> nonumy eirmod tempor invidunt ut labore et dolore magna <br /> aliquyam erat, sed diam voluptua. At vero eos et accusam et justo <br /> duo dolores et ea rebum. Stet clita kasd gubergren, no sea <br /> E-Mail: <a href='mailto:office@bildzeitschrift.at'>office@bildzeitschrift.at</a></span>
        </div>
      </div>
    </div>
  )
}
