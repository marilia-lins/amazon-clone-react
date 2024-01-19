import fetchProducts from "../../api/fetchProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from 'react'
import { Navigation } from "swiper/modules";
import style from './PhoneSlider.module.sass'
import { Cards } from "../Cards";

export const PhoneSlider = () => {

    const [phones, setPhones] = useState([])

    useEffect(() => {
        fetchProducts('phones').then((response) => {
            setPhones(response)
        })
    }, [])

  return (
    <div className={style.phones}>
        <span>Ofertas imperdiveis em Celulares</span>
        <Swiper
            navigation={true}
            slidesPerView={5}
            spaceBetween={10}
            modules={[Navigation]}
            breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                }
              }}
        >
                {phones.map((phone) => (
                    <SwiperSlide key={phone.id}>
                        <Cards key={phone.id} data={phone}/>
                    </SwiperSlide>
                ))}
        </Swiper>
    </div>
  )
}