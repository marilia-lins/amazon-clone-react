import React from 'react'
import style from './Cards.module.sass'
import { useDispatch } from 'react-redux'
import { add } from '../../redux/cartSlice'

export const Cards = ({data, removeIt}) => {

    const { title, thumbnail, price, id} = data

    const dispatch = useDispatch()
    const addProduct = (data) => {
        dispatch(add(data))
    }


  return (
        <main className={style.product} key={id}>
            <div>
                <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="" />
                <h5>{title.slice(0, 32)}...</h5>
                <div className={style.bottom}>
                    <p> R$ {price}</p>
                    <button onClick={removeIt ? () => removeIt(data.id) : () => addProduct(data)}>
                        { removeIt ? <div className={style.remove}>Remover do carrinho</div> : <div className={style.add}>Adicionar ao carrinho</div>}
                    </button>
                </div>
            </div>
        </main>
    )
}
