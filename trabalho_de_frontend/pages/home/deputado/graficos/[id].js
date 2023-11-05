import Cabecalho from "@/components/Cabecalho";
import apiDeputados from '@/services/apiDeputados';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moldura01 from "@/components/Moldura01";
import Titulo from "@/components/Titulo";
import Link from "next/link";

const graficos = ({ deputados, despesas }) => {

  return (
    <div>

      <Cabecalho />



    </div>
  );
};

export default graficos;

export async function getServerSideProps(context) {
  const id = context.params.id;

  const resultadoDeputados = await apiDeputados.get('/deputados/' + id);
  const deputados = resultadoDeputados.data.dados;

  const resultadoDespesas = await apiDeputados.get('/deputados/' + id + '/despesas');
  const despesas = resultadoDespesas.data.dados;

  return {
    props: { deputados, despesas },
  };
}
