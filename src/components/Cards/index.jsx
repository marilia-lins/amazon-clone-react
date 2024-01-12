import React from 'react'
import style from './Cards.module.sass'
import { useDispatch } from 'react-redux'
import { add } from '../../redux/cartSlice'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const customId = "custom-id-yes";

export const Cards = ({data, removeIt}) => {

    const { title, thumbnail, price, id} = data

    const dispatch = useDispatch()
    const addProduct = (data) => {
        dispatch(add(data))
    }

    let alert = () => {
        toast.success("Produto adicionado ao carrinho !", {
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: customId
        });
    }

    const removerOuAdd = () => {
        removeIt ? removeIt(data.id) : addProduct(data)
    }


  return (
        <main className={style.product} key={id}>
            <div>
                <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="" />
                <h5>{title.slice(0, 32)}...</h5>
                <div className={style.bottom}>
                    <p> R$ {price}</p>
                    <button onClick={() => {
                            removerOuAdd()
                            alert()
                            }}>
                        { removeIt ? <div className={style.remove}>Remover do carrinho</div> : <div className={style.add}>Adicionar ao carrinho</div>}
                    </button>
                </div>
            </div>
        </main>
    )
}
