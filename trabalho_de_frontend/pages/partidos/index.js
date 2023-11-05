import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import apiDeputados from "@/services/apiDeputados";
import Carrossel from '@/components/Carrossel';
import Cabecalho from '@/components/Cabecalho';
import Titulo from '@/components/Titulo';


const Partidos = ({ deputados, partidos }) => {

  const [partidoSelecionado, setPartidoSelecionado] = useState(null);

  const filteredDeputados = partidoSelecionado
    ? deputados.filter(item => item.siglaPartido === partidoSelecionado)
    : deputados;

  const handleClickPartido = siglaPartido => {
    setPartidoSelecionado(siglaPartido);
  };

  const [partidosComLogos, setPartidosComLogos] = useState([]);


  useEffect(() => {
    const fetchPartidosLogos = async () => {
      const partidosComLogosPromises = partidos.map(async (partido) => {
        const response = await apiDeputados.get(`/partidos/${partido.id}`);
        const partidoComLogo = {
          ...partido,
          urlLogo: response.data.dados.urlLogo,
        };
        return partidoComLogo;
      });

      const partidosComLogos = await Promise.all(partidosComLogosPromises);
      setPartidosComLogos(partidosComLogos);
    };

    fetchPartidosLogos();
  }, [partidos]);


  return (
    <div>
      <Cabecalho />
      <Titulo titulo='Partidos' />
      <div className='carousel-container'>

        <Carousel>



          {partidosComLogos.map((item) => (

            <div className='carousel-item' onClick={() => handleClickPartido(item.sigla)} key={item.id}>

              <Carrossel
                img src={item.urlLogo}
                alt={item.sigla}
                nome={item.nome}
                style={{ width: '100%', maxWidth: '300px' }} />
              <br />
              <br />

            </div>
          ))}

        </Carousel>

        <div className='lista'>
          <div className='lista00'>
          </div>

          <h1 className='h1'>*Deputados*</h1>

          <br/>

          {partidoSelecionado ?  (
          
            filteredDeputados.map(item => (

              <React.Fragment key={item.id}>
           
                <h3 className='h3'>{item.nome}</h3>
                
                <br />

              </React.Fragment>



            ))
          ) : (
           <h2 className='h2'>escolha um partido</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Partidos;

export async function getServerSideProps() {
  const resultado = await apiDeputados.get('/deputados/');
  const deputados = resultado.data.dados;

  const resultado0 = await apiDeputados.get('/partidos/');
  const partidos = resultado0.data.dados;

  return {
    props: { deputados, partidos },
  };
}