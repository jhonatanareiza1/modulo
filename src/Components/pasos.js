import React from 'react'
import styles from './pasos.module.css';

const pasos = ({text, step}) => {
  return (
    <div className={styles.contenedor}>
        <div className={styles.pasosContenedor}>
        <p className={styles.pasosNumero}>{step}</p>
        <p className={styles.pasosTxt}>{text}</p>
    </div>
    <div className={styles.border}></div>
    </div>
  );
};

export default pasos;