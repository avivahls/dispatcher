import React, { FC } from "react";
import { IData } from "../Card/CardStyle";
import DataCard from "../Card/DataCard";
import { DataCardListStyle } from "./CardListStyle";

export interface DataCardListProps {
  news: IData[];
}
const DataCardList: FC<DataCardListProps> = ({ news }) => {
  return (
    <DataCardListStyle>
      {news.map((item: IData, key: number) => (
        <DataCard data={item} key={key}></DataCard>
      ))}
    </DataCardListStyle>
  );
};
export default DataCardList;
