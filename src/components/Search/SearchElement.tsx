import React, { FC, useCallback, useRef, useState } from "react";
import {
  DropdownSearch,
  InputStyle,
  SearchAndRecentContainer,
  SearchDivider,
  SearchIcon,
  SearchStyle,
} from "./SearchStyle";
import Search from "../../assets/search.svg";
import RecentSearch from "../RecentSearch/RecentSearch";
import { CategoryDropdown } from "../Dropdown/CategoryDropdown";
// import useDebounce from "../../hooks/useDebounce";
import { useDispatch } from "react-redux";
import { newsActions } from "../../store/news-slice";
import { getApi } from "../../store/news-actions";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const SearchElement: FC = () => {
  // const [searchTerm, setSearchTerm] = useState<string>("");
  // const debouncedSearchTerm = useDebounce<string>(searchTerm, 1000);
  const dispatch = useDispatch();
  const [isSearchable, setIsSearchable] = useState(false);
  const inputValue = useRef<HTMLInputElement>(null);
  const [showRecent, setShowRecent] = useState(false);
  const [recentSearchs, setRecentSearchs] = useLocalStorage<string[]>(
    "recent",
    []
  );

  // useEffect(() => {
  //   dispatch(newsActions.changeSearchValue(debouncedSearchTerm));
  //   if (debouncedSearchTerm !== "") {
  //     recentSearchs.length === 0
  //       ? setRecentSearchs([debouncedSearchTerm] as never[])
  //       : !recentSearchs.includes(debouncedSearchTerm as never) &&
  //         setRecentSearchs([...recentSearchs, debouncedSearchTerm] as never[]);
  //     setShowRecent(false);
  //     setIsSearchable(false);
  //   }
  //   if (!firstOne.current) {
  //     dispatch(newsActions.setPageNumber(1));
  //     dispatch(getApi(false));
  //   }
  //   firstOne.current = false;
  // }, [debouncedSearchTerm]);
  const handleDeleteIcon = (item: any) => {
    setIsSearchable(true);
    setRecentSearchs(recentSearchs.filter((prev) => prev !== item));
  };

  const search = () => {
    dispatch(newsActions.changeSearchValue(inputValue?.current?.value));
    if (inputValue?.current?.value !== "") {
      recentSearchs.length === 0
        ? setRecentSearchs([inputValue?.current?.value] as never[])
        : !recentSearchs.includes(inputValue?.current?.value as never) &&
          setRecentSearchs([
            ...recentSearchs,
            inputValue?.current?.value,
          ] as never[]);
      setShowRecent(false);
      setIsSearchable(false);
    }
    dispatch(newsActions.setPageNumber(1));
    dispatch(getApi(false));
  };
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      search();
    }
  };

  const clearRecentSearchs = useCallback(() => {
    setRecentSearchs([]);
  }, [setRecentSearchs]);

  const setSearchValue = (item: string) => {
    if (inputValue.current) inputValue.current.value = item;
    search();
    setShowRecent(false);
  };
  return (
    <SearchAndRecentContainer isSearchable={isSearchable}>
      <SearchStyle isSearchable={isSearchable}>
        <>
          <SearchIcon
            style={{ cursor: "pointer" }}
            onClick={() => search()}
            src={Search}
          />
          <InputStyle
            ref={inputValue}
            onFocus={() => setIsSearchable(true)}
            onKeyDown={handleKeyDown}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              if ((e.target as HTMLInputElement).value === "") {
                search();
              }
              setIsSearchable(
                (e.target as HTMLInputElement).value !== "" ? true : false
              );
              setShowRecent(
                (e.target as HTMLInputElement).value !== "" ? true : false
              );
            }}
          ></InputStyle>
        </>
        <DropdownSearch isSearchable={isSearchable}>
          <SearchDivider />
          <CategoryDropdown />
        </DropdownSearch>
      </SearchStyle>
      {showRecent &&
        inputValue.current?.value !== "" &&
        recentSearchs.length > 0 && (
          <RecentSearch
            isSmallScrean={false}
            deleteHandler={handleDeleteIcon}
            items={recentSearchs}
            clearHandler={clearRecentSearchs}
            setValueHandler={setSearchValue}
          />
        )}
    </SearchAndRecentContainer>
  );
};
export default SearchElement;
