import React from 'react'
import style from './Home.module.sass'
import { Carousel } from '../../components/Carousel'
import { HomeCards } from '../../components/HomeCards'
import GridOne from "../../images/home_grid_1.jpg"
import GridTwo from "../../images/home_grid_2.jpg"
import GridThree from "../../images/home_grid_3.jpg"
import GridFour from "../../images/home_grid_4.jpg"
import GridFive from "../../images/home_grid_5.jpg"
import GridSix from "../../images/home_grid_6.jpg"
import { BookSlider } from '../../components/BookSlider'
import { PhoneSlider } from '../../components/PhoneSlider'
import { ClothesSlider } from '../../components/ClothesSlider'
import { HomeSlider } from '../../components/HomeSlider'

export const Home = () => {
  return (
    <div className={style.base}>
        <div className={style.container}>
            <Carousel/>
            <div className={style.grid}>
                <HomeCards title="Siga ofertas"
                    img={GridOne}
                    link="Veja todas as ofertas"
                />
                <HomeCards title="Só na Prime Video"
                    img={GridTwo}
                    link="Clique para saber mais"
                />
                <HomeCards title="Ative seu modo gamer"
                    img={GridThree}
                    link="Encontre seu set up ideal"
                />
                <HomeCards title="Confira outros títulos"
                    img={GridFour}
                    link="Clique para saber mais"
                />
                <HomeCards title="O melhor para seu pet"
                    img={GridFive}
                    link="Veja todas as ofertas"
                />
                <HomeCards title="Continue comprando"
                    img={GridSix}
                    link="Veja todas as ofertas"
                />
            </div>
        </div>

        <div style={{marginTop: "3em"}}>
            <BookSlider />
        </div>

        <div style={{marginTop: "3em"}}>
            <PhoneSlider/>
        </div>

        <div style={{marginTop: "3em"}}>
            <ClothesSlider/>
        </div>

        <div style={{marginTop: "3em"}}>
            <HomeSlider/>
        </div>
        

    </div>
  )
}
