import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import {
  InputStyle,
  SearchAndRecentSmall,
  SearchDivider,
  SmallSearchStyle,
} from "./SearchStyle";
import Back from "../../assets/back.svg";
import { SideBarIcon } from "../SideBar/SideBarStyle";
import useDebounce from "../../hooks/useDebounce";
import { newsActions } from "../../store/news-slice";
import { getApi } from "../../store/news-actions";
import { useDispatch } from "react-redux";
import _ from "lodash";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Icon, SideBarButton, SmallIcon } from "../Button/ButtonStyle";
import Exit from "../../assets/exit.svg";
import Search from "../../assets/search.svg";

import RecentSearch from "../RecentSearch/RecentSearch";
import { IconsContainer } from "../Header/HeaderStyle";

export interface SmallScreenProps {
  onBackClick: () => void;
  onViewResults: () => void;
}
const SmallSearch: FC<SmallScreenProps> = ({ onBackClick, onViewResults }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchMode, setSearchMode] = useState(false);

  const inputValue = useRef<HTMLInputElement>(null);
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);
  const dispatch = useDispatch();
  const [recentSearchs, setRecentSearchs] = useLocalStorage("recent", []);

  useEffect(() => {
    dispatch(newsActions.changeSearchValue(debouncedSearchTerm));
    if (debouncedSearchTerm !== "") {
      recentSearchs.length === 0
        ? setRecentSearchs([debouncedSearchTerm] as never[])
        : !recentSearchs.includes(debouncedSearchTerm as never) &&
          setRecentSearchs([...recentSearchs, debouncedSearchTerm] as never[]);
    }
  }, [debouncedSearchTerm, dispatch]);
  const handleDeleteIcon = useCallback(
    (item: string) => {
      setRecentSearchs(recentSearchs.filter((prev) => prev !== item));
    },
    [recentSearchs]
  );
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      setSearchMode(true);
      dispatch(newsActions.changeSearchValue(searchTerm));
      dispatch(getApi(false, 1));
      if (inputValue.current)
        inputValue.current.value = `"${inputValue.current.value.toUpperCase()}"`;
    }
  };
  const setSearchValue = useCallback((item: string) => {
    if (inputValue.current) inputValue.current.value = item;
    setSearchTerm(item);
  }, []);
  const clearRecentSearchs = useCallback(() => {
    setRecentSearchs([]);
  }, [setRecentSearchs]);
  return (
    <SearchAndRecentSmall>
      <SmallSearchStyle>
        <p>
          <SideBarIcon src={Back} onClick={onBackClick} />
          <InputStyle
            ref={inputValue}
            onKeyDown={handleKeyDown.bind(this)}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setSearchMode(false);
              setSearchTerm((e.target as HTMLInputElement).value);
            }}
          ></InputStyle>
        </p>
        <IconsContainer>
          {searchTerm !== "" && !searchMode && (
            <SmallIcon
              onClick={() => {
                if (inputValue.current) {
                  inputValue.current.value = "";
                  setSearchTerm("");
                }
              }}
              src={Exit}
            ></SmallIcon>
          )}
          {searchMode && <Icon src={Search}></Icon>}
        </IconsContainer>
        {searchMode && <SearchDivider />}
      </SmallSearchStyle>
      {!searchMode && (
        <RecentSearch
          isSmallScrean={true}
          deleteHandler={handleDeleteIcon}
          clearHandler={clearRecentSearchs}
          setValueHandler={setSearchValue}
          items={recentSearchs}
        ></RecentSearch>
      )}
    </SearchAndRecentSmall>
  );
};
export default SmallSearch;
