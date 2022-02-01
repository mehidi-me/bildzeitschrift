import React, { useEffect } from 'react'
import AOS from 'aos'
// Components 
import PageTransition from '../components/PageTransition';
//  CSS
import '../assets/css/contact.css'

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
    document.documentElement.scrollTop = 0;
  }, [])
  return (
    <div className='contact_page'>
      <PageTransition />
      <div className='container'>
        <div className='page_title'>Du hast eine <span>Frage</span> oder <br /> möchtest einfach <span>hallo</span> sagen?</div>
        <div className='content'>
          <p>Schreib uns einfach eine Nachricht!</p>
          <p>Wir freuen uns auch über das Angebot größerer Bestände, um die Sammlung umfangreicher machen zu können. Ob im Kauf oder in der Zusendung von digitalen Bildern.</p>

          <form className='contact_form default'>
            <div className='inputs'>
              <div className='input_group'>
                <div className='input_container'>
                  <label htmlFor='fname'>Vorname*</label>
                  <input type='text' id='fname' placeholder='Dein Vorname' required />
                </div>
                <div className='input_container'>
                  <label htmlFor='lname'>Nachname*</label>
                  <input type='text' id='lname' placeholder='Dein Nachname' required />
                </div>
              </div>
              <div className='input_group'>
                <div className='input_container'>
                  <label htmlFor='email'>E-Mail*</label>
                  <input type='email' id='email' placeholder='Deine E-Mail-Adresse' required />
                </div>
                <div className='input_container'>
                  <label htmlFor='phone'>Telefonnummer</label>
                  <input type='tel' id='phone' placeholder='Deine Telefonnummer' />
                </div>
              </div>
              <div className='input_container'>
                <label htmlFor='message'>Nachricht*</label>
                <textarea id='message' placeholder='Deine Nachricht' required></textarea>
              </div>
            </div>
            <div className='actions'>
              <button type='submit' className='btn_primary bg icon'>Senden <img src={require('../assets/icons/arrow.png')} /></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
