import React from 'react'
import styles from './Contactanos.module.css';

const Contactanos = () => {
  return (
    <div name="Contactanos" className={styles.contactanos}>
      <h2>Contactanos</h2>
      <form className={styles.formulario}>
        <label for="nombre">Nombre</label>
        <input id='nombre' name='nombre' className={styles.input}></input>
        <label for="correo">Correo</label>
        <input id='correo' name='correo' className={styles.input}></input>
        <label for="texto">Mensaje</label>
        <textarea id='texto' className={styles.textArea}></textarea>
        <button type='submit' className={styles.botonEnviar}>Enivar</button>
      </form>
    </div>
  )
}

export default Contactanos