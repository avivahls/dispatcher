import React, { FC, useCallback, useState } from "react";
import {
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
        <SearchDivider />
        <Dropdown title="Top Headlines" items={["1", "2"]}></Dropdown>
      </SearchStyle>
      {isInputClicked && (
        <RecentSearch items={["dsfsdf", "asdasd", "adasd"]}></RecentSearch>
      )}
    </SearchAndRecentContainer>
  );
};
export default SearchElement;
