import React, {useEffect} from 'react'
import AOS from 'aos'
// Components 
import PageTransition from '../components/PageTransition';
// CSS
import '../assets/css/order-confirm.css'

export default function OrderConfirm() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
    document.documentElement.scrollTop = 0;
  }, [])
  return (
    <div className='order_confirm_page'>
      <PageTransition />
      <div className='container'>
        <div className='page_title'>Vielen Dank für deine <span>Bestellung!</span></div>
        <div className='content'>
          <span className='order_number'>Deine Bestellnummer lautet #1427</span>

          <section className='order_details'>
            <div className='section_title'>Order Details</div>
          </section>
        </div>
      </div>
    </div>
  )
}
