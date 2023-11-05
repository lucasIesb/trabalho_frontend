import Cabecalho from "@/components/Cabecalho";
import apiDeputados from '@/services/apiDeputados';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarChart from "@/components/BarChart";
import Titulo from "@/components/Titulo";
import Rodape from "@/components/Rodape";

const graficos = ({ despesas }) => {
  return (
    <div className="imagens" >

      <Cabecalho />
      <Titulo titulo='As ultimas 10 despesas' />
      <BarChart despesas={despesas} />
      <br/>
      <br/>
      <br/>
      <Rodape />
    </div>
  );
};

export default graficos;

export async function getServerSideProps(context) {
  const id = context.params.id;

  const resultadoDespesas = await apiDeputados.get('/deputados/' + id + '/despesas');
  const despesas = resultadoDespesas.data.dados;

  return {
    props: { despesas },
  };
}