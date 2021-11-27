import React, { FC, useCallback } from "react";
import BasicChart from "../Chart/BasicChart";
import { ChartType, IChartData } from "../Chart/ChartType";
import { ChartCardStyle, ChartCardTitle, ChartDivider } from "./CardStyle";
import {
  LegendContainer,
  LegendListContainer,
  TitleAndBullet,
  LegendBullet,
  LegendData,
  LegendTitle,
} from "../Chart/ChartStyle";
import { CHART_COLORS } from "../../style/Colors";
import PieLoader from "../Loader/PieLoader";
import LineLoader from "../Loader/LineLoader";
import { stringify } from "querystring";
export interface ChartCardProps {
  title: string;
  type: ChartType;
  state: IChartData;
  options: {};
}

const ChartCard: FC<ChartCardProps> = ({ title, type, state, options }) => {
  let totalSum = 0;
  state.datasets[0].data.forEach((item: number) => {
    totalSum += item;
  });
  const sortSourcesByPercentage = (state: any, labels: any) => {
    const tempArray: any[] = [];
    labels.map((label: string, index: number) => {
      tempArray.push({
        label: label,
        value: state.datasets[0].data[index] * 100,
      });
    });
    tempArray.sort((a, b) => {
      return a.value - b.value;
    });
    return tempArray.map((item) => item.label);
  };
  return (
    <ChartCardStyle type={type}>
      {type === ChartType.Doughnut && (
        <>
          <ChartCardTitle>{title}</ChartCardTitle>
          <ChartDivider></ChartDivider>
          {state.labels.length > 0 && (
            <div
              style={{
                width: "40%",
                alignSelf: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BasicChart
                chartType={type}
                state={state}
                options={options}
              ></BasicChart>
            </div>
          )}
          {state.labels.length === 0 && (
            <BasicChart
              chartType={type}
              state={state}
              options={options}
            ></BasicChart>
          )}
          <LegendListContainer>
            {sortSourcesByPercentage(state, state.labels).map(
              (label, index) => (
                <LegendContainer>
                  <TitleAndBullet>
                    <LegendBullet
                      color={CHART_COLORS[index === 0 ? index : index % 4]}
                    />
                    <LegendTitle>{label}</LegendTitle>
                  </TitleAndBullet>
                  <LegendData>
                    {Math.round(
                      (state.datasets[0].data[index] * 100) / totalSum
                    )}
                    %
                  </LegendData>
                </LegendContainer>
              )
            )}
          </LegendListContainer>
        </>
      )}
      {type !== ChartType.Doughnut && (
        <>
          <ChartCardTitle>{title}</ChartCardTitle>
          <ChartDivider></ChartDivider>
          <BasicChart
            chartType={type}
            state={state}
            options={options}
          ></BasicChart>
        </>
      )}
    </ChartCardStyle>
  );
};
export default ChartCard;
