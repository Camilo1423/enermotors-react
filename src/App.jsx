import React from 'react'

// importacion de componentes
import Navbar from './components/Navbar.jsx'
import NavToggle from './components/NavToggle.jsx'
import ScrollTop from './components/ScrollTop.jsx'
import { Home, About, OurTeam, Works, Services, Testimonio, Contact, Footer } from './pages/Pages.jsx'


// importacion de hojas de estilo
import './app.css'

function App() {

  return (
    <>
      <Navbar />
      <NavToggle />
      <ScrollTop />
      <div className="home" id='#home'>
        <Home />
      </div>
      <div className="about" id='#about'>
        <About />
      </div>
      <div className="works" id='#works'>
        <Works />
      </div>
      <div className="experience" id='#experience'>
        <OurTeam />
      </div>
      <div className="service" id='#service'>
        <h2 className='titleService'>Nuestros Servicios</h2>
        <div className="sliderService">
          <Services />
        </div>
      </div>
      <div className="testimonios" id="testimonios">
        <h2 className='titleTestimonios'>Testimonios</h2>
        <div className="contentTestimonio">
          <Testimonio />
        </div>
      </div>
      <div className="contact" id="contact">
        <h2 className='titleContact'>Contacto</h2>
        <Contact/>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}

export default App
