import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../../store/news-actions";
import ChartCardList from "../CardList/ChartCardList";
import DataCardList from "../CardList/DataCardList";
import FilterBar from "../FilterBar/FilterBar";
import HeaderElement from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { Dashboard, DashboardDivider, DashboardTitle } from "./HomeStyle";

const Home: FC = () => {
  const [isShown, setIsShown] = useState(false);
  const articles = useSelector((state: any) => state.news.data);
  const category = useSelector((state: any) => state.news.category);
  const dispatch = useDispatch();

  const onToggle = () => {
    setIsShown((prev) => !prev);
  };
  useEffect(() => {
    dispatch(getApi());
  }, []);
  return (
    <>
      <SideBar type={category} isShown={isShown} />
      <HeaderElement />
      <FilterBar type={category} />
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
