import React, { FC } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { BLUE, CHART_COLORS, LINE_BACKGROUND } from "../../Colors";

//DUMMY DATA
export const LineChartState = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      borderColor: BLUE,
      height: "100%",
      backgroundColor: LINE_BACKGROUND,
      data: [65, 59, 80, 81, 56],
      tension: 1,
      fill: {
        target: "origin",
      },
    },
  ],
};
export const DoughnutChartState = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: CHART_COLORS,
      data: [65, 59, 80, 81, 56],
      cutout: "80%",
      radius: "60%",
    },
  ],
};
export const BarChartState = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: BLUE,
      data: [65, 59, 80, 81, 56],
      indexAxis: "y",
      borderRadius: 100,
    },
  ],
};
//////
export const enum ChartType {
  Doughnut,
  Line,
  Bar,
}
export interface ChartProps {
  chartType: ChartType;
  state: any;
}
const BasicChart: FC<ChartProps> = ({ chartType, state }) => {
  return (
    <>
      {chartType === ChartType.Doughnut && <Doughnut data={state} />}
      {chartType === ChartType.Bar && <Bar data={state} />}
      {chartType === ChartType.Line && <Line data={state} />}
    </>
  );
};
export default BasicChart;
