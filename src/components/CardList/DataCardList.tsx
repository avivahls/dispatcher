import React, { FC } from "react";
import { IData } from "../Card/CardStyle";
import DataCard from "../Card/DataCard";
import MyLoader from "../Loader/loader";
import { NoDataContainer, NoDataCStyle } from "../NoData/NoDataStyle";
import { DataCardListStyle, NoDataListStyle } from "./CardListStyle";

export interface DataCardListProps {
  news: IData[];
  loadState: boolean;
}

const DataCardList: FC<DataCardListProps> = ({ news, loadState }) => {
  // const [pageNo,setPageNo] = useState(1);
  // const firstEvent = (e) => {
  //   var bottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;
  //   if(bottom){
  //     let pg = pageNo + 1;
  //     setPageNo(pg);
  //   }
  // }
  return (
    <>
      {!loadState && news.length === 0 ? (
        <NoDataListStyle>
          <NoDataContainer>
            <NoDataCStyle />
            We couldn't find any matches for your query
          </NoDataContainer>
        </NoDataListStyle>
      ) : (
        <DataCardListStyle>
          {loadState ? (
            <>
              <MyLoader isMobileMode={false} />
              <MyLoader isMobileMode={false} />
              <MyLoader isMobileMode={false} />
            </>
          ) : (
            news.map((item: IData, key: number) => (
              <DataCard data={item} key={key}></DataCard>
            ))
          )}
        </DataCardListStyle>
      )}
    </>
  );
};
export default DataCardList;
