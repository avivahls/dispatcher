import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApi, getSources } from "../../store/news-actions";
import { NewsGlobalState } from "../../store/news-slice";
import ChartCardList from "../CardList/ChartCardList";
import DataCardList from "../CardList/DataCardList";
import FilterBar from "../FilterBar/FilterBar";
import HeaderElement from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { Dashboard, DashboardDivider, DashboardTitle } from "./HomeStyle";

const Home: FC = () => {
  const isShown = useSelector(
    (state: NewsGlobalState) => state.news.ShowSideBar
  );
  const articles = useSelector((state: NewsGlobalState) => state.news.data);
  const category = useSelector((state: NewsGlobalState) => state.news.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSources());
    dispatch(getApi(true));
  }, [dispatch]);
  return (
    <>
      <SideBar type={category} isShown={isShown} />
      <HeaderElement />
      <FilterBar type={category} />
      <DashboardDivider />
      <DashboardTitle>
        {category === "topheadlines"
          ? "Top Headline in Israel"
          : `${articles.length} Total Result`}
      </DashboardTitle>
      <Dashboard>
        <DataCardList news={articles} />
        <ChartCardList></ChartCardList>
      </Dashboard>
    </>
  );
};
export default Home;
