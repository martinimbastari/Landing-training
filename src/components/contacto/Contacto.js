import React from 'react'
import {BsWhatsapp, BsTelegram, BsInstagram} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'
import style from './contacto.module.css'

export default function Contacto() {
  return (
    <div id='contacto' className={style.contenedorContacto}>
        <h2>No dudes en contactarme!</h2>
        <div className={style.contenedorRedes}>
        <BsTelegram className={style.iconT} fontSize={30}/>
        <IoLogoWhatsapp className={style.iconW} fontSize={30}/>
        <AiFillInstagram className={style.iconI} fontSize={30}/>
        </div>
        <p>©️Copyright Martin Imbastari 2022</p>
    </div>
  )
}
