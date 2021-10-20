import { Meta, Story } from "@storybook/react";
import BasicChart, {
  BarChartState,
  ChartProps,
  ChartType,
  DoughnutChartState,
  LineChartState,
} from "./BasicChart";

export default {
  component: BasicChart,
  title: "Components/Chart",
} as Meta;

const Template: Story<ChartProps> = (args) => <BasicChart {...args} />;
export const bar = Template.bind({});
bar.args = {
  chartType: ChartType.Bar,
  state: BarChartState,
};

const Template1: Story<ChartProps> = (args) => <BasicChart {...args} />;
export const line = Template1.bind({});
line.args = {
  chartType: ChartType.Line,
  state: LineChartState,
};

const Template3: Story<ChartProps> = (args) => <BasicChart {...args} />;
export const Doughnut = Template3.bind({});
Doughnut.args = {
  chartType: ChartType.Doughnut,
  state: DoughnutChartState,
};
