import React, {useState} from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

import '../css/navToggle.css'

const NavToggle = () => {
  const [nav, setNav] = useState('-100px')

  const handlerScroll = () => {
      window.scrollY >= 500 ? setNav('0px') : setNav('-100px')
  }


  window.addEventListener('scroll', handlerScroll)
  return (
    <>
      <div className="NavToggle" style={{top: nav}}>
        <div className="links">
          <a onClick={() => {
            scroll.scrollToTop({
              duration: 500,
              smooth: true,
              offset: 50
            })
          }}>Inicio</a>
          <Link to="about" smooth={true} offset={50} duration={500}>Nosotros</Link>
          <Link to="experience" smooth={true} offset={50} duration={500}>Experiencia</Link>
          <Link to="service" smooth={true} offset={50} duration={500}>Servicios</Link>
          <Link to="contact" smooth={true} offset={50} duration={500}>Contacto</Link>
        </div>
      </div>
    </>
  )
}

export default NavToggle