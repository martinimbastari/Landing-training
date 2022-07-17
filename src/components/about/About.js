import React from 'react'
import style from './about.module.css'
import {BiTargetLock} from 'react-icons/bi'
import logo from '../../assets/aboutpng.png'

export default function About() {
  return (
    <>
     <div className={style.contenedorBeneficios}>
        <div className={style.beneficio1}>
        <BiTargetLock fontSize={50}/>
            <h2>Objetivos </h2>
            <p>entrenaremos por objetivos para ir superandolos sesion tras sesion</p>
        </div>
        <div className={style.beneficio2}>
            <BiTargetLock fontSize={50}/>
            <h2>Objetivos </h2>
            <p>entrenaremos por objetivos para ir superandolos sesion tras sesion</p>
        </div>
        <div className={style.beneficio3}>
        <BiTargetLock fontSize={50}/>
            <h2>Objetivos </h2>
            <p>entrenaremos por objetivos para ir superandolos sesion tras sesion</p>
        </div>
        <div className={style.beneficio3}>
        <BiTargetLock fontSize={50}/>
            <h2>Objetivos </h2>
            <p>entrenaremos por objetivos para ir superandolos sesion tras sesion</p>
        </div>
    </div>
    <div className={style.contenedorAbout}>
        <div className={style.contenedorImg}>
        </div>
        <div className={style.aboutText}>
            <h2>Sobre mi</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus metus sed mauris pretium luctus. Curabitur non tellus sagittis, luctus tellus nec, tristique nunc. Fusce tristique eget felis ac rhoncus. Nulla porttitor lectus eget velit luctus, ut pulvinar massa dignissim. Suspendisse luctus, lectus at commodo mattis, purus nunc aliquam urna, at bibendum tellus magna ut nunc. Aliquam pulvinar mi vitae imperdiet placerat. Duis in ante felis. Nullam efficitur malesuada ipsum vel vestibulum. </p>
        </div>
    </div>
    </>
   
  )
}
