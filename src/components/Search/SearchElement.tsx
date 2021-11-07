import React, { FC, useCallback, useEffect, useState } from "react";
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
import useDebounce from "../../hooks/useDebounce";
import { useDispatch } from "react-redux";
import { newsActions } from "../../store/news-slice";
import { getApi } from "../../store/news-actions";

const SearchElement: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);
  const dispatch = useDispatch();
  const [isInputClicked, setIsInputClick] = useState(false);

  useEffect(() => {
    dispatch(newsActions.changeSearchValue(debouncedSearchTerm));
    dispatch(getApi(false));
  }, [debouncedSearchTerm, dispatch]);
  const toggling = useCallback(() => {
    setIsInputClick((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <SearchAndRecentContainer>
      <SearchStyle>
        <SearchIcon src={Search} />
        <InputStyle
          onFocus={toggling}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setSearchTerm((e.target as HTMLInputElement).value)
          }
        ></InputStyle>
        <DropdownSearch>
          <SearchDivider />
          <CategoryDropdown />
        </DropdownSearch>
      </SearchStyle>
      {isInputClicked && (
        <RecentSearch items={["recentSearchs"]}></RecentSearch>
      )}
    </SearchAndRecentContainer>
  );
};
export default SearchElement;
