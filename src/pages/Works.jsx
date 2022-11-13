import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

// importacion hojas de estilo
import '../css/works.css'

// importacion de modulos swiper
import { Autoplay } from 'swiper'

const Works = () => {
  return (
    <div className="worksContent">
        <h2 className='titleWorks'>Nuestros Trabajos</h2>
        <div className="worksSlide">
            <div className="workGold"></div>
            <Swiper
            spaceBetween={100}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            modules={[Autoplay]}
            >
                <SwiperSlide className='cardWorker'>
                    <div className="cardWorks">
                        <div className="imgContainer">
                            <img src="https://res.cloudinary.com/deo9hwbhx/image/upload/v1667695717/hands-autumn-group-healthy-happy_fykgs0.jpg" alt="person-image" />
                        </div>
                        <div className="cardInformation">
                            <div className="infoContent">
                                <h2>Title Here</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta deserunt quae ratione eius, illo excepturi nulla tenetur officiis adipisci dolor dolorum temporibus qui et sapiente laborum non neque eos quis.
                                Eveniet, ullam sed sunt a possimus impedit voluptate odio necessitatibus omnis dolores, vitae consequatur error temporibus dolore! Sapiente sunt, quis laudantium veniam eaque dolorum accusantium necessitatibus nobis cum, labore consectetur.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>                
                <SwiperSlide className='cardWorker'>
                    <div className="cardWorks">
                        <div className="imgContainer">
                            <img src="https://res.cloudinary.com/deo9hwbhx/image/upload/v1667695717/hands-autumn-group-healthy-happy_fykgs0.jpg" alt="person-image" />
                        </div>
                        <div className="cardInformation">
                            <div className="infoContent">
                                <h2>Title Here2</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta deserunt quae ratione eius, illo excepturi nulla tenetur officiis adipisci dolor dolorum temporibus qui et sapiente laborum non neque eos quis.
                                Eveniet, ullam sed sunt a possimus impedit voluptate odio necessitatibus omnis dolores, vitae consequatur error temporibus dolore! Sapiente sunt, quis laudantium veniam eaque dolorum accusantium necessitatibus nobis cum, labore consectetur.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>                
                <SwiperSlide className='cardWorker'>
                    <div className="cardWorks">
                        <div className="imgContainer">
                            <img src="https://res.cloudinary.com/deo9hwbhx/image/upload/v1667695717/hands-autumn-group-healthy-happy_fykgs0.jpg" alt="person-image" />
                        </div>
                        <div className="cardInformation">
                            <div className="infoContent">
                                <h2>Title Here3</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta deserunt quae ratione eius, illo excepturi nulla tenetur officiis adipisci dolor dolorum temporibus qui et sapiente laborum non neque eos quis.
                                Eveniet, ullam sed sunt a possimus impedit voluptate odio necessitatibus omnis dolores, vitae consequatur error temporibus dolore! Sapiente sunt, quis laudantium veniam eaque dolorum accusantium necessitatibus nobis cum, labore consectetur.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>                
            </Swiper>
        </div>
    </div>
  )
}

export default Works