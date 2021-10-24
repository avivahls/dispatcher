import React, { useEffect, useState } from "react";
import "./App.css";
import { Dashboard } from "./components/CardList/CardListStyle";
import axios from "axios";
import ChartCardList from "./components/CardList/ChartCardList";
import DataCardList from "./components/CardList/DataCardList";

function App() {
  const [articles, setArticles] = useState([]);
  async function getData() {
    try {
      const response = await axios.get<any>("everything.json");
      const arWithTags = response.data.articles.map((article: {}) => {
        return { ...article, tags: ["one", "two", "three"] };
      });
      setArticles(arWithTags);
    } catch (e) {
      console.log(e);
    }
  }
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
