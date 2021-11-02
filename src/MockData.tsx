import { BLUE, CHART_COLORS, LINE_BACKGROUND } from "./Colors";
import { IData } from "./components/Card/CardStyle";
import { IChartData } from "./components/Chart/ChartType";

export const LineChartOptions = {
  tension: 1,
  fill: {
    target: "origin",
  },
  responsive: true,
  maintainAspectRatio: false,
};
export const BarChartOptions = {
  indexAxis: "y",
  borderRadius: 100,
  responsive: true,
  maintainAspectRatio: false,
};
export const DoughnutChartOptions = {
  cutout: "80%",
  radius: "60%",
  responsive: true,
  maintainAspectRatio: false,
};

export const LineChartState: IChartData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      borderColor: BLUE,
      backgroundColor: LINE_BACKGROUND,
      data: [65, 59, 80, 81, 56],
    },
  ],
};
export const DoughnutChartState: IChartData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: CHART_COLORS,
      data: [65, 59, 80, 81, 56],
    },
  ],
};
export const BarChartState: IChartData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: BLUE,
      data: [65, 59, 80, 81, 56],
    },
  ],
};
export const DUMMY: IData = {
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
export const DUMMY2: IData = {
  source: {
    id: "cbc-news",
    name: "CBC News",
  },
  tags: ["sport", "israel", "USA"],
  author: "CBC News",
  title:
    "Knife found beneath Parliament to be returned to Algonquin nations in historic move | CBC News",
  description:
    "An ancient knife recovered during renovations on Parliament Hill will be returned to Algonquin nations. It's estimated to be 4,000 years old.",
  url:
    "http://www.cbc.ca/news/politics/parliament-knife-return-algonquin-nations-1.6214350",
  urlToImage:
    "https://i.cbc.ca/1.6077117.1624470867!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/2021-parliament-centre-block-rehabilitation-construction.JPG",
  publishedAt: "2021-10-17T16:52:24.4379934Z",
  content:
    "An ancient Indigenous knife unearthed during the renovation of Centre Block will be the first artifact found on Parliament Hill to be returned to the stewardship of the Algonquin people who live in t… [+3927 chars]",
};
