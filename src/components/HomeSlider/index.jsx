import fetchProducts from "../../api/fetchProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from 'react'
import { Navigation } from "swiper/modules";
import style from './HomeSlider.module.sass'
import { Cards } from "../Cards";

export const HomeSlider = () => {

    const [casas, setCasas] = useState([])

    useEffect(() => {
        fetchProducts('casa').then((response) => {
            setCasas(response)
        })
    }, [])

  return (
    <div className={style.homes}>
        <span>Itens diversos para sua casa</span>
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
                {casas.map((casa) => (
                    <SwiperSlide key={casa.id}>
                        <Cards key={casa.id} data={casa}/>
                    </SwiperSlide>
                ))}
        </Swiper>
    </div>
  )
}
