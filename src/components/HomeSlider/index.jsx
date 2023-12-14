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
