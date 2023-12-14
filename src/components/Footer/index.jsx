import React from 'react'
import style from './Footer.module.sass'
import logo from '../../images/amazon.png'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={style.bottom}>
            <img className={style.logo} src={logo} alt="amazon logo" />
            <p>Projeto construído com react, react-router-dom, redux, sass: Um e-commerce, com interface clonando home page do site da Amazon. Os Produtos são listados em slides de categorias, utilizando api do Mercado Livre e a biblioteca Swiper, e o gerenciamento de estado do carrinho é feito com Redux Toolkit. </p>
            <p className={style.marilia}>Desenvolvido por Marília Lins.</p>
            <Link className={style.link} to='https://github.com/marilia-lins'>confira meu github</Link>
        </div>
    </div>
  )
}
