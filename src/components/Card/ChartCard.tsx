import React, { FC } from "react";
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
import { CHART_COLORS } from "../../utils/colors";
import _ from "lodash";
export interface ChartCardProps {
  title: string;
  type: ChartType;
  state: IChartData;
  options: {};
}
const sortSourcesByPercentage = (state: any) => {
  let tempArray: any[] = [];
  state.labels.forEach((label: string, index: number) => {
    tempArray[index] = {
      label: label,
      value: state.datasets[0].data[index],
    };
  });
  return _.orderBy(tempArray, ["value"], ["desc"]);
};
const renderSourcesLabels = (state: any, totalSum: number) => {
  let dataa = sortSourcesByPercentage(state);
  return (
    <LegendListContainer>
      {dataa.map((item: any, index: number) => (
        <LegendContainer key={index}>
          <TitleAndBullet>
            <LegendBullet
              color={CHART_COLORS[index === 0 ? index : index % 4]}
            />
            <LegendTitle>{item.label}</LegendTitle>
          </TitleAndBullet>
          <LegendData>{Math.round((item.value * 100) / totalSum)}%</LegendData>
        </LegendContainer>
      ))}
    </LegendListContainer>
  );
};
const ChartCard: FC<ChartCardProps> = ({ title, type, state, options }) => {
  let totalSum = 0;
  state.datasets[0].data.forEach((item: number) => {
    totalSum += item;
  });
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
          {renderSourcesLabels(state, totalSum)}
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
