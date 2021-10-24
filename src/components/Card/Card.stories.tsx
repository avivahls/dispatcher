import { Meta, Story } from "@storybook/react";
import {
  BarChartOptions,
  BarChartState,
  DoughnutChartOptions,
  DoughnutChartState,
  DUMMY,
  LineChartOptions,
  LineChartState,
} from "../../MockData";
import { ChartType } from "../Chart/ChartType";
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
  options: DoughnutChartOptions,
};

const Template3: Story<ChartCardProps> = (args) => <ChartCard {...args} />;
export const chartB = Template3.bind({});
chartB.args = {
  title: "Tags",
  type: ChartType.Bar,
  state: BarChartState,
  options: BarChartOptions,
};

const Template4: Story<ChartCardProps> = (args) => <ChartCard {...args} />;
export const chartL = Template4.bind({});
chartL.args = {
  title: "Dates",
  type: ChartType.Line,
  state: LineChartState,
  options: LineChartOptions,
};
