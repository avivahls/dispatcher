import React, { FC, useCallback, useState } from "react";
import {
  DropdownSearch,
  InputStyle,
  SearchAndRecentContainer,
  SearchDivider,
  SearchIcon,
  SearchStyle,
} from "./SearchStyle";
import Search from "../../assets/search.svg";
import { Dropdown } from "../Dropdown/Dropdown";
import RecentSearch from "../RecentSearch/RecentSearch";

const SearchElement: FC = () => {
  const [isInputClicked, setIsInputClick] = useState(false);
  const toggling = useCallback(() => {
    setIsInputClick((prevIsOpen) => !prevIsOpen);
  }, []);
  return (
    <SearchAndRecentContainer>
      <SearchStyle>
        <SearchIcon src={Search} />
        <InputStyle onFocus={toggling}></InputStyle>
        <DropdownSearch>
          <SearchDivider />
          <Dropdown
            title="category"
            items={["everything", "topheadlines"]}
          ></Dropdown>
        </DropdownSearch>
      </SearchStyle>
      {isInputClicked && (
        <RecentSearch items={["dsfsdf", "asdasd", "adasd"]}></RecentSearch>
      )}
    </SearchAndRecentContainer>
  );
};
export default SearchElement;
