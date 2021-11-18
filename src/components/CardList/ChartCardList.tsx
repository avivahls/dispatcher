import _ from "lodash";
import moment from "moment";
import React, { FC, useEffect, useState } from "react";
import {
  BarChartOptions,
  BarChartState,
  DoughnutChartOptions,
  DoughnutChartState,
  LineChartOptions,
  LineChartState,
} from "../../MockData";
import { IData } from "../Card/CardStyle";
import ChartCard from "../Card/ChartCard";
import { ChartType, IDoughnutData, ILineData } from "../Chart/ChartType";
import { ChartCardListStyle } from "./CardListStyle";
export enum ChartTitles {
  Sources = "Sources",
  Dates = "Dates",
  Tags = "Tags",
}
export interface ChartCardListProps {
  news: IData[];
}
const ChartCardList: FC<ChartCardListProps> = ({ news }) => {
  const [sourcesChart, setSourcesChart] = useState<IDoughnutData>(
    DoughnutChartState as IDoughnutData
  );
  const [datesChart, setDatesChart] = useState<ILineData>(
    LineChartState as ILineData
  );

  useEffect(() => {
    calcSources(news);
    calcDates(news);
  }, [news]);

  const calcDates = (news: IData[]) => {
    const data = _.groupBy(news, function (item) {
      return new Date(moment(item.publishedAt).format("MMM D"));
    });
    let months: string[] = [];
    Object.keys(data).map((item) => {
      months.push(moment(item).format("MMM D"));
    });
    setDatesChart({
      ...datesChart,
      labels: months,
      datasets: [
        {
          ...datesChart.datasets[0],
          data: Object.values(data).map((item) => {
            return item.length;
          }),
        },
      ],
    });
  };

  const calcSources = (news: IData[]) => {
    const data = _.groupBy(news, function (item) {
      return item.source.name;
    });
    setSourcesChart({
      ...sourcesChart,
      labels: Object.keys(data),
      datasets: [
        {
          ...sourcesChart.datasets[0],
          data: Object.values(data).map((item) => {
            return item.length;
          }),
        },
      ],
    });
  };

  return (
    <ChartCardListStyle>
      <ChartCard
        title={ChartTitles.Sources}
        type={ChartType.Doughnut}
        state={sourcesChart}
        options={DoughnutChartOptions}
      />
      <ChartCard
        title={ChartTitles.Dates}
        type={ChartType.Line}
        state={datesChart}
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
