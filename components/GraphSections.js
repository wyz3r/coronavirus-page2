import React from 'react'
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,BarChart, Bar, Cell,
// } from 'recharts';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'





const  GraphSections = () => { 
  const options = {
    title: {
      text: 'Tipo de Compra…',
      style: {
        color: '#F9AC78',
        fontWeight: 'bold'
    }
    },
    xAxis: {
      type: 'datetime'
  },
    plotOptions: {
      line: {
       
      },
      series: {
        dataLabels: {
          enabled: true
      },
          pointStart: 1584921600000,
          pointInterval: 24 * 3600 * 1000 // one day
      }
  },
  chart: {
      scrollablePlotArea: {
        minWidth: 2300,
    },
  },
  colors: ['#F9AC78', '#59B3D5', '#40C19C', '#80699B', '#ED515D',
        '#8163A8'],
    series: [{
      type: 'line',
      data: [47,52,43,47,52,52,51,49,50,50,56,50,52,54,43,47,52,50,50,54,52,43,47,54,52,54,47,52],
      name: 'No, compro conforme lo necesite',
    },
    {
      type: 'line',
      name: 'Ya empecé a comprar algunas cosas extra',
      data: [44,32,44,39,37,35,33,41,39,40,34,41,40,38,44,39,37,39,40,38,32,44,39,38,32,38,44,32]
    },
    {
      type: 'line',
      data: [5,6,4,8,5,5,6,4,6,6,7,7,4,3,4,8,5,6,6,3,6,4,8,3,6,3,5,6],
      name: 'Que la economia colapse',
    },
    {
      type: 'line',
      name: 'Si, compre todo lo necesario para sobrevivir',
      data: [4,7,8,5,5,6,9,5,4,4,3,3,3,5,8,5,5,4,4,5,7,8,5,5,7,5,4,7]
    },
    {
      type: 'line',
      name: 'No lo necesito, tengo mi propia hortaliza',
      data: [1,3,0,1,2,3,1,1,1,1,1,0,1,1,0,1,2,1,1,1,3,0,1,1,3,1,1,3]
    }
    

  ]
  }
  const options2 = {
    chart: {
      type: 'column'
  },
  
  title: {
      text: 'Tipo de Compra… Porcentaje por ola'
  },
  xAxis: {
      categories: ['ola 1 (s1+s2)', 's3', 's4 ', 'Grapes', 'Bananas']
  },
  yAxis: {
      min: 0,
      title: {
          text: ''
      }
  },
  tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true
  },
  plotOptions: {
    series: {
      dataLabels: {
          enabled: true
      }
  },
      column: {
          stacking: 'percent'
      }
  },
  colors: ['#F9AC78', '#59B3D5', '#40C19C', '#80699B', '#ED515D',
  '#8163A8'],
  series: [{
      name: 'No, compro conforme lo necesite',
      data: [49, 51, 52]
  }, {
      name: 'Ya empecé a comprar algunas cosas extra',
      data: [37, 39,41]
  }, {
      name: 'Si, compre todo lo necesario para sobrevivir',
      data: [6, 5, 4]
  },
  {
    name: 'Si, compre todo lo necesario para sobrevivir',
    data: [6, 4, 1]
},
{
  name: 'No lo necesito, tengo mi propia hortaliza',
  data: [2, 1, 1]
}
]
  }
 
  return (
    <div style={{width:'100%'} }>
      <HighchartsReact
    highcharts={Highcharts}
    options={options2}
  />
   <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
      
    </div>
  )
}

export default GraphSections
