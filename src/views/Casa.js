import React from 'react';
import { Link} from"react-scroll";
import styles from './Casa.module.css';

const home = () => {
  return (
    <div name="Casa" className={styles.home}>
      <div className={styles.tituloContenedor}>
      <p>
        Entra en el Mundo <br />
         <b>Del Internet</b>
      </p>
      <p>
        Expande Tu negocio <br />
        <b>Al Mundo Del Internet</b>
      </p>
      </div>
      <div className={styles.btnsContenedor}>
        <Link to="Contactanos"smooth duration={500} className={styles.btnsAccionHome}>
          Conoce Proyectos
        </Link>
        <Link to="Contactanos"smooth duration={500} className={styles.btnsAccionHome}>
         Optener Asesoria
        </Link>
      </div>

    </div>
  )
}

export default home