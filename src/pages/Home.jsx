import React from 'react'

import '../css/home.css'

// importacion de componentes
import { Carrousel } from '../components/Carrousel.jsx'

const Home = () => {
  return (
    <React.Fragment>
        <div className="homeInfo">
            <h3>Bienvenid@s a</h3>
            <h2>ENERMOTORS</h2>
            <div className="homeParrafo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio saepe modi tempore, harum maiores ullam dolor iure, ratione dolores, rerum sapiente! Quam fugiat nesciunt placeat sequi in eius unde dolorum.
            </div>
            <a href="#">Contactar</a>
        </div>
        <div className="homeCarrusel">
            <Carrousel />
        </div>
    </React.Fragment>
  )
}

export default Home