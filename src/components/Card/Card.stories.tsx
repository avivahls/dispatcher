import { Meta, Story } from "@storybook/react";
import {
  BarChartState,
  DoughnutChartState,
  DUMMY,
  LineChartState,
} from "../../App";
import { ChartType } from "../Chart/BasicChart";
import ChartCard, { ChartCardProps } from "./ChartCard";
import DataCard, { DataCardProps } from "./DataCard";

export default {
  component: DataCard,
  title: "Components/Card",
} as Meta;

const Template1: Story<DataCardProps> = (args) => <DataCard {...args} />;
export const data = Template1.bind({});
data.args = {
  data: DUMMY,
};

const Template2: Story<ChartCardProps> = (args) => <ChartCard {...args} />;
export const chartD = Template2.bind({});
chartD.args = {
  title: "Sources",
  type: ChartType.Doughnut,
  state: DoughnutChartState,
};

const Template3: Story<ChartCardProps> = (args) => <ChartCard {...args} />;
export const chartB = Template3.bind({});
chartB.args = {
  title: "Tags",
  type: ChartType.Bar,
  state: BarChartState,
};

const Template4: Story<ChartCardProps> = (args) => <ChartCard {...args} />;
export const chartL = Template4.bind({});
chartL.args = {
  title: "Dates",
  type: ChartType.Line,
  state: LineChartState,
};
