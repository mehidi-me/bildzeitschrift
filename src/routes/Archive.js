import React, { useState, useEffect, useRef } from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom';
// Components 
import PageTransition from '../components/PageTransition';
// CSS
import '../assets/css/archive.css'
import '../assets/css/form.css'
// Icons
import CloseIcon from '../assets/icons/arrow.png'
import ArrowIcon from '../assets/icons/arrow.svg'
window.jQuery = window.$ = $;
require("jquery-nice-select");

export default function Archive() {
  const selectRef = useRef()
  const [filtersShow, setFiltersShow ] = useState(false);
  
  useEffect(() => {
    document.querySelectorAll('.filters .drop_btn').forEach(function(el) {
      el.addEventListener('click', function() {
        this.classList.toggle('active')
        this.nextElementSibling.classList.toggle('show')
      })
    })


    $(selectRef.current).niceSelect();

    document.documentElement.scrollTop = 0;
  }, [])  
  
  if(window.matchMedia('(max-width: 400px)').matches){
    filtersShow?
      document.body.style.overflow = 'hidden'
    :
      document.body.style.overflow = 'auto'
  }

  return (
    <>
    
    <PageTransition /><div className='archive_page'>
      <div className='container'>
        <button className='btn_primary w-100 filters_toggle_btn' onClick={() => {setFiltersShow(true)}}>Filters</button>
      </div>
      <div className='container'>
        <div className={filtersShow? 'left show' : 'left'}>
          <div className='filters'>
            <div className='close_btn' onClick={() => {setFiltersShow(false)}}><img src={CloseIcon} /></div>
            <form className='default'>
              <div className='inputs'>
                <div className='input_container'>
                  <input type='text' placeholder='Suchbegriff eingeben ...' />
                </div>
                <div className='input_container'>
                  <div className='filters_container'>
                    <div className='filter'>
                      <div className='select'>
                        <div className='btn drop_btn'>Titel <span><span className='notify'>02</span><img src={ArrowIcon} /></span></div>
                        <div className='options'>
                          <div className='input'>
                            <input type='text' placeholder='Persönlichkeiten suchen ...' />
                          </div>
                          <div className='items'>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                            <button>Audrey Hepburn</button>
                            <button>Marlon Brando</button>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                          </div>
                        </div>
                      </div>
                      <span className='line'></span>
                      <div className='sub_select'>
                        <div className='btn drop_btn'>Ausgabe <img src={ArrowIcon} /></div>
                        <div className='options'>
                          <div className='input'>
                            <input type='text' placeholder='Persönlichkeiten suchen ...' />
                          </div>
                          <div className='items'>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                            <button>Audrey Hepburn</button>
                            <button>Marlon Brando</button>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='filter'>
                      <div className='select'>
                        <div className='btn drop_btn'>Thema <span><span className='notify'>02</span><img src={ArrowIcon} /></span></div>
                        <div className='options'>
                          <div className='input'>
                            <input type='text' placeholder='Persönlichkeiten suchen ...' />
                          </div>
                          <div className='items'>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                            <button>Audrey Hepburn</button>
                            <button>Marlon Brando</button>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='filter'>
                      <div className='select'>
                        <div className='btn drop_btn'>Jahr <span><span className='notify'>02</span> <img src={ArrowIcon} /></span></div>
                        <div className='options'>
                          <div className='input'>
                            <input type='text' placeholder='Persönlichkeiten suchen ...' />
                          </div>
                          <div className='items'>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                            <button>Audrey Hepburn</button>
                            <button>Marlon Brando</button>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                          </div>
                        </div>
                      </div>
                      <span className='line'></span>
                      <div className='sub_select'>
                        <div className='btn drop_btn'>Monat  <img src={ArrowIcon} /></div>
                        <div className='options'>
                          <div className='input'>
                            <input type='text' placeholder='Persönlichkeiten suchen ...' />
                          </div>
                          <div className='items'>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                            <button>Audrey Hepburn</button>
                            <button>Marlon Brando</button>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                          </div>
                        </div>
                      </div>
                      <span className='line sublines'></span>
                      <div className='sub_select'>
                        <div className='btn drop_btn'>Woche  <img src={ArrowIcon} /></div>
                        <div className='options'>
                          <div className='input'>
                            <input type='text' placeholder='Persönlichkeiten suchen ...' />
                          </div>
                          <div className='items'>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                            <button>Audrey Hepburn</button>
                            <button>Marlon Brando</button>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='filter'>
                      <div className='select'>
                        <div className='btn drop_btn'>Motiv <span><span className='notify'>02</span> <img src={ArrowIcon} /></span></div>
                        <div className='options'>
                          <div className='input'>
                            <input type='text' placeholder='Persönlichkeiten suchen ...' />
                          </div>
                          <div className='items'>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                            <button>Audrey Hepburn</button>
                            <button>Marlon Brando</button>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className='filter'>
                      <div className='select'>
                        <div className='btn drop_btn'>Bild <span><span className='notify'>02</span> <img src={ArrowIcon} /></span></div>
                        <div className='options'>
                          <div className='input'>
                            <input type='text' placeholder='Persönlichkeiten suchen ...' />
                          </div>
                          <div className='items'>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                            <button>Audrey Hepburn</button>
                            <button>Marlon Brando</button>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className='filter'>
                      <div className='select'>
                        <div className='btn drop_btn'>Ort <span><span className='notify'>02</span> <img src={ArrowIcon} /></span></div>
                        <div className='options'>
                          <div className='input'>
                            <input type='text' placeholder='Persönlichkeiten suchen ...' />
                          </div>
                          <div className='items'>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                            <button>Audrey Hepburn</button>
                            <button>Marlon Brando</button>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className='filter'>
                      <div className='select'>
                        <div className='btn drop_btn'>Werbung <span><span className='notify'>02</span> <img src={ArrowIcon} /></span></div>
                        <div className='options'>
                          <div className='input'>
                            <input type='text' placeholder='Persönlichkeiten suchen ...' />
                          </div>
                          <div className='items'>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                            <button>Audrey Hepburn</button>
                            <button>Marlon Brando</button>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className='filter'>
                      <div className='select'>
                        <div className='btn drop_btn'>Persönlichkeiten <span><span className='notify'>02</span> <img src={ArrowIcon} /></span></div>
                        <div className='options'>
                          <div className='input'>
                            <input type='text' placeholder='Persönlichkeiten suchen ...' />
                          </div>
                          <div className='items'>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                            <button>Audrey Hepburn</button>
                            <button>Marlon Brando</button>
                            <button>Marilyn Monroe</button>
                            <button>Roger Moore</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='actions'>
                <button className='btn_primary bg w-100 an filters_show_btn' style={{marginBottom: '20px'}}>Auswahl anzeigen</button>
                <button className='btn_primary w-100 an' style={{background: '#2B2A2A', color: 'white', cursor: 'pointer'}}>Filter zurücksetzen</button>
              </div>
            </form>
          </div>
        </div>
        <div className='right'>
          <div className='header'>
            <span>1.698 Ergebnisse</span>
            <form>
              <select ref={selectRef}>
                <option value="15">15 Ergebnisse pro Seite</option>
                <option value="25">25 Ergebnisse pro Seite</option>
                <option value="50">50 Ergebnisse pro Seite</option>
                <option value="100">100 Ergebnisse pro Seite</option>
              </select>
            </form>
          </div>
          <div className='items_container'>
            <Link to='/product' className='item'>
              <img src={require('../assets/images/thumbnail.png')} alt='' />
              <div className='title'>Die Woche</div>
              <span>09/1925 | Ausgabe 37</span>
            </Link>
            <Link to='/product' className='item'>
              <img src={require('../assets/images/thumbnail.png')} alt='' />
              <div className='title'>Die Woche</div>
              <span>09/1925 | Ausgabe 37</span>
            </Link>
            <Link to='/product' className='item'>
              <img src={require('../assets/images/thumbnail.png')} alt='' />
              <div className='title'>Die Woche</div>
              <span>09/1925 | Ausgabe 37</span>
            </Link>
            <Link to='/product' className='item'>
              <img src={require('../assets/images/thumbnail.png')} alt='' />
              <div className='title'>Die Woche</div>
              <span>09/1925 | Ausgabe 37</span>
            </Link>
            <Link to='/product' className='item'>
              <img src={require('../assets/images/thumbnail.png')} alt='' />
              <div className='title'>Die Woche</div>
              <span>09/1925 | Ausgabe 37</span>
            </Link>
            <Link to='/product' className='item'>
              <img src={require('../assets/images/thumbnail.png')} alt='' />
              <div className='title'>Die Woche</div>
              <span>09/1925 | Ausgabe 37</span>
            </Link>
            <Link to='/product' className='item'>
              <img src={require('../assets/images/thumbnail.png')} alt='' />
              <div className='title'>Die Woche</div>
              <span>09/1925 | Ausgabe 37</span>
            </Link>
            <Link to='/product' className='item'>
              <img src={require('../assets/images/thumbnail.png')} alt='' />
              <div className='title'>Die Woche</div>
              <span>09/1925 | Ausgabe 37</span>
            </Link>
            <Link to='/product' className='item'>
              <img src={require('../assets/images/thumbnail.png')} alt='' />
              <div className='title'>Die Woche</div>
              <span>09/1925 | Ausgabe 37</span>
            </Link>
            <Link to='/product' className='item'>
              <img src={require('../assets/images/thumbnail.png')} alt='' />
              <div className='title'>Die Woche</div>
              <span>09/1925 | Ausgabe 37</span>
            </Link>
            <Link to='/product' className='item'>
              <img src={require('../assets/images/thumbnail.png')} alt='' />
              <div className='title'>Die Woche</div>
              <span>09/1925 | Ausgabe 37</span>
            </Link>
            <Link to='/product' className='item'>
              <img src={require('../assets/images/thumbnail.png')} alt='' />
              <div className='title'>Die Woche</div>
              <span>09/1925 | Ausgabe 37</span>
            </Link>
            <Link to='/product' className='item'>
              <img src={require('../assets/images/thumbnail.png')} alt='' />
              <div className='title'>Die Woche</div>
              <span>09/1925 | Ausgabe 37</span>
            </Link>
            <Link to='/product' className='item'>
              <img src={require('../assets/images/thumbnail.png')} alt='' />
              <div className='title'>Die Woche</div>
              <span>09/1925 | Ausgabe 37</span>
            </Link>
            <Link to='/product' className='item'>
              <img src={require('../assets/images/thumbnail.png')} alt='' />
              <div className='title'>Die Woche</div>
              <span>09/1925 | Ausgabe 37</span>
            </Link>
            <Link to='/product' className='item'>
              <img src={require('../assets/images/thumbnail.png')} alt='' />
              <div className='title'>Die Woche</div>
              <span>09/1925 | Ausgabe 37</span>
            </Link>
          </div>
          <div className='pagination'>
            <img src={require('../assets/icons/arrow.png')} style={{transform: 'rotate(180deg)'}} alt='' />
            <span>Seite 1 von 84</span>
            <img src={require('../assets/icons/arrow.png')} alt='' />
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}
