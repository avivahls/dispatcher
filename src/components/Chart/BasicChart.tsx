import React, { FC } from 'react'
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { CHART_COLORS } from '../../Colors';

//DUMMY DATA
export const chartState = {
  labels: ['January', 'February', 'March','April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: CHART_COLORS,
      data: [65, 59, 80, 81, 56],
    }
  ],
}
export const enum ChartType{ Doughnut, Line, Bar}
export interface ChartProps {
  chartType: ChartType,
  state: any
}
const BasicChart: FC<ChartProps> = ( {chartType, state}) => {
  return <>
  {(chartType === ChartType.Doughnut) && <Doughnut data={state} />}
  {(chartType === ChartType.Bar) && <Bar data={state}/>}
  {(chartType === ChartType.Line) && <Line data={state}/>}
  </>

}
export default BasicChart;

