import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsActions, NewsGlobalState } from "../../store/news-slice";
import { IData } from "../Card/CardStyle";
import DataCard from "../Card/DataCard";
import MyLoader from "../Loader/loader";
import { NoDataContainer, NoDataCStyle } from "../NoData/NoDataStyle";
import { DataCardListStyle, NoDataListStyle } from "./CardListStyle";
import InfiniteScroll from "react-infinite-scroll-component";
import { getApi } from "../../store/news-actions";
import { useAlert } from "react-alert";

export interface DataCardListProps {
  loadState: boolean;
}

const DataCardList: FC<DataCardListProps> = ({ loadState }) => {
  const dispatch = useDispatch();
  const moreToLoad = useSelector(
    (state: NewsGlobalState) => state.news.moreDataToScroll
  );
  const pageNumber = useSelector(
    (state: NewsGlobalState) => state.news.pageNumber
  );
  const news = useSelector((state: NewsGlobalState) => state.news.data);
  const error = useSelector(
    (state: NewsGlobalState) => state.news.errorMessage
  );
  const nextData = () => {
    const temp = pageNumber + 1;
    dispatch(newsActions.setPageNumber(temp));
    dispatch(getApi(false));
  };
  return (
    <>
      {!loadState && news.length === 0 ? (
        <NoDataListStyle>
          <NoDataContainer>
            <NoDataCStyle />
            {error === "" && "We couldn't find any matches for your query"}
          </NoDataContainer>
        </NoDataListStyle>
      ) : (
        <DataCardListStyle id="scrollableDiv">
          {loadState ? (
            <>
              <MyLoader isMobileMode={false} />
              <MyLoader isMobileMode={false} />
              <MyLoader isMobileMode={false} />
            </>
          ) : (
            <InfiniteScroll
              dataLength={news.length}
              next={nextData}
              hasMore={moreToLoad}
              loader={<p>loading...</p>}
              scrollableTarget="scrollableDiv"
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {news.map((item: IData, key: number) => (
                <DataCard data={item} key={key}></DataCard>
              ))}
            </InfiniteScroll>
          )}
        </DataCardListStyle>
      )}
    </>
  );
};
export default DataCardList;
