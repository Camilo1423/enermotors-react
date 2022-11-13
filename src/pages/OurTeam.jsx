import React from 'react'

// importacion de hojas de estilo
import '../css/ourTeam.css'

import img from '../assets/img_001.svg'

const OurTeam = () => {
  return (
    <>
      <div className="teamInfo">
        <div className="teamGeneralInfo">
          <h2>Experiencia en <br/> producción</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and </p>
        </div>
        <div className="teamSegmentInfo">
          <div className="segmentOne">
            <h3>Lorem Ipsum</h3>
            <p>is simply dummy text of the printing and typesetting industry. </p>
          </div>
          <div className="segmentTwo">
            <h3>Lorem Ipsum</h3>
            <p>is simply dummy text of the printing and typesetting industry. </p>
          </div>
        </div>
      </div>
      <div className="teamImg">
        <img src={img} alt="" />
      </div>
    </>
  )
}

export default OurTeam