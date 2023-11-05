import styles from './titulo.module.css';

const Titulo = (props) => {
    return (
        <>
            <div className={styles.box01}>



                <div className={styles.titulo}>

                    <h1 > {props.titulo} </h1>

                </div>


            </div>

            <div className={styles.box02} />
            
            <br />
            <br />
            <br />
     
     
            
        </>




    )
}
export default Titulo