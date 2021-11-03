import React, { FC, useCallback } from "react";
import { Icon, PrimaryButton } from "../Button/ButtonStyle";
import noImage from "../../assets/noImage.png";
import moment from "moment";
import {
  CardDescription,
  CardSource,
  CardTitle,
  DataButtonContainer,
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
    const temp = moment(date).format("dddd ll");
    return temp;
  }, []);

  return (
    <DataCardStyle>
      {data.urlToImage ? (
        <DataCardImg src={data.urlToImage} alt=" of news"></DataCardImg>
      ) : (
        <img src={noImage} alt="no image icon to display" />
      )}

      <DataCardContent>
        <DataCardHeader>
          {formatDate(data.publishedAt)}
          <TagList>
            {data.tags.map((tag: string, key: number) => (
              <TagStyle key={key}>{tag}</TagStyle>
            ))}
          </TagList>
        </DataCardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardSource>{data.source.name}</CardSource>
        <CardDescription>{data.description}</CardDescription>
        <DataButtonContainer>
          <PrimaryButton onClick={() => window.open(data.url, "_blank")}>
            NAVIGATE TO DISPATCH
            <Icon src={Arrow} />
          </PrimaryButton>
        </DataButtonContainer>
      </DataCardContent>
    </DataCardStyle>
  );
};
export default DataCard;
