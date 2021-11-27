import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownIcon from "../../assets/dropdown.svg";
import { getApi } from "../../store/news-actions";
import { newsActions, NewsGlobalState } from "../../store/news-slice";
import {
  coutries,
  filtersHeaders,
  languages,
  sortBy,
} from "../../style/layouts";

import {
  DropdownContainer,
  DropdownHeader,
  DropdownItem,
  DropdownList,
  DropdownListContainer,
  SelectedDropdownItem,
} from "./DropdownStyle";

export interface DropdownProps {
  isOpenDropdown: boolean;
  title: string;
  items: [];
  isSmallSort: boolean;
  isDisable: boolean;
  onOptionClicked?: (item: string) => void;
}
export const Dropdown = ({
  isOpenDropdown,
  title,
  items,
  isSmallSort,
  isDisable,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(isOpenDropdown);
  const checkedfilters = useSelector(
    (state: NewsGlobalState) => state.news.selectedFilters
  );
  const filters = useSelector((state: NewsGlobalState) => state.news.filters);
  const mainCategory = useSelector(
    (state: NewsGlobalState) => state.news.category
  );
  const smallSearchMode = useSelector(
    (state: NewsGlobalState) => state.news.smallSearchMode
  );
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (title === "country") {
      if (checkedfilters.topheadlines.country[0] === "il") {
        setSelectedOption("Israel");
      }
    }
  }, [checkedfilters]);
  const getValueOutId = (title: string, item: any) => {
    switch (title) {
      case "sources":
        return filters[mainCategory].sources.filter(
          (data: any) => data.value === item.value
        )[0].id;
      case "country":
        return coutries.filter((data: any) => data.value === item)[0].id;
      case "language":
        return languages.filter((data: any) => data.value === item)[0].id;
      case "sortBy":
        return sortBy.filter((data: any) => data.value === item)[0].id;
      default:
        return item;
    }
  };
  const onOptionClicked = (value: any) => {
    let data = value;
    if (
      checkedfilters[mainCategory][title][0] === getValueOutId(title, value)
    ) {
      setSelectedOption("");
      dispatch(
        newsActions.clearSelectedFilters({
          mainCategory: mainCategory,
          subCategory: title,
        })
      );
    } else {
      if (title === "sources") {
        data = value.id;
        setSelectedOption(value.value);
      } else if (title === "country" || title === "language") {
        data = (title === "country" ? coutries : languages).filter((item) => {
          return item.value === value;
        })[0].id;
        setSelectedOption(value);
      } else if (title === "category") {
        console.log(
          String(value).substr(0, 1).toUpperCase() + String(value).substr(1)
        );
        setSelectedOption(
          String(value).substr(0, 1).toUpperCase() + String(value).substr(1)
        );
      } else {
        setSelectedOption(value);
      }

      dispatch(newsActions.addOptions({ category: title, value: data }));
    }
    setIsOpen(false);
    dispatch(newsActions.setPageNumber(1));
    dispatch(getApi(false));
  };

  const checkIfSelected = (item: any) => {
    switch (title) {
      case "sources":
        return (
          filters[mainCategory].sources.filter(
            (data: any) => data.value === selectedOption && item.id === data.id
          ).length > 0
        );
      case "category":
        return item === selectedOption.toLowerCase();
      default:
        return item === selectedOption;
    }
  };
  const toggling = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const existSelectedOption = () => {
    if (title === "sources") {
      return (
        items.filter((item: any) => {
          return item.value === selectedOption;
        }).length > 0
      );
    } else if (title === "category") {
      return (
        items.filter((item) => {
          const temp = selectedOption.toLowerCase();
          return item === temp;
        }).length > 0
      );
    } else {
      return (
        items.filter((item) => {
          return item === selectedOption;
        }).length > 0
      );
    }
  };
  return (
    <DropdownContainer
      isDisable={isDisable}
      style={{ width: isSmallSort ? "fit-content" : "200px" }}
      isSmall={smallSearchMode}
    >
      <DropdownHeader
        isDisable={isDisable}
        style={{ justifyContent: isSmallSort ? "flex-start" : "space-between" }}
        onClick={toggling}
      >
        {selectedOption !== "" && existSelectedOption()
          ? selectedOption
          : filtersHeaders.filter((item) => item.id === title)[0]?.value}
        <img
          style={{ marginLeft: isSmallSort ? "10px" : "0px" }}
          src={DownIcon}
          alt="down icon of dropdown"
        ></img>
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer isDisable={isDisable} isSmall={smallSearchMode}>
          <DropdownList>
            {items.map((item: any, key) =>
              checkIfSelected(item) ? (
                <SelectedDropdownItem
                  onClick={() => onOptionClicked(item)}
                  key={key}
                >
                  {title === "category"
                    ? String(item).charAt(0).toUpperCase() +
                      String(item).substr(1)
                    : title === "sources"
                    ? item.value
                    : item}
                </SelectedDropdownItem>
              ) : (
                <DropdownItem onClick={() => onOptionClicked(item)} key={key}>
                  {title === "category"
                    ? String(item).charAt(0).toUpperCase() +
                      String(item).substr(1)
                    : title === "sources"
                    ? item.value
                    : item}{" "}
                </DropdownItem>
              )
            )}
          </DropdownList>
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
};
