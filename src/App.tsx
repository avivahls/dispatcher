import React, { useEffect, useState } from "react";
import "./App.css";
import HeaderElement from "./components/Header/Header";
import FilterBar from "./components/FilterBar/FilterBar";
import { Dashboard } from "./components/CardList/CardListStyle";
import axios from "axios";
import ChartCardList from "./components/CardList/ChartCardList";
import DataCardList from "./components/CardList/DataCardList";
import Welcome from "./components/Welcome/Welcome";
import SideBar from "./components/SideBar/SideBar";

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
    // <>
    //   <SideBar isShown={isShown} />
    //   <div
    //     style={
    //       isShown
    //         ? {
    //             backgroundColor: "#303032",
    //             opacity: "0.7",
    //             zIndex: 4,
    //           }
    //         : {}
    //     }
    //   >
    //     <HeaderElement />
    //     <FilterBar />
    //     <div
    //       style={{
    //         border: "1px solid #D9DBE9",
    //         width: "70%",
    //         margin: "0 auto",
    //       }}
    //     ></div>
    //     <h2 onClick={onToggle} style={{ width: "70%", margin: "10px auto" }}>
    //       Top Headline in Israel
    //     </h2>
    //     <Dashboard>
    //       <DataCardList news={articles} />
    //       <ChartCardList></ChartCardList>
    //     </Dashboard>
    //   </div>
    // </>

    <Welcome />
  );
}

export default App;
