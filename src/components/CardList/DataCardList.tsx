import React, { FC } from "react";
import { IData } from "../Card/CardStyle";
import DataCard from "../Card/DataCard";
import { NoDataContainer, NoDataCStyle } from "../NoData/NoDataStyle";
import { DataCardListStyle, NoDataListStyle } from "./CardListStyle";

export interface DataCardListProps {
  news: IData[];
}
const DataCardList: FC<DataCardListProps> = ({ news }) => {
  return (
    <>
      {news.length === 0 ? (
        <NoDataListStyle>
          <NoDataContainer>
            <NoDataCStyle />
            We couldn't find any matches for your query
          </NoDataContainer>
        </NoDataListStyle>
      ) : (
        <DataCardListStyle>
          {news.map((item: IData, key: number) => (
            <DataCard data={item} key={key}></DataCard>
          ))}
        </DataCardListStyle>
      )}
    </>
  );
};
export default DataCardList;
