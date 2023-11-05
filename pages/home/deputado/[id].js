import Cabecalho from "@/components/Cabecalho";
import apiDeputados from '@/services/apiDeputados';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moldura01 from "@/components/Moldura01";
import Titulo from "@/components/Titulo";
import Link from "next/link";
import Rodape from "@/components/Rodape";

const Detalhes = ({ deputados, despesas }) => {
  const { ultimoStatus } = deputados;

  // Calcular a soma das despesas
  const somaDespesas = despesas.reduce((total, despesa) => total + parseInt(despesa.valorDocumento), 0);

  return (
    <div className="imagens">

      <Cabecalho />

      <br />
      <br />

      <div className="pagina">

        <div className="deputado">

          <Moldura01

            src={ultimoStatus.urlFoto} height={400} nome={ultimoStatus.nome}

          />
          <br />

          <h2 className="partidoTitulo">{ultimoStatus.siglaPartido}</h2>
          <Link href={'/home/deputado/graficos/' + ultimoStatus.id}>

            <Moldura01 className='moldura' nome='grafico' />

          </Link>
        </div>


        <div className="despesas">


          <h2 className="txt">Despesa</h2>

          <br />

          <h3 className="txt">Total {somaDespesas}</h3>

          <br />

          {despesas.map((despesa) => (

            <React.Fragment key={despesa.id}>
              <div className="topico">
                <p>
                  Data: {despesa.dataDocumento}
                  Tipo: {despesa.tipoDespesa}
                </p>

                <p className="valor">Valor: {despesa.valorDocumento}</p>

              </div>
              <br />


            </React.Fragment>

          ))}

        </div>

      </div>
      <br/>
      <br/>
      <br/>
      <Rodape />
    </div>
  );
};

export default Detalhes;

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
