import React, { FC } from "react";
import Exit from "../../assets/exit.svg";
import {
  RecentSearchContainer,
  RecentSearchItem,
  RecentSearchTitle,
} from "./RecentSearchStyle";
import { SmallIcon, TextButton } from "../Button/ButtonStyle";
export interface RecentSearchProps {
  items: string[];
}
const RecentSearch: FC<RecentSearchProps> = ({ items }) => {
  return (
    <RecentSearchContainer>
      <RecentSearchTitle>
        RECENT SEARCHES
        <TextButton>Clear</TextButton>
      </RecentSearchTitle>
      {items.map((item: string, key: number) => (
        <RecentSearchItem key={key}>
          {item}
          <SmallIcon src={Exit}></SmallIcon>
        </RecentSearchItem>
      ))}
    </RecentSearchContainer>
  );
};
export default RecentSearch;
