import React, { useState } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownIcon from "../../assets/dropdown.svg";
import { getApi } from "../../store/news-actions";
import { newsActions, NewsGlobalState } from "../../store/news-slice";
import { LIGHT_GREY_4 } from "../../style/Colors";
import { CatergoryType } from "../FilterBar/FilterBarStyle";

import {
  DropdownContainer,
  DropdownHeader,
  DropdownItem,
  DropdownList,
  DropdownListContainer,
} from "./DropdownStyle";

export interface CategoryDropdownProps {
  onOptionClicked?: (item: string) => void;
}
export const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("topheadlines");
  const categories = useSelector(
    (state: NewsGlobalState) => state.news.filters
  );
  const dispatch = useDispatch();

  const onOptionClicked = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
    const category =
      value === "everything"
        ? CatergoryType.everything
        : CatergoryType.topheadlines;
    dispatch(newsActions.changeCategory(category));
    dispatch(getApi(false, 1));
  };
  const toggling = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggling}>
        {selectedOption}
        <img src={DownIcon} alt="down icon of dropdown"></img>
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer>
          <DropdownList>
            {Object.keys(categories).map((item: string) => (
              <DropdownItem
                onClick={() => onOptionClicked(item)}
                key={Math.random()}
                style={
                  item === selectedOption
                    ? { backgroundColor: LIGHT_GREY_4 }
                    : {}
                }
              >
                {item}
              </DropdownItem>
            ))}
          </DropdownList>
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
};
