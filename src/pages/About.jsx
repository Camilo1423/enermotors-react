import React from 'react'
import CardPerson from '../components/CardPerson.jsx'

// importacion de componentes


import '../css/about.css'

const About = () => {
  return (
    <React.Fragment>
        <h2 className='aboutTitle'>Sobre Nosotros</h2>
        <div className="aboutParrafo">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and</p>
        </div>
        <div className="aboutPerson">
            <CardPerson />
            <CardPerson />
            <CardPerson />
        </div>
    </React.Fragment>
  )
}

export default About