import React, { useEffect, useState } from "react";
import "./App.css";
import DataCardList from "./components/CardList/DataCardList";
import ChartCardList from "./components/CardList/ChartCardList";
import { Dashboard } from "./components/CardList/CardListStyle";
import { BLUE, LINE_BACKGROUND, CHART_COLORS } from "./Colors";
import { IChartData, IChartOptions } from "./components/Chart/ChartType";

///DUMMY DATA options
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

//////DUMMY DATA chartData
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

function App() {
  const [articles, setArticles] = useState([]);
  const getData = () => {
    fetch("everything.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        const arWithTags = myJson.articles.map((article: {}) => {
          return { ...article, tags: ["one", "two", "three"] };
        });
        setArticles(arWithTags);
        console.log(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Dashboard>
      <DataCardList news={articles} />
      <ChartCardList></ChartCardList>
    </Dashboard>
  );
}

export default App;
