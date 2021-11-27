import React, { FC } from "react";
import Exit from "../../assets/exit.svg";
import {
  RecentSearchContainer,
  RecentSearchItem,
  RecentSearchTitle,
  SmallRecentSearch,
  SmallRecentSearchItem,
  SmallRecentSearchTitle,
} from "./RecentSearchStyle";
import {
  RecentSearchSmallButton,
  SmallIcon,
  TextButton,
} from "../Button/ButtonStyle";
export interface RecentSearchProps {
  isSmallScrean: boolean;
  items: string[];
  deleteHandler: (item: string) => void;
  clearHandler: () => void;
  setValueHandler: (item: string) => void;
}
const RecentSearch: FC<RecentSearchProps> = ({
  isSmallScrean,
  items,
  deleteHandler,
  clearHandler,
  setValueHandler,
}) => {
  const renderRecentSearchs = () => {
    return isSmallScrean ? (
      <>
        <SmallRecentSearch>
          <SmallRecentSearchTitle>
            RECENT SEARCHES
            <RecentSearchSmallButton onClick={clearHandler}>
              CLEAR
            </RecentSearchSmallButton>
          </SmallRecentSearchTitle>
          {items.map((item: string, key: number) => (
            <SmallRecentSearchItem key={key}>
              <p onClick={() => setValueHandler(item)}> {item}</p>
              <SmallIcon
                isFiltered={false}
                isSmall={false}
                onClick={() => deleteHandler(item)}
                src={Exit}
              ></SmallIcon>
            </SmallRecentSearchItem>
          ))}
        </SmallRecentSearch>
      </>
    ) : (
      <RecentSearchContainer>
        <RecentSearchTitle style={{ marginRight: "10px" }}>
          RECENT SEARCHES
          <TextButton onClick={clearHandler}>Clear</TextButton>
        </RecentSearchTitle>
        {items.length > 0 &&
          items.map((item: string, key: number) => (
            <RecentSearchItem key={key}>
              <p onClick={() => setValueHandler(item)}> {item}</p>
              <SmallIcon
                isFiltered={false}
                isSmall={false}
                onClick={() => deleteHandler(item)}
                src={Exit}
              ></SmallIcon>
            </RecentSearchItem>
          ))}
      </RecentSearchContainer>
    );
  };
  return renderRecentSearchs();
};
export default RecentSearch;
