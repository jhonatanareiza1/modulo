import React from 'react'
import styles from './Beneficios.module.css';
import { MdDevices } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
import { MdSportsSoccer } from "react-icons/md";

const Beneficios = () => {
  return (
    <div name="Beneficios" className={styles.beneficios}>
      <h2 className={styles.tituloBeneficios}>Beneficios de trabajar con nosotros</h2>
      <p>Desarrollos integrales <MdDevices /></p>
      <p>Estructura divertida en alta calidad y tecnologia <IoGameControllerOutline /></p>
      <p>Beneficios en ventas <FaCartPlus /></p>
      <p>Aprendizaje Tecnico <FaBookReader /></p>
      <p>Reducción de tiempo de trabajo y mayor eficiencia <IoMdClock /></p>
      <p>Tiempo de Calidad Con los tuyos <MdSportsSoccer /></p>
    </div>
  )
}

export default Beneficios