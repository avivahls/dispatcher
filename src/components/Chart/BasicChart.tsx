import { ChartData } from "chart.js";
import React, { FC, useCallback } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { NoChartStyle, NoDataContainer } from "../NoData/NoDataStyle";
import { ChartType, IChartData } from "./ChartType";

export interface ChartProps {
  chartType: ChartType;
  state: IChartData;
  options: any;
}

const BasicChart: FC<ChartProps> = ({ chartType, state, options }) => {
  const renderChart = useCallback(
    ({ chartType, state, options }: ChartProps) => {
      switch (chartType) {
        case ChartType.Doughnut:
          return (
            <Doughnut
              data={state as ChartData<"doughnut", number[], string>}
              options={options}
            />
          );
        case ChartType.Bar:
          return (
            <Bar
              data={state as ChartData<"bar", number[], string>}
              options={options}
            />
          );
        case ChartType.Line:
          return (
            <Line
              data={state as ChartData<"line", number[], string>}
              options={options}
            />
          );
        default:
          break;
      }
    },
    []
  );
  return (
    <>
      {" "}
      {state.labels.length !== 0 ? (
        renderChart({ chartType, state, options })
      ) : (
        <NoDataContainer>
          <NoChartStyle />
          <p>No data to display</p>
        </NoDataContainer>
      )}
    </>
  );
};
export default BasicChart;
