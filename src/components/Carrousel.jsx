import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'


// importacion hojas de estilos
import '../css/carrousel.css'
import 'swiper/css'

// importacion de modulos swiper
import { Autoplay } from 'swiper'

const Carrousel = () => {
    return (
    <Swiper
    spaceBetween={10}
    centeredSlides={true}
    loop={true}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    modules={[Autoplay]}
    >
        <SwiperSlide>
            <div className="cardContent">
                <div className="imgContent">
                    <img src="https://res.cloudinary.com/deo9hwbhx/image/upload/v1666544279/iStock-1200951557_pkvhup.jpg" alt="imgDefault" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cardContent">
                <div className="imgContent">
                    <img src="https://res.cloudinary.com/deo9hwbhx/image/upload/v1666544279/iStock-1200951557_pkvhup.jpg" alt="imgDefault" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cardContent">
                <div className="imgContent">
                    <img src="https://res.cloudinary.com/deo9hwbhx/image/upload/v1666544279/iStock-1200951557_pkvhup.jpg" alt="imgDefault" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cardContent">
                <div className="imgContent">
                    <img src="https://res.cloudinary.com/deo9hwbhx/image/upload/v1666544279/iStock-1200951557_pkvhup.jpg" alt="imgDefault" />
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
    )
}

export { Carrousel }