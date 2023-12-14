import React from 'react'
import style from './Carousel.module.sass'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation, Autoplay} from 'swiper/modules'
import First from "../../images/carousel_1.jpg"
import Second from "../../images/carousel_2.jpg"
import Third from "../../images/carousel_vid.mp4"
import Fourth from "../../images/carousel_4.jpg"
import Fifth from "../../images/carousel_5.jpg"

export const Carousel = () => {
  return (
    <div className={style.base}>
       <Swiper
            loop={true}
            spaceBetween={0}
            className={style.swiper}
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
                delay: 4200
            }}
       >
            <SwiperSlide>
                <img src={First} alt="first img" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Second} alt="second img" />
            </SwiperSlide>
            <SwiperSlide>
                <video controls muted="muted">
                    <source src={Third} type="video/mp4" />
                </video>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Fourth} alt="fourth img" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Fifth} alt="fifth img" />
            </SwiperSlide>

       </Swiper>

       <div className={style.gradient}>

       </div>

    </div>
  )
}
