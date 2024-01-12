import React from 'react'
import style from './HomeCards.module.sass'

export const HomeCards = ({title, img, link}) => {
  return (
    <div className={style.container}>
        <div className={style.title}>{title}</div>
        <div>
            <img src={img} alt="grid" />
        </div>
        <a>{link}</a>
    </div>
  )
}
