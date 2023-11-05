import styles from './moldura01.module.css';
import React from 'react';


const Moldura01 = ({ src, alt, height, width, nome }) => {

  return (
    <div className={styles.Moldura01}>
      <div className={styles.imagem01}>
        <img
          src={src}
          alt={alt}
          height={height}
          width={width}

        />
        <br />
      </div>
      <h1 className={styles.nome01}>{nome}</h1>

    </div>
  );
};

export default Moldura01;
