import React from "react";
import style from "./beneficios.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
import { GiStrongMan } from "react-icons/gi";

export default function Beneficios() {
  return (
    <div className={style.fondo}>
      <div className={style.contenedorBeneficios}>
        <div className={style.beneficiosText}>
          <h2>
            <span>Entrenamiento</span> adaptado a cada persona
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            luctus metus sed mauris pretium luctus. Curabitur non tellus
            sagittis, luctus tellus nec, tristique nunc. Fusce tristique eget
            felis ac rhoncus. Nulla porttitor lectus eget velit luctus, ut
            pulvinar massa dignissim. Suspendisse luctus, lectus at commodo
            mattis, purus nunc aliquam urna, at bibendum tellus magna ut nunc.
            Aliquam pulvinar mi vitae imperdiet placerat. Duis in ante felis.
            Nullam efficitur malesuada ipsum vel vestibulum.{" "}
          </p>
        </div>
        <div className={style.beneficiosItems}>
          <div className={style.item}>
            
            <GiStrongMan fontSize={40} />
            <h2>1</h2>
            <p>Aumenta tu fuerza</p>
          </div>
          <div className={style.item}>
          <FontAwesomeIcon fontSize={30} icon={faDumbbell}  />
            <h2>2</h2>
            <p>Gana masa muscular</p>
          </div>
          <div className={style.item}>
            <FontAwesomeIcon fontSize={30} icon={faArrowTrendDown} />
            <h2>3</h2>
            <p>Reduci tu % de grasa</p>
          </div>
          <div className={style.item}>
            <FontAwesomeIcon fontSize={30} icon={faArrowTrendUp} />
            <h2>4</h2>
            <p>Mejora tu rendimiento deportivo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
