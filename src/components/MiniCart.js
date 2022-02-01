import React from 'react'
import { Link } from 'react-router-dom'
// CSS
import '../assets/css/mini-cart.css'

export default function MiniCart(props) {
  return (
    <div className={props.show? 'mini_cart show' : 'mini_cart'}>
      <div className='header'>
        <div className='title'>Dein Warenkorb</div>
        <div className='close_btn' onClick={() => {window.miniCartShow = false}}><img src={require('../assets/icons/cross.png')} /></div>
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
        <Link to='/checkout' className='btn_primary bg icon'>Zur Kasse <img src={require('../assets/icons/arrow.png')} /></Link>
      </div>
    </div>
  )
}
