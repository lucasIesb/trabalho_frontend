import styles from './Carrossel.module.css';

import React from 'react'



const Carrossel = ({ src, alt, height, width, nome }) => {
    return (
        <>
            <div className={styles.Moldura00}>
                <div className={styles.Moldura01} />


                <img className={styles.imagemc} src={src} alt={alt} height={height} width={width} />
          
            </div>
            <h1 className={styles.nome00}>{nome}</h1>
        </>






    )
}

export default Carrossel