import React, { FC, useCallback } from "react";
import { Icon, PrimaryButton } from "../Button/ButtonStyle";
import {
  CardDescription,
  CardSource,
  DataCardContent,
  DataCardHeader,
  DataCardImg,
  DataCardStyle,
  IData,
  TagList,
} from "./CardStyle";
import Arrow from "../../assets/Arrow - Right.svg";
import { TagStyle } from "../Tag/TagStyle";

export interface DataCardProps {
  data: IData;
}

const DataCard: FC<DataCardProps> = ({ data }) => {
  const formatDate = useCallback((date: string) => {
    const tempDate = new Date(date);
    const options: {} = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return tempDate.toLocaleDateString("en-US", options);
  }, []);

  return (
    <DataCardStyle>
      <DataCardImg src={data.urlToImage} alt=" of news"></DataCardImg>
      <DataCardContent>
        <DataCardHeader>
          {formatDate(data.publishedAt)}
          <TagList>
            {data.tags.map((tag: string, key: number) => (
              <TagStyle key={key}>{tag}</TagStyle>
            ))}
          </TagList>
        </DataCardHeader>
        <h3>{data.title}</h3>
        <CardSource>{data.source.name}</CardSource>
        <CardDescription>{data.description}</CardDescription>
        <div style={{ float: "right" }}>
          <PrimaryButton>
            NAVIGATE TO DISPATCH
            <Icon src={Arrow} />
          </PrimaryButton>
        </div>
      </DataCardContent>
    </DataCardStyle>
  );
};
export default DataCard;
