import React from 'react'
import '../css/cardPerson.css'


const CardPerson = () => {
  return (
    <div className="cardPerson">
        <div className="personImg">
            <img src="https://res.cloudinary.com/deo9hwbhx/image/upload/v1667695717/hands-autumn-group-healthy-happy_fykgs0.jpg" alt="person-image" />
        </div>
        <div className="personInfo">
            <h2>Alejandro Cortez</h2>
            <div className="infoParrafo">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and</p>
            </div>
            <div className="personSocial">
                <a href="#"><i className='bx bxl-facebook'></i></a>
                <a href="#"><i className='bx bxl-instagram' ></i></a>
                <a href="#"><i className='bx bxl-whatsapp' ></i></a>
            </div>
        </div>
    </div>
  )
}

export default CardPerson