import React from 'react'
import styles from './Quienes.module.css';
import Pasos from '../Components/pasos';

const QuienesSomos = () => {

  const steps = [
    {
      text: 'Inscribete en Nuestra pagina',
      id:1,
    },
    {
      text: 'Dejanos saber lo que buscas',
      id:2,
    },
    {
      text: 'Conoce nuestros productos para ver tu gusto',
      id:3,
    },
    {
      text: 'Aprende a usar nustros productos',
      id:4,
    },
    {
      text: 'Disfruta de todo lo que trae para ti trabajar con nosotros',
      id:5,
    },
  ]
  return (
    <div name="Quienes" className={styles.quienesContenedor}>
      <h2 className={styles.tituloQuienes}>Pasos Faciles Paras ayudarte mas rapidamente</h2>
      {steps.map((x) => (
        <Pasos text={x.text} step={x.id} />
      ))}
    </div>
  )
}

export default QuienesSomos;