import { Meta, Story } from "@storybook/react";
import {
  BarChartOptions,
  BarChartState,
  DoughnutChartOptions,
  DoughnutChartState,
  LineChartOptions,
  LineChartState,
} from "../../App";
import BasicChart, { ChartProps } from "./BasicChart";
import { ChartType } from "./ChartType";

export default {
  component: BasicChart,
  title: "Components/Chart",
} as Meta;

const Template: Story<ChartProps> = (args) => <BasicChart {...args} />;
export const bar = Template.bind({});
bar.args = {
  chartType: ChartType.Bar,
  state: BarChartState,
  options: BarChartOptions,
};

const Template1: Story<ChartProps> = (args) => <BasicChart {...args} />;
export const line = Template1.bind({});
line.args = {
  chartType: ChartType.Line,
  state: LineChartState,
  options: LineChartOptions,
};

const Template3: Story<ChartProps> = (args) => <BasicChart {...args} />;
export const Doughnut = Template3.bind({});
Doughnut.args = {
  chartType: ChartType.Doughnut,
  state: DoughnutChartState,
  options: DoughnutChartOptions,
};
