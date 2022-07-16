import React, { useState } from "react";
import logo from "../../assets/arLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import style from "./navbar.module.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className={style.header}>
        <nav className={style.contenedor}>
      <div className={style.contenedorImg}>
        <img height="100%" src={logo} />
      </div>
      <div className={style.navList}>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Sobre Mi</a>
          </li>
          <li>
            <a href="#">Planes</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
        </div>
        <div className={style.smallScreen}>
        <GiHamburgerMenu
          fontSize={30}
          onClick={() => setToggleMenu(true)}
          className={style.iconHamburger}
        />
        {toggleMenu && (
          <>
          <div className={style.smallscreen_overlay}>
          <AiOutlineClose className={style.closeIcon} onClick={() => setToggleMenu(false)} />
                            <ul className={style.smallscreen_links}>
                                <li><a href='#about'>Inicio</a></li>
                                <li><a href='#skills'>Sobre mi</a></li>
                                <li><a href='#trabajo'>Planes</a></li>
                                <li><a href='#contacto'>Contacto</a></li>
                            </ul>
                        </div>
            
          </>
        )}
         </div>
      
    </nav>
    </header>
    
  );
}
