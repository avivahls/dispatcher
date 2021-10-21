import { Meta, Story } from "@storybook/react";
import {
  BarChartOptions,
  BarChartState,
  DoughnutChartOptions,
  DoughnutChartState,
  LineChartOptions,
  LineChartState,
} from "../../App";
import { ChartType } from "../Chart/ChartType";
import { IData } from "./CardStyle";
import ChartCard, { ChartCardProps } from "./ChartCard";
import DataCard, { DataCardProps } from "./DataCard";

const DUMMY: IData = {
  source: {
    id: "fox-news",
    name: "Fox News",
  },
  tags: ["sport", "israel", "USA"],
  author: "Fox News",
  title:
    "Dr. Fauci on whether politics of COVID boosters has gotten ahead of public health",
  description:
    "Dr. Anthony Fauci, the top disease expert in the U.S., discusses COVID-19 vaccines and booster shots on 'Fox News Sunday.'",
  url: "https://video.foxnews.com/v/6277550241001/",
  urlToImage:
    "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/24a41613-2939-4265-abed-168ab88e8665/97b2528a-fc7d-4d8f-bfd4-248c8c43d0d9/1280x720/match/image.jpg",
  publishedAt: "2021-06-17T17:22:20.289559Z",
  content: null,
};
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
