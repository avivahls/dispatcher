import React, { FC } from "react";
import { IData } from "../Card/CardStyle";
import DataCard from "../Card/DataCard";
import { NoDataContainer, NoDataCStyle } from "../NoData/NoDataStyle";
import { DataCardListStyle } from "./CardListStyle";

export interface DataCardListProps {
  news: IData[];
}
const DataCardList: FC<DataCardListProps> = ({ news }) => {
  return (
    <DataCardListStyle>
      {news.length === 0 ? (
        <>
          <NoDataContainer>
            <NoDataCStyle />
            <p>We couldn't find any matches for your query</p>
          </NoDataContainer>
        </>
      ) : (
        <>
          {news.map((item: IData, key: number) => (
            <DataCard data={item} key={key}></DataCard>
          ))}
        </>
      )}
    </DataCardListStyle>
  );
};
export default DataCardList;
