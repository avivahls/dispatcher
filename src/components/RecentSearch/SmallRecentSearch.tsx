import React, { FC } from "react";
import Exit from "../../assets/exit.svg";
import {
  SmallRecentSearch,
  SmallRecentSearchItem,
  SmallRecentSearchTitle,
} from "./RecentSearchStyle";
import { RecentSearchSmallButton, SmallIcon } from "../Button/ButtonStyle";
export interface RecentSearchProps {
  items: string[];
}
const SmallScreenRecentSearch: FC<RecentSearchProps> = ({ items }) => {
  return (
    <SmallRecentSearch>
      <SmallRecentSearchTitle>
        RECENT SEARCHES
        <RecentSearchSmallButton>CLEAR</RecentSearchSmallButton>
      </SmallRecentSearchTitle>
      {items.map((item: string, key: number) => (
        <SmallRecentSearchItem key={key}>
          {item}
          <SmallIcon src={Exit}></SmallIcon>
        </SmallRecentSearchItem>
      ))}
    </SmallRecentSearch>
  );
};
export default SmallScreenRecentSearch;
