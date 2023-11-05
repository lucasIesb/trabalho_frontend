import styles from './moldura.module.css';
import React from 'react';


const Moldura = ({ src, alt, height, width, nome }) => {

  return (
    <div className={styles.Moldura}>
      <div className={styles.imagem}>
        <img
          src={src}
          alt={alt}
          height={height}
          width={width}

        />
        <br />
      </div>
      <h1 className={styles.nome}>{nome}</h1>
    </div>
  );
};

export default Moldura;
