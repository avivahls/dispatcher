import React, { FC, useCallback } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";

export interface ChartProps {
  chartType: ChartType;
  state: any;
  options: any;
}
export const enum ChartType {
  Doughnut,
  Line,
  Bar,
}

const BasicChart: FC<ChartProps> = ({ chartType, state, options }) => {
  const renderChart = useCallback(
    ({ chartType, state, options }: ChartProps) => {
      switch (chartType) {
        case ChartType.Doughnut:
          return <Doughnut data={state} options={options} />;
        case ChartType.Bar:
          return <Bar data={state} options={options} />;
        case ChartType.Line:
          return <Line data={state} options={options} />;
        default:
          break;
      }
    },
    []
  );
  return <> {renderChart({ chartType, state, options })}</>;
};
export default BasicChart;
