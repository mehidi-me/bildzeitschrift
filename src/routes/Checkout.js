import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Components 
import PageTransition from '../components/PageTransition';
// CSS
import '../assets/css/checkout.css'

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('')
  return (
    <div className='checkout_page'>
      <PageTransition />
      <div className='container'>
        <div className='checkout_form'>
          <div className='page_title'>Kasse</div>
          <form className='default'>
            <div className='inputs'>
              <div className='input_container'>
                <label htmlFor='email'>Email*</label>
                <input className='w-50' type='email' placeholder='Deine E-Mail-Adresse' />
              </div>
            </div>
            <div className='form_header'>
              <div className='title'>Lieferadresse</div>
            </div>
            <div className='inputs'>
              <div className='input_group'>
                <div className='input_container'>
                  <label htmlFor='first_name'>Vorname*</label>
                  <input type='text' id='first_name' placeholder='Dein Vorname' />
                </div>
                <div className='input_container'>
                  <label htmlFor='last_name'>Nachname*</label>
                  <input type='text' id='last_name' placeholder='Dein Nachname*' />
                </div>
              </div>
              
              <div className='input_group'>
                <div className='input_container'>
                  <label htmlFor='company'>Firma (Optional)</label>
                  <input type='text' id='company' placeholder='Firma' />
                </div>
                <div className='input_container'>
                  <label htmlFor='phone'>Telefonnummer (Optional)</label>
                  <input type='tel' id='phone' placeholder='Dein Telefonnummer' />
                </div>
              </div>
              <div className='input_container'>
                <label htmlFor='address'>Straße & Hausnummer*</label>
                <input type='text' id='address' placeholder='Adresse' />
              </div>
              
              <div className='input_group'>
                <div className='input_container'>
                  <label htmlFor='postal_code'>Postleitzahl*</label>
                  <input type='number' id='postal_code' placeholder='Postleitzahl' />
                </div>
                <div className='input_container'>
                  <label htmlFor='city'>Stadt*</label>
                  <input type='text' id='city' placeholder='Stadt' />
                </div>
              </div>

              <div className='input_container'>
                <label htmlFor='country'>Land*</label>
                <input className='w-50' type='text' id='country' placeholder='Land' />
              </div>

              <div className='input_container checkbox'>
                <input type='checkbox' id='different_billing_address' />
                <label htmlFor='different_billing_address' className='checkbox'></label>
                <label htmlFor='different_billing_address'>Verwende eine andere Rechnungsadresse</label>
              </div>
            </div>

            <div className='form_header'>
              <div className='title'>Versand</div>
            </div>
            <div className='inputs'>
              <div className='input_container radio'>
                <input type='radio' id='shipping_method1' name='shipping_method' />
                <label className='checkbox' htmlFor='shipping_method1'></label>
                <label htmlFor='shipping_method1' className='d_flex'>Österreichische Post (2-3 Werktage) <span style={{whiteSpace: 'nowrap'}}>€ 4,50</span></label>
              </div>
              <div className='input_container radio'>
                <input type='radio' id='shipping_method2' name='shipping_method' />
                <label className='checkbox' htmlFor='shipping_method2'></label>
                <label htmlFor='shipping_method2' className='d_flex'>Österreichische Post (2-3 Werktage) <span style={{whiteSpace: 'nowrap'}}>€ 4,50</span></label>
              </div>
              <div className='input_container radio'>
                <input type='radio' id='shipping_method3' name='shipping_method' />
                <label className='checkbox' htmlFor='shipping_method3'></label>
                <label htmlFor='shipping_method3' className='d_flex'>Österreichische Post (2-3 Werktage) <span style={{whiteSpace: 'nowrap'}}>€ 4,50</span></label>
              </div>
            </div>

            <div className='form_header'>
              <div className='title'>Zahlung</div>
              <p>Alle Transaktionen sind sicher und verschlüsselt.</p>
            </div>
            <div className='inputs payment_inputs'>
              <div className='input_container radio'>
                <div className='wrapper'>
                  <input type='radio' id='payment_method1' name='payment_method' value='credit_card' onChange={() => {setPaymentMethod('credit_card')}} />
                  <label className='checkbox' htmlFor='payment_method1'></label>
                  <label htmlFor='payment_method1' className='d_flex'>Kreditkarte <img src={require('../assets/images/payment_cards.png')} height={25} /></label>
                </div>
                <div className={paymentMethod === 'credit_card'? 'items show' : 'items'}>
                  <div className='input_container'>
                    <input type='text' id='card_number' placeholder='Kartennummer' />
                  </div>
                  <div className='input_container'>
                    <input type='text' id='card_holder' placeholder='Karteninhaber' />
                  </div>
                  <div className='input_group'>
                    <div className='input_container'>
                      <input type='text' id='card_expiry_date' placeholder='MM/YY' />
                    </div>
                    <div className='input_container'>
                      <input type='text' id='card_cvv' placeholder='CVV' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='input_container radio'>
                <input type='radio' id='payment_method2' name='payment_method' value='paypal' onChange={() => {setPaymentMethod('paypal')}} />
                  <label className='checkbox' htmlFor='payment_method2'></label>
                <label htmlFor='payment_method2' className='d_flex'>Kreditkarte <span>€ 4,50</span></label>
                <div className={paymentMethod === 'paypal'? 'items show' : 'items'}>
                  
                </div>
              </div>
              <div className='input_container radio'>
                <input type='radio' id='payment_method3' name='payment_method' value='bank_transfer' onChange={() => {setPaymentMethod('bank_transfer')}} />
                  <label className='checkbox' htmlFor='payment_method3'></label>
                <label htmlFor='payment_method3' className='d_flex'>Kreditkarte <span>€ 4,50</span></label>
                <div className={paymentMethod === 'bank_transfer'? 'items show' : 'items'}>
                  
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className='checkout_info'>
          <div className='items'>
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
            <div className='item'>
              <div className='subtotal'>Zwischensumme <span>€ 31,90</span></div>
              <div className='shipment'>Versandkosten <span>€ 4,50</span></div>
            </div>
            <div className='total'><div className='title'>Gesamt <br /> <span>inkl. 20% Mwst</span></div> <span>€ 36,40</span></div>
            <Link to='/checkout/payment' className='btn_primary bg icon'>Bestellung aufgeben <img src={require('../assets/icons/arrow.png')} /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
