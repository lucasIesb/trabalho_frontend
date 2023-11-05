import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import styles from './BarChart.module.css';


const BarChart = ({ despesas }) => {
  const sortedDespesas = despesas
    .sort((a, b) => new Date(a.dataDocumento) - new Date(b.dataDocumento))
    .slice(0, 10);

  const data = sortedDespesas.map((item) => ({
    x: item.dataDocumento,
    y: item.valorDocumento,
  }));

  return (

    <div className={styles.grafico}>
      <VictoryChart padding={30}>

        <VictoryAxis style={{ tickLabels: { fontSize: 8, padding: 5, fill: 'white' }, axis: { stroke: 'white' } }} />
  
       
       
        <VictoryBar
          data={data}
          x="x"
          y="y"

          style={{ data: { fill: 'white' } }}
        />
      </VictoryChart>

    </div>

  );
};

export default BarChart;
