import React, { FC, useCallback, useEffect, useRef } from "react";
import {
  InputStyle,
  SearchAndRecentSmall,
  SmallSearchStyle,
} from "./SearchStyle";
import Back from "../../assets/back.svg";
import { SideBarIcon } from "../SideBar/SideBarStyle";
import { newsActions, NewsGlobalState } from "../../store/news-slice";
import { getApi } from "../../store/news-actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Icon, SmallIcon } from "../Button/ButtonStyle";
import Exit from "../../assets/exit.svg";
import Search from "../../assets/search.svg";

import RecentSearch from "../RecentSearch/RecentSearch";
import { IconsContainer } from "../Header/HeaderStyle";

export interface SmallScreenProps {
  isSearch: boolean;
  onBackClick: () => void;
  onViewResults: () => void;
}
const SmallSearch: FC<SmallScreenProps> = ({
  onBackClick,
  onViewResults,
  isSearch,
}) => {
  // const [searchTerm, setSearchTerm] = useState<string>("");
  // const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);
  const searchMode = useSelector(
    (state: NewsGlobalState) => state.news.smallSearchMode
  );
  const inputValue = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [recentSearchs, setRecentSearchs] = useLocalStorage("recent", []);

  // useEffect(() => {
  //   dispatch(newsActions.changeSearchValue(debouncedSearchTerm));
  //   if (debouncedSearchTerm !== "") {
  //     recentSearchs.length === 0
  //       ? setRecentSearchs([debouncedSearchTerm] as never[])
  //       : !recentSearchs.includes(debouncedSearchTerm as never) &&
  //         setRecentSearchs([...recentSearchs, debouncedSearchTerm] as never[]);
  //   }
  // }, [debouncedSearchTerm, dispatch]);
  useEffect(() => {
    dispatch(newsActions.changeSearchValue(""));
  }, []);
  useEffect(() => {
    dispatch(newsActions.changeSearchValue(inputValue?.current?.value));
    if (inputValue?.current?.value !== "") {
      recentSearchs.length === 0
        ? setRecentSearchs([inputValue?.current?.value] as never[])
        : !recentSearchs.includes(inputValue?.current?.value as never) &&
          setRecentSearchs([
            ...recentSearchs,
            inputValue?.current?.value,
          ] as never[]);
    }
  }, [inputValue?.current]);
  const handleDeleteIcon = useCallback(
    (item: string) => {
      setRecentSearchs(recentSearchs.filter((prev) => prev !== item));
    },
    [recentSearchs]
  );
  const search = () => {
    dispatch(newsActions.setSmallSearchMode(true));
    dispatch(newsActions.changeSearchValue(inputValue?.current?.value));
    if (inputValue?.current?.value !== "") {
      recentSearchs.length === 0
        ? setRecentSearchs([inputValue?.current?.value] as never[])
        : !recentSearchs.includes(inputValue?.current?.value as never) &&
          setRecentSearchs([
            ...recentSearchs,
            inputValue?.current?.value,
          ] as never[]);
    }
    dispatch(newsActions.setPageNumber(1));
    dispatch(getApi(false));
  };
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      search();
      if (inputValue.current)
        inputValue.current.value = `"${inputValue.current.value.toUpperCase()}"`;
    } else {
      if (inputValue.current)
        inputValue.current.value = `${inputValue.current.value}`;
    }
  };
  const setSearchValue = (item: string) => {
    if (inputValue.current) inputValue.current.value = item;
    search();
    if (inputValue.current)
      inputValue.current.value = `"${inputValue.current.value.toUpperCase()}"`;
  };
  const clearRecentSearchs = useCallback(() => {
    setRecentSearchs([]);
  }, [setRecentSearchs]);
  return (
    <SearchAndRecentSmall isSearch={isSearch}>
      <SmallSearchStyle isSearchMode={searchMode}>
        <p>
          <SideBarIcon
            style={{ width: "24px", height: "24px" }}
            src={Back}
            onClick={onBackClick}
          />
          <InputStyle
            ref={inputValue}
            onKeyDown={handleKeyDown}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              dispatch(newsActions.setSmallSearchMode(false));
              if ((e.target as HTMLInputElement).value === "") {
                search();
              } else if (
                String(inputValue?.current?.value).substr(0, 1) === '"'
              ) {
                if (inputValue.current)
                  inputValue.current.value = String(inputValue.current.value)
                    .toLowerCase()
                    .substr(1);
              }
            }}
          ></InputStyle>
        </p>
        <IconsContainer>
          {inputValue?.current?.value !== "" && !searchMode && (
            <SmallIcon
              isFiltered={false}
              isSmall={false}
              onClick={() => {
                if (inputValue?.current?.value !== "" && !searchMode) {
                  if (inputValue.current) {
                    inputValue.current.value = "";
                    dispatch(newsActions.setSmallSearchMode(false));
                  }
                }
              }}
              src={
                inputValue?.current?.value !== "" && !searchMode ? Exit : Search
              }
            />
          )}

          {searchMode && (
            <Icon isFiltered={false} isSmall={false} src={Search} />
          )}
        </IconsContainer>
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
