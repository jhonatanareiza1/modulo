import React from 'react'
import styles from './Services.module.css';

const Services = () => {
  return (
    <div name="Services" className={styles.Services}>
      <p>Conoceras nuestros Proyectos Y te robaran una sonrisa</p>
      <img className={styles.imgPopeye} src={require("../assets/imgs/medadog.jpg")}/>
    </div>
  )
}

export default Services