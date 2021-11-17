import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import {
  DropdownSearch,
  InputStyle,
  SearchAndRecentContainer,
  SearchDivider,
  SearchIcon,
  SearchStyle,
} from "./SearchStyle";
import _ from "lodash";
import Search from "../../assets/search.svg";
import RecentSearch from "../RecentSearch/RecentSearch";
import { CategoryDropdown } from "../Dropdown/CategoryDropdown";
import useDebounce from "../../hooks/useDebounce";
import { useDispatch } from "react-redux";
import { newsActions } from "../../store/news-slice";
import { getApi } from "../../store/news-actions";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const SearchElement: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const inputValue = useRef<HTMLInputElement>(null);
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);
  const dispatch = useDispatch();
  const [isInputClicked, setIsInputClick] = useState(false);
  const [recentSearchs, setRecentSearchs] = useLocalStorage<string[]>(
    "recent",
    []
  );

  useEffect(() => {
    dispatch(newsActions.changeSearchValue(debouncedSearchTerm));
    if (debouncedSearchTerm !== "") {
      recentSearchs.length === 0
        ? setRecentSearchs([debouncedSearchTerm] as never[])
        : !recentSearchs.includes(debouncedSearchTerm as never) &&
          setRecentSearchs([...recentSearchs, debouncedSearchTerm] as never[]);
    }
    dispatch(getApi(false, 1));
  }, [debouncedSearchTerm, dispatch]);
  const toggling = useCallback(() => {
    setIsInputClick((prevIsOpen) => !prevIsOpen);
  }, []);

  const handleDeleteIcon = useCallback(
    (item) => {
      setRecentSearchs(recentSearchs.filter((prev) => prev !== item));
    },
    [recentSearchs]
  );

  const clearRecentSearchs = useCallback(() => {
    setRecentSearchs([]);
  }, [setRecentSearchs]);

  const setSearchValue = useCallback((item: string) => {
    if (inputValue.current) inputValue.current.value = item;
    setSearchTerm(item);
  }, []);
  return (
    <SearchAndRecentContainer>
      <SearchStyle>
        <SearchIcon src={Search} />
        <InputStyle
          ref={inputValue}
          onFocus={toggling}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setSearchTerm((e.target as HTMLInputElement).value);
          }}
        ></InputStyle>
        <DropdownSearch>
          <SearchDivider />
          <CategoryDropdown />
        </DropdownSearch>
      </SearchStyle>
      {isInputClicked && recentSearchs.length > 0 && (
        <RecentSearch
          isSmallScrean={false}
          deleteHandler={handleDeleteIcon}
          items={recentSearchs}
          clearHandler={clearRecentSearchs}
          setValueHandler={setSearchValue}
        ></RecentSearch>
      )}
    </SearchAndRecentContainer>
  );
};
export default SearchElement;
