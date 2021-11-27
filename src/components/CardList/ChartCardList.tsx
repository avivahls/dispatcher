import _ from "lodash";
import moment from "moment";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BarChartOptions,
  BarChartState,
  DoughnutChartOptions,
  DoughnutChartState,
  LineChartOptions,
  LineChartState,
} from "../../MockData";

import { newsActions, NewsGlobalState } from "../../store/news-slice";
import { ChartCardStyle, IData } from "../Card/CardStyle";
import ChartCard from "../Card/ChartCard";
import { ChartType, IDoughnutData, ILineData } from "../Chart/ChartType";
import LineLoader from "../Loader/LineLoader";
import PieLoader from "../Loader/PieLoader";
import { ChartCardListStyle } from "./CardListStyle";
export enum ChartTitles {
  Sources = "Sources",
  Dates = "Dates",
  Tags = "Tags",
}
export interface ChartCardListProps {
  loadState: boolean;
}

const ChartCardList: FC<ChartCardListProps> = ({ loadState }) => {
  // const [sourcesChart, setSourcesChart] = useState<IDoughnutData>(
  //   DoughnutChartState as IDoughnutData
  // );
  // const [datesChart, setDatesChart] = useState<ILineData>(
  //   LineChartState as ILineData
  // );
  const dispatch = useDispatch();
  const sourcesChart = useSelector(
    (state: NewsGlobalState) => state.news.sourcesChart
  );
  const datesChart = useSelector(
    (state: NewsGlobalState) => state.news.datesChart
  );
  const news = useSelector((state: NewsGlobalState) => state.news.data);
  useEffect(() => {
    calcSources(news);
    calcDates(news);
  }, [news]);

  const calcDates = (news: IData[]) => {
    news = news.slice().sort((first, second) => {
      return (
        new Date(first.publishedAt).getTime() -
        new Date(second.publishedAt).getTime()
      );
    });
    const data = _.groupBy(news, function (item) {
      return moment(new Date(item.publishedAt)).format("MMM D");
    });
    let months: string[] = [];
    Object.keys(data).forEach((item) => {
      months.push(moment(new Date(item)).format("MMM D"));
    });
    dispatch(
      newsActions.setDatesChart({
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
      })
    );
  };

  const calcSources = (news: IData[]) => {
    const data = _.groupBy(news, function (item) {
      if (item.source) return item.source.name;
    });
    dispatch(
      newsActions.setSourcesChart({
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
      })
    );
  };

  return (
    <ChartCardListStyle>
      {loadState && (
        <>
          <ChartCardStyle type={ChartType.Doughnut}>
            <PieLoader />
          </ChartCardStyle>
          <ChartCardStyle type={ChartType.Line}>
            <LineLoader />
          </ChartCardStyle>
        </>
      )}
      {!loadState && (
        <>
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
        </>
      )}
      {/* <ChartCard
        title={ChartTitles.Tags}
        type={ChartType.Bar}
        state={BarChartState}
        options={BarChartOptions}
      /> */}
    </ChartCardListStyle>
  );
};
export default ChartCardList;
