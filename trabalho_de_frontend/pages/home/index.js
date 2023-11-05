import Cabecalho from "@/components/Cabecalho";
import apiDeputados from "@/services/apiDeputados";
import Moldura from "@/components/Moldura";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Titulo from "@/components/Titulo";

const Home = ({ deputados }) => {
  return (
    <div className="imagens">
      <Cabecalho />
      <Titulo titulo='deputados' />
      <Row md={5}>
        {deputados.map(item => (
          <Col>
          
            <Link  href={'/home/deputado/' + item.id}>
              <Moldura src={item.urlFoto}  height={250} nome={item.nome}/>
              </Link>
              <br/>
              <br/>

          
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Home;

export async function getServerSideProps() {


  const resultado = await apiDeputados.get("/deputados/");
  const deputados = resultado.data.dados;

  return {
    props: { deputados }
  }
}