import { Meta, Story } from "@storybook/react";
import BasicChart, { ChartProps, chartState, ChartType } from "./BasicChart";


export default {
  component: BasicChart,
  title: "Components/Chart",
} as Meta;

const Template: Story<ChartProps> = (args) => <BasicChart {...args} />;
export const bar = Template.bind({});
bar.args = {
  chartType: ChartType.Bar,
  state: chartState
}


const Template1: Story<ChartProps> = (args) => <BasicChart {...args} />;
export const line = Template1.bind({});
line.args = {
  chartType: ChartType.Line,
  state: chartState
}

const Template3: Story<ChartProps> = (args) => <BasicChart {...args} />;
export const Doughnut = Template1.bind({});
Doughnut.args = {
  chartType: ChartType.Doughnut,
  state: chartState
}