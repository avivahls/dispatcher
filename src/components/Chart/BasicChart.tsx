import React, { FC } from 'react'
import { Bar, Doughnut, Line } from 'react-chartjs-2';

//DUMMY DATA
export const chartState = {
  labels: ['January', 'February', 'March','April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [ '#FF9800','#030035','#E8E8E8','#343A6E','#DDF3FE'],
      data: [65, 59, 80, 81, 56],
      height: 20,
      width: 20
    }
  ]
}
export const enum ChartType{ Doughnut, Line, Bar}
export interface ChartProps {
  chartType: ChartType,
  state: any
}
const BasicChart: FC<ChartProps> = ( {chartType, state}: ChartProps) => {
  return <>
  {(chartType === ChartType.Doughnut) && <Doughnut data={state}/>}
  {(chartType === ChartType.Bar) && <Bar data={state}/>}
  {(chartType === ChartType.Line) && <Line data={state}/>}
  </>

}
export default BasicChart;

