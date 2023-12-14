import React from 'react'
import style from './Search.module.sass'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'


export const Search = () => {

  return (
    <div className={style.searchbox}>
        <div className={style.search}>
            <input
              disabled 
              type='text'
              placeholder='Confira alguns produtos disponíveis abaixo'
            />
            <button disabled>
                <MagnifyingGlassIcon className={style.icon}/>
            </button>
        </div>
    </div>
  )
}
