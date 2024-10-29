import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import styles from './Barranav.module.css';
import { BsMenuButtonFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { useScrollPosition } from '../hooks/scrollPositions';

const Barranav = () => {

    const[barraAbierta, setBarraAbierta] = useState(false);
    const [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        height : window.innerHeight,
    });

    function dimensiones() {
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    useEffect(() => {
        window.addEventListener('resize', dimensiones)
        windowDimension.width > 800 && setBarraAbierta(false)
        return () =>{
            window.removeEventListener('resize', dimensiones)
            }
    },[windowDimension])

    const links=[
        {
            id: 1,
            link: "Casa",
        },
        {
            id: 2,
            link: "Services",
        },
        {
            id: 3,
            link: "Beneficios",
        },
        {
            id: 4,
            link: "Quienes",
        },
    ];

    const scrollPosition = useScrollPosition();

    return (
        <div className= { barraAbierta ? styles.barraAbierta : scrollPosition > 0 ? styles.navOnScroll : styles.barra}>
            {!barraAbierta && <p className={styles.logo}>JJ Producciones</p>}
            {!barraAbierta && windowDimension.width < 800 ? (
                <BsMenuButtonFill color='#f1f1f1' onClick={() => setBarraAbierta(!barraAbierta)} size={36} />
            ) : (windowDimension.width < 800 && ( <MdClose onClick={() => setBarraAbierta(!barraAbierta)} color='#f1f1f1' size={36}/>))}
            {
                barraAbierta  && (
                <ul className={styles.listaBarra}>
                    {links.map((x) => (
                        <div>
                            <Link
                            onClick={() => setBarraAbierta(false)}
                            to={x.link}
                            smooth
                            duration={500}
                            className={styles.barraLink}
                            >{x.link === "Quienes" ? "Cual es nuestra tarea" : x.link}</Link>
                            <div className={styles.borde}></div>
                        </div>
                    ))}
                    
                </ul>
            )}
            {windowDimension.width > 800 && (
                
                <ul className={styles.listaBarra}>
                    {links.map((x) => (
                        <div>
                            <Link
                            onClick={() => setBarraAbierta(false)}
                            to={x.link}
                            smooth
                            duration={500}
                            className={styles.barraLink}
                            >{x.link === "Quienes" ? "Cual es nuestra tarea" : x.link}</Link>
                            <div className={styles.borde}></div>
                        </div>
                    ))}
                    <Link
                            onClick={() => setBarraAbierta(false)}
                            to="Contactanos"
                            smooth
                            duration={500}
                            className={styles.contactoLink}
                            >Contactanos</Link>    
                </ul>
            )
            
            }
        </div>
    );
};

export default Barranav