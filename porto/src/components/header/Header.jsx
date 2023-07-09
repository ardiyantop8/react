import React from 'react'
import './headers.css'
import CTA from './CTA'
import ME from '../../assets/img/cover1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Ardiyanto Putra</h1>
          <h5 className='text-light'>Frontend WEB Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    </>
  )
}

export default Header