import fetchProducts from "../../api/fetchProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from 'react'
import { Navigation } from "swiper/modules";
import style from './BookSlider.module.sass'
import { Cards } from "../Cards";

export const BookSlider = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetchProducts('libros').then((response) => {
            setBooks(response)
        }) 
    }, [])

  return (
    <div className={style.books}>
        <span>Ofertas em Livros para você</span>
        <Swiper
            navigation={true}
            slidesPerView={5}
            spaceBetween={10}
            modules={[Navigation]}
        >
                {books.map((book) => (
                    <SwiperSlide key={book.id}>
                        <Cards key={book.id} data={book}/>
                    </SwiperSlide>
                ))}
        </Swiper>
    </div>
  )
}
