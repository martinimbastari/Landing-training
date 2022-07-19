import React from 'react'
import style from './planes.module.css'

export default function Planes() {
  return (
    <>
    <div className={style.contenedorSection}>
    <h2>Nuestros planes</h2>
    <div className={style.contenedorPlanes}>
        
        <div className={style.planCard}>
        <h3 className={style.titleCard}>Plan basico $50</h3>
            <ul>
                <li>-Lorem ipsum dolor sit.</li>
                <li>-Lorem ipsum dolor sit.</li>
                <li>-Lorem ipsum dolor sit.</li>
            </ul>
        </div>
        <div className={style.planCard}>
        <h3 className={style.titleCard}>Plan moderado $100</h3>
            <ul>
                <li>-Lorem ipsum dolor sit.</li>
                <li>-Lorem ipsum dolor sit.</li>
                <li>-Lorem ipsum dolor sit.</li>
                <li>-Lorem ipsum dolor sit.</li>
            </ul>
        </div>
        <div className={style.planCard}>
        <h3 className={style.titleCard}>Plan avanzado $150</h3>
            <ul>
                <li>-Lorem ipsum dolor sit.</li>
                <li>-Lorem ipsum dolor sit.</li>
                <li>-Lorem ipsum dolor sit.</li>
                <li>-Lorem ipsum dolor sit.</li>
                <li>-Lorem ipsum dolor sit.</li>
            </ul>
        </div>
    </div>
    </div>
    </>
    
  )
}
