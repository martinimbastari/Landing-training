import React from 'react'
import style from './header.module.css'

export default function Header() {
  return (
    <div  className={style.headerContainer}>
        <div className={style.headerInfo}>
            <h1>Soy tu personal trainer</h1>
            <p>Explota tu maximo potencial </p>
            <button>
                <a href='#hola'>Comenza ya</a>
            </button>
        </div>
    </div>
  )
}
