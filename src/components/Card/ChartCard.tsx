import React, { FC } from "react";
import BasicChart from "../Chart/BasicChart";
import { ChartType, IChartData } from "../Chart/ChartType";
import { ChartCardStyle, ChartDivider } from "./CardStyle";

export interface ChartCardProps {
  title: string;
  type: ChartType;
  state: IChartData;
  options: {};
}
const ChartCard: FC<ChartCardProps> = ({ title, type, state, options }) => {
  return (
    <ChartCardStyle>
      <h2>{title}</h2>
      <ChartDivider></ChartDivider>
      <BasicChart chartType={type} state={state} options={options}></BasicChart>
    </ChartCardStyle>
  );
};
export default ChartCard;
