import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'


// importacion hojas de estilos
import '../css/service.css'
import 'swiper/css'

// importacion de modulos swiper
import { Autoplay } from 'swiper'

const Services = () => {
  const [slider, setSlider] = useState(3)
  window.addEventListener('resize', () => {
    if (screen.width <= 1490) {
      setSlider(1)
    }else {
      setSlider(3)
    }
  })
  return (
    <>
      <Swiper
      spaceBetween={50}
      slidesPerView={slider}
      centeredSlides={true}
      loop={true}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      modules={[Autoplay]}
      >
        <SwiperSlide className='cardSlider'>
          <div className="contentServices">
            <img src="https://res.cloudinary.com/deo9hwbhx/image/upload/v1666544279/iStock-1214889094_bafhv7.jpg" alt="" />
            <div className="serviceInfo">
              <h2>Title Here1</h2>
              <p>is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='cardSlider'>
          <div className="contentServices">
            <img src="https://res.cloudinary.com/deo9hwbhx/image/upload/v1666544279/iStock-1135169078_riii24.jpg" alt="" />
            <div className="serviceInfo">
              <h2>Title Here2</h2>
              <p>is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='cardSlider'>
          <div className="contentServices">
            <img src="https://res.cloudinary.com/deo9hwbhx/image/upload/v1666544279/iStock-119491874_aracrg.jpg" alt="" />
            <div className="serviceInfo">
              <h2>Title Here3</h2>
              <p>is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Services