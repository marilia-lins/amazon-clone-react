import React from 'react'
import style from './Navbar.module.sass'
import logo from '../../images/amazon.png'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
import { Search } from '../Search'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Navbar = () => {

    const cartNumber = useSelector(state => state.cart)

  return (
    <header className={style.header}>

        <div className={style.main}>

            <div className={style.left}>

                <Link to='/'>
                    <img className={style.logo} src={logo} alt="amazon logo" />
                </Link>
                
                <div className={style.left_infos}>
                    <div className={style.left_infos_one}>Enviar para</div>
                    <div className={style.left_infos_two}>Sua Localização</div>
                </div>

            </div>

            <div className={style.middle}>
                <Search/>
            </div>

            <div className={style.right}>
                
                <div className={style.right_infos}>
                    <div className={style.right_infos_one}>Olá, faça seu login</div>
                    <div className={style.right_infos_two}>Contas e Listas</div>
                </div>

                <div className={style.right_more_infos}>
                    <div className={style.right_infos_three}>Devoluções</div>
                    <div className={style.right_infos_four}>e Pedidos</div>
                </div>

                <NavLink to='/carrinho' className={style.cart}>
                    <ShoppingCartIcon className={style.cart_icon}/>
                    <span>{cartNumber.length}</span>
                    Carrinho
                </NavLink>

            </div>

        </div>

        <div className={style.bottom}>
            <div className={style.bottom_left}>
                <h5>Semana Black Friday</h5>
                <h5>Venda na Amazon</h5>
                <h5>Mais Vendidos</h5>
                <h5>Prime</h5>
                <h5>Livros</h5>
                <h5>Ideias de Presente</h5>
                <h5>Eletrônicos</h5>
            </div>
            <div className={style.bottom_right}>
                <h3><p>Prime Video </p>  | Assista a filmes e séries</h3>
            </div>
        </div>

    </header>
  )
}
