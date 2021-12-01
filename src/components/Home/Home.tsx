import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApi, getSources } from "../../store/news-actions";
import { newsActions, NewsGlobalState } from "../../store/news-slice";
import ChartCardList from "../CardList/ChartCardList";
import DataCardList from "../CardList/DataCardList";
import FilterBar from "../FilterBar/FilterBar";
import HeaderElement from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Modal from "react-modal";
import {
  Dashboard,
  DashboardDivider,
  DashboardTitle,
  DashboardTitleTotal,
} from "./HomeStyle";
import { customStyles } from "../../utils/layouts";

const Home: FC = () => {
  const isShown = useSelector(
    (state: NewsGlobalState) => state.news.ShowSideBar
  );
  const isLoading = useSelector(
    (state: NewsGlobalState) => state.news.isLoading
  );
  const isSmallSearch = useSelector(
    (state: NewsGlobalState) => state.news.smallSearchMode
  );
  const errorMessage = useSelector(
    (state: NewsGlobalState) => state.news.errorMessage
  );
  const articles = useSelector((state: NewsGlobalState) => state.news.data);
  const category = useSelector((state: NewsGlobalState) => state.news.category);
  const total = useSelector(
    (state: NewsGlobalState) => state.news.totalResults
  );
  const isFirst = useSelector(
    (state: NewsGlobalState) => state.news.isFirstData
  );
  const dispatch = useDispatch();
  const error = useSelector(
    (state: NewsGlobalState) => state.news.errorMessage
  );

  function closeModal() {
    dispatch(newsActions.setErrorMessage(""));
  }
  useEffect(() => {
    dispatch(getSources());
    dispatch(newsActions.changeLoading(true));
    dispatch(newsActions.setPageNumber(1));
    dispatch(newsActions.addOptions({ category: "country", value: "il" }));
    dispatch(getApi(true));
  }, []);

  return (
    <>
      <Modal
        ariaHideApp={false}
        isOpen={error !== ""}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ borderRadius: "20px", textAlign: "center" }}>
          <h2>Oops!</h2>
          <p>{errorMessage}</p>
        </div>
      </Modal>
      <SideBar type={category} isShown={isShown} />
      <HeaderElement />
      <FilterBar isFirst={isFirst} type={category} />
      <DashboardDivider />
      {isFirst ? (
        <DashboardTitle>Top Headlines in Israel</DashboardTitle>
      ) : total > 0 ? (
        <DashboardTitleTotal>
          {articles.length} out of {total} results
        </DashboardTitleTotal>
      ) : (
        <DashboardTitleTotal></DashboardTitleTotal>
      )}
      <Dashboard isSmall={isSmallSearch}>
        <DataCardList loadState={isLoading} />
        <ChartCardList loadState={isLoading} />
      </Dashboard>
    </>
  );
};
export default Home;
