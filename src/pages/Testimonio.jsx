import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'


// importacion hojas de estilos
import '../css/testimonio.css'
import 'swiper/css'
import img from '../assets/img_002.svg'

// importacion de modulos swiper
import { Autoplay } from 'swiper'


const Testimonio = () => {
  return (
    <>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      modules={[Autoplay]}
      >
        <SwiperSlide className='cardTestimonio'>
          <div className="infoTestimonio">
            <div className="testimonioImg">
              <img src="https://res.cloudinary.com/deo9hwbhx/image/upload/c_fill,g_face,h_600,w_600,x_0,y_0/v1668256456/apoyado12-scaled_dunyjv.webp" alt="" />
            </div>
            <div className="testimonioInfo">
              <div className="reborde">
                <div className="titleTestimonio">
                  <i className='bx bxs-quote-alt-left'></i>
                  <p>Lorem ipsum dolor sit amet</p>
                  <i className='bx bxs-quote-alt-right' ></i>
                </div>
                <p className='pSpacing'>Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s</p>
                <div className="testimonioUser">
                  <h3>Juan Manuel Urrutia</h3>
                  <p>Industrial Design</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='cardTestimonio'>
          <div className="infoTestimonio">
            <div className="testimonioImg">
              <img src="https://res.cloudinary.com/deo9hwbhx/image/upload/v1668256399/pexels-photo-2272853_eilx10.jpg" alt="" />
            </div>
            <div className="testimonioInfo">
              <div className="reborde">
                <div className="titleTestimonio">
                  <i className='bx bxs-quote-alt-left'></i>
                  <p>Lorem ipsum dolor sit amet</p>
                  <i className='bx bxs-quote-alt-right' ></i>
                </div>
                <p className='pSpacing'>Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s</p>
                <div className="testimonioUser">
                  <h3>Elizabeth Jimenez</h3>
                  <p>Ingeniera Mecanica</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Testimonio