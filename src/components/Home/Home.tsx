import axios from "axios";
import React, { FC, useEffect, useState } from "react";

import ChartCardList from "../CardList/ChartCardList";
import DataCardList from "../CardList/DataCardList";
import FilterBar from "../FilterBar/FilterBar";
import { CatergoryType } from "../FilterBar/FilterBarStyle";
import HeaderElement from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { Dashboard, DashboardDivider, DashboardTitle } from "./HomeStyle";

const Home: FC = () => {
  const [isShown, setIsShown] = useState(false);
  const [articles, setArticles] = useState([]);

  const onToggle = () => {
    setIsShown((prev) => !prev);
  };
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
    <>
      <SideBar type={CatergoryType.topHeadlines} isShown={isShown} />
      <HeaderElement />
      <FilterBar type={CatergoryType.topHeadlines} />
      <DashboardDivider />
      <DashboardTitle onClick={onToggle}>Top Headline in Israel</DashboardTitle>
      <Dashboard>
        <DataCardList news={articles} />
        <ChartCardList></ChartCardList>
      </Dashboard>
    </>
  );
};
export default Home;
