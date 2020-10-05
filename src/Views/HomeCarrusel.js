import React from "react";
import styles from "../Views/HomeCarrusel.module.css";
import Flecha from "../Components/Flecha";


const Carrusel= () => {
    return(
    <div className={styles.ContainerCarrusel}>
        <div className={styles.ContainerTexto}>
            <p>(PMA, 2020)</p>
            <h1>LA INSEGURIDAD ALIMENTARIA </h1>
            <h1>AGUDA AUMENTARÁ A 265 MILLONES</h1>
            <h1>EN 2020 EN LATINOAMÉRICA,</h1>
            <h1>DUPLICANDO LAS CIFRAS DEL 2019.</h1>
        </div>
        <div className={styles.cajaBotonLeerMas}>
            <button className={styles.botonLeerMas}>Leer más</button>
            <div className={styles.FlechaCarrusel}>
            <Flecha/>
            </div>
         </div>
    </div>
 )
};

export default Carrusel;