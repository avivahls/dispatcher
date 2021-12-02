import React, { FC } from "react";
import { Icon, PrimaryButton } from "../Button/ButtonStyle";
import noImage from "../../assets/noPhoto.jpeg";
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
} from "./CardStyle";
import Arrow from "../../assets/Arrow - Right.svg";

export interface DataCardProps {
  data: IData;
}

const DataCard: FC<DataCardProps> = ({ data }) => {
  const formatDate = (date: string) => {
    const temp = moment(new Date(date)).format("dddd ll");
    return temp;
  };
  const containsHeb = (title: string) => {
    return /[\u0590-\u05FF]/.test(title);
  };
  return (
    <DataCardStyle>
      {data.urlToImage &&
      data.urlToImage !== "null" &&
      data.urlToImage !== "" ? (
        <DataCardImg src={data.urlToImage} alt=" of news"></DataCardImg>
      ) : (
        <DataCardImg src={noImage} alt="handele empty" />
      )}

      <DataCardContent>
        <DataCardHeader>{formatDate(data.publishedAt)}</DataCardHeader>
        <CardTitle isHebrew={containsHeb(data.title)}>{data.title}</CardTitle>
        <CardSource>{data.source && data.source.name}</CardSource>
        <CardDescription isHebrew={containsHeb(data.description)}>
          {data.description}
        </CardDescription>
        <DataButtonContainer>
          <PrimaryButton onClick={() => window.open(data.url, "_blank")}>
            NAVIGATE TO DISPATCH
            <Icon isFiltered={false} isSmall={false} src={Arrow} />
          </PrimaryButton>
        </DataButtonContainer>
      </DataCardContent>
    </DataCardStyle>
  );
};
export default DataCard;
