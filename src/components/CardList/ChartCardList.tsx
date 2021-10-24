import React, { FC } from "react";
import {
  BarChartOptions,
  BarChartState,
  DoughnutChartOptions,
  DoughnutChartState,
  LineChartOptions,
  LineChartState,
} from "../../MockData";
import ChartCard from "../Card/ChartCard";
import { ChartType } from "../Chart/ChartType";
import { ChartCardListStyle } from "./CardListStyle";
export enum ChartTitles {
  Sources = "Sources",
  Dates = "Dates",
  Tags = "Tags",
}
const ChartCardList: FC = () => {
  return (
    <ChartCardListStyle>
      <ChartCard
        title={ChartTitles.Sources}
        type={ChartType.Doughnut}
        state={DoughnutChartState}
        options={DoughnutChartOptions}
      />
      <ChartCard
        title={ChartTitles.Dates}
        type={ChartType.Line}
        state={LineChartState}
        options={LineChartOptions}
      />
      <ChartCard
        title={ChartTitles.Tags}
        type={ChartType.Bar}
        state={BarChartState}
        options={BarChartOptions}
      />
    </ChartCardListStyle>
  );
};
export default ChartCardList;
