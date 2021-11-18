import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApi, getSources } from "../../store/news-actions";
import { newsActions, NewsGlobalState } from "../../store/news-slice";
import ChartCardList from "../CardList/ChartCardList";
import DataCardList from "../CardList/DataCardList";
import FilterBar from "../FilterBar/FilterBar";
import HeaderElement from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import {
  Dashboard,
  DashboardDivider,
  DashboardTitle,
  DashboardTitleTotal,
} from "./HomeStyle";

const Home: FC = () => {
  const isShown = useSelector(
    (state: NewsGlobalState) => state.news.ShowSideBar
  );
  const isLoading = useSelector(
    (state: NewsGlobalState) => state.news.isLoading
  );
  const articles = useSelector((state: NewsGlobalState) => state.news.data);
  const category = useSelector((state: NewsGlobalState) => state.news.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSources());
    dispatch(newsActions.changeLoading(true));
    dispatch(getApi(true, 1));
  }, [dispatch]);

  return (
    <>
      <SideBar type={category} isShown={isShown} />
      <HeaderElement />
      <FilterBar type={category} />
      <DashboardDivider />
      {category === "topheadlines" ? (
        <DashboardTitle>Top Headlines</DashboardTitle>
      ) : (
        <DashboardTitleTotal>
          {articles.length} Total Result
        </DashboardTitleTotal>
      )}
      <Dashboard>
        <DataCardList loadState={isLoading} news={articles} />
        <ChartCardList news={articles} />
      </Dashboard>
    </>
  );
};
export default Home;
