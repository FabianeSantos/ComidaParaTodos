import React from "react";
import styles from "../Views/HomeCampañas.module.css";
import FotoCaballero from "../img/homeE.png";
import BotonComoAportar from "../Components/BotonComoAportar";
import FlechaColor from "../Components/FlechaColor";

const Campañas = () => {
    return (
        <div className={styles.CajaquintaPantalla}>
            <div className={styles.Cajatextos}>
                <h3>- Campañas en curso -</h3>
                <h1>CAMPAÑA SOLIDARIA</h1>
                <h1>DE EMERGENCIA</h1>
                <div className={styles.TextoLargo} >
                    <p>Continuamos con el desarrollo de la campaña solidaria de</p>
                    <p>emergencia que convoque a la ciudadanía y empresariado,</p>
                    <p>que fomente la asistencia en la emergencia a las comunidades</p>
                    <p>más necesitadas y la re activación económica.</p>
                </div>
                <div className={styles.CifrasCampaña}>
                    <div className={styles.CifrasCampaña1}>
                        <h1>160.000</h1>
                        <h3>Almuerzos Recaudados</h3>
                        <h1>81.675</h1>
                        <h3>Almuerzos Entregados</h3>
                    </div>
                    <div className={styles.CifrasCampaña2}>
                        <h1>15</h1>
                        <h3>Comedores sociales en 12 comunas</h3>
                        <h1>7</h1>
                        <h3>Hogares de adulto mayo en todo Chile</h3>
                    </div>

                </div>

                <div>
                    <BotonComoAportar />
                </div>
                <FlechaColor />

            </div>
            <div className={styles.CajaImgCaballero}>

                <img className={styles.ImgCaballero} src={FotoCaballero} alt=""></img>

            </div>

        </div>

    )
};
export default Campañas;