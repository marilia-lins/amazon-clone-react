import React from 'react'
import style from './Cart.module.sass'
import { useDispatch, useSelector } from 'react-redux'
import { Cards } from '../../components/Cards'
import { remove } from '../../redux/cartSlice'

export const Cart = () => {

    const products = useSelector(state => state.cart)

    const dispatch = useDispatch()
    const removeIt = (id) => {
        dispatch(remove(id))
    }


    const carts = products.map((product) => (
        <Cards key={product.id} data={product} removeIt={removeIt}/>
    ))

  return (
    <>
    {products.length >= 1 ? 
    <>
      <span className={style.cheio}>
        Seu carrinho de compras:
      </span> 
      <div className={style.carts}>
        {carts}
      </div>
    </>
    : 
    <span className={style.vazio}>
      Seu carrinho de compras está vazio.
    </span>}
    </>
  )
}
