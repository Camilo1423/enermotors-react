import React from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'


import Logo from '../assets/logo_002.svg'
import '../css/navbar.css'

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <img src={Logo} alt="Logo-Enermotors" />
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
    </React.Fragment>
  )
}

export default Navbar