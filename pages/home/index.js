import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import Cabecalho from '@/components/Cabecalho';
import apiDeputados from '@/services/apiDeputados';
import Moldura from '@/components/Moldura';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from '@/components/Titulo';
import Rodape from '@/components/Rodape';
import Pesquisa from '@/components/Pesquisa';

const Home = ({ deputados }) => {
  const [searchResults, setSearchResults] = useState(deputados);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="imagens">
      <Cabecalho />
      <Titulo titulo="Deputados" />
      <Pesquisa data={deputados} onSearch={handleSearch} />
      <br/>
      <Row md={5}>
        {searchResults.map((item) => (
          <Col key={item.id}>
            <Link href={`/home/deputado/${item.id}`}>
              <Moldura src={item.urlFoto} height={250} nome={item.nome} />
            </Link>
            <br />
            <br />
          </Col>
        ))}
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Rodape />
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const resultado = await apiDeputados.get('/deputados/');
  const deputados = resultado.data.dados;

  return {
    props: { deputados },
  };
}
