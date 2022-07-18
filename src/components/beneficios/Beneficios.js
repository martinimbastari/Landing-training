import React from 'react'
import style from './beneficios.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

export default function Beneficios() {
  return (
    <div className={style.fondo}>
        <div className={style.contenedorBeneficios}>
        <div className={style.beneficiosText}>
            <h2><span>Entrenamiento</span> adaptado a cada persona</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus metus sed mauris pretium luctus. Curabitur non tellus sagittis, luctus tellus nec, tristique nunc. Fusce tristique eget felis ac rhoncus. Nulla porttitor lectus eget velit luctus, ut pulvinar massa dignissim. Suspendisse luctus, lectus at commodo mattis, purus nunc aliquam urna, at bibendum tellus magna ut nunc. Aliquam pulvinar mi vitae imperdiet placerat. Duis in ante felis. Nullam efficitur malesuada ipsum vel vestibulum. </p>
        </div>
        <div className={style.beneficiosItems}>
        <div className={style.item}>
        <FontAwesomeIcon fontSize={40} icon={faDumbbell} />
        <h2>1</h2>
        <p>Aumenta tu fuerza</p>
        </div>
        <div className={style.item}>
        <FontAwesomeIcon fontSize={40} icon={faDumbbell} />
        <h2>1</h2>
        <p>Aumenta tu fuerza</p>
        </div>
        <div className={style.item}><FontAwesomeIcon fontSize={40} icon={faDumbbell} />
        <h2>1</h2>
        <p>Aumenta tu fuerza</p></div>
        <div className={style.item}><FontAwesomeIcon fontSize={40} icon={faDumbbell} />
        <h2>1</h2>
        <p>Aumenta tu fuerza</p></div>
        </div>
        </div>
        
    </div>
  )
}
