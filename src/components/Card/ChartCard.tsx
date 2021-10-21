import React, { FC } from "react";
import BasicChart, { ChartType } from "../Chart/BasicChart";
import { ChartCardStyle, ChartDivider } from "./CardStyle";

export interface ChartCardProps {
  title: string;
  type: ChartType;
  state: any;
  options: any;
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
