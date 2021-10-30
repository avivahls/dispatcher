import React, { useEffect, useState } from "react";
import "./App.css";
import HeaderElement from "./components/Header/Header";
import FilterBar from "./components/FilterBar/FilterBar";
import {
  Dashboard,
  DashboardDivider,
  DashboardTitle,
} from "./components/CardList/CardListStyle";
import axios from "axios";
import ChartCardList from "./components/CardList/ChartCardList";
import DataCardList from "./components/CardList/DataCardList";
import Welcome from "./components/Welcome/Welcome";
import SideBar from "./components/SideBar/SideBar";
import { SideDropdown } from "./components/Dropdown/SideBarDropdown";

function App() {
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
      <SideBar isShown={isShown}>
        <SideDropdown title="Sources" items={["1", "2"]} />
      </SideBar>
      <div
        style={
          isShown
            ? {
                backgroundColor: "#303032",
                opacity: "0.7",
                zIndex: 4,
              }
            : {}
        }
      >
        <HeaderElement />
        <FilterBar />
        <DashboardDivider />
        <DashboardTitle onClick={onToggle}>
          Top Headline in Israel
        </DashboardTitle>
        <Dashboard>
          <DataCardList news={articles} />
          <ChartCardList></ChartCardList>
        </Dashboard>
      </div>
    </>

    // <Welcome />
  );
}

export default App;
