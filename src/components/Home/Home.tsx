import React, { FC, useEffect, useState } from "react";
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
import { GREY, MODAL } from "../../style/Colors";

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
  const [modalIsOpen, setIsOpen] = useState(true);
  const error = useSelector(
    (state: NewsGlobalState) => state.news.errorMessage
  );
  function openModal() {
    setIsOpen(true);
  }
  const customStyles = {
    overlay: { zIndex: 1000, background: MODAL },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      color: GREY,
      outline: "none",
      borderRadius: "20px",
      background: "#fff",
      transform: "translate(-50%, -50%)",
    },
  };
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
      ) : (
        total > 0 && (
          <DashboardTitleTotal>
            {articles.length} / {total} Total Result
          </DashboardTitleTotal>
        )
      )}
      <Dashboard isSmall={isSmallSearch}>
        <DataCardList loadState={isLoading} />
        <ChartCardList loadState={isLoading} />
      </Dashboard>
    </>
  );
};
export default Home;
