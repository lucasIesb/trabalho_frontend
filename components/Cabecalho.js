import styles from './cabecalho.module.css';
import Link from 'next/link'
import React from 'react'



const Cabecalho = () => {
  return (
    <div className={styles.body}>
       
      <>
       
        <div className={styles.cabecalho}>
          <Link href="/home" className={styles.links}>Home</Link>
          <Link href="/partidos" className={styles.links}>Partidos</Link>

        </div>
        <div className={styles.logo01} />

        <div className={styles.logo}>

          <h1 className={styles.logotxt}>CDD</h1>

        </div>
        <br />
        <br />
        <br />
        <br />
      
        <br />
        <br />
        <br />
        <br />
         
 

      </>
    </div>


  )
}

export default Cabecalho