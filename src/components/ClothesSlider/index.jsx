import fetchProducts from "../../api/fetchProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from 'react'
import { Navigation } from "swiper/modules";
import style from './ClothesSlider.module.sass'
import { Cards } from "../Cards";

export const ClothesSlider = () => {

    const [clothes, setClothes] = useState([])

    useEffect(() => {
        fetchProducts('roupas').then((response) => {
            setClothes(response)
        })
    }, [])

  return (
    <div className={style.clothes}>
        <span>Ofertas em Moda para toda a família</span>
        <Swiper
            navigation={true}
            slidesPerView={4}
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
                {clothes.map((clothe) => (
                    <SwiperSlide key={clothe.id}>
                        <Cards key={clothe.id} data={clothe}/>
                    </SwiperSlide>
                ))}
        </Swiper>
    </div>
  )
}