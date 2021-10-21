import React, { FC } from "react";
import {
  BarChartOptions,
  BarChartState,
  DoughnutChartOptions,
  DoughnutChartState,
  LineChartOptions,
  LineChartState,
} from "../../App";
import ChartCard from "../Card/ChartCard";
import { ChartType } from "../Chart/ChartType";
import { ChartCardListStyle } from "./CardListStyle";

const ChartCardList: FC = () => {
  return (
    <ChartCardListStyle>
      <ChartCard
        title="Sources"
        type={ChartType.Doughnut}
        state={DoughnutChartState}
        options={DoughnutChartOptions}
      />
      <ChartCard
        title="Dates"
        type={ChartType.Line}
        state={LineChartState}
        options={LineChartOptions}
      />
      <ChartCard
        title="Tags"
        type={ChartType.Bar}
        state={BarChartState}
        options={BarChartOptions}
      />
    </ChartCardListStyle>
  );
};
export default ChartCardList;
