import React, { FC, useCallback, useState } from "react";
import { Icon } from "../Button/ButtonStyle";
import { Dropdown } from "../Dropdown/Dropdown";
import {
  CatergoryType,
  FilterBarContainer,
  FilterBarSmallScreen,
  FilterProps,
} from "./FilterBarStyle";
import Filter from "../../assets/filter.svg";
import DatePick from "../Date/DatePick";
import { useDispatch, useSelector } from "react-redux";
import { newsActions, NewsGlobalState } from "../../store/news-slice";

const FilterBar: FC<FilterProps> = ({ type }) => {
  const [closeDropdowns, setCloseDropdowns] = useState(false);
  const searchValue = useSelector(
    (state: NewsGlobalState) => state.news.searchValue
  );
  const filtersOptions = useSelector((state: any) => state.news.filters);
  const selectedFilters = useSelector(
    (state: NewsGlobalState) => state.news.selectedFilters
  );

  const isFiltered = useSelector(
    (state: NewsGlobalState) => state.news.isFiltered
  );
  const isSmallSearch = useSelector(
    (state: NewsGlobalState) => state.news.smallSearchMode
  );
  const isDisable = (category: any, item: string) => {
    if (category === filtersOptions.topheadlines) {
      if (item === "sources") {
        return selectedFilters.topheadlines.country.length > 0 ||
          selectedFilters.topheadlines.category.length > 0
          ? true
          : false;
      }
      if (item === "category") {
        return selectedFilters.topheadlines.sources.length > 0 ? true : false;
      }
      if (item === "country") {
        return selectedFilters.topheadlines.sources.length > 0 ? true : false;
      }
    } else {
      if (item !== "sources") {
        if (searchValue === "") return true;
      }
    }
    return false;
  };
  const dispatch = useDispatch();
  const renderByCategory = useCallback(
    (category: any) => {
      return (
        <>
          {Object.keys(category).map((item, key) => {
            return (
              <Dropdown
                isOpenDropdown={false}
                isDisable={isDisable(category, item)}
                isSmallSort={false}
                key={key}
                title={item}
                items={category[item]}
              />
            );
          })}
          {category === filtersOptions.everything && (
            <DatePick isDisable={isDisable(category, "date")} />
          )}
        </>
      );
    },
    [filtersOptions, isDisable]
  );
  return (
    <>
      <FilterBarContainer
        onBlur={() => {
          setCloseDropdowns(true);
        }}
      >
        {type === CatergoryType.everything
          ? renderByCategory(filtersOptions.everything)
          : renderByCategory(filtersOptions.topheadlines)}
      </FilterBarContainer>
      <FilterBarSmallScreen isSmall={isSmallSearch} type={type}>
        <Dropdown
          isOpenDropdown={closeDropdowns}
          isDisable={type === CatergoryType.topheadlines}
          isSmallSort={true}
          title="sortby"
          items={filtersOptions.everything["sortby"]}
        />
        <Icon
          style={{
            cursor: "pointer",
            marginRight: "20px",
            backgroundColor: isFiltered ? "rgba(223, 224, 235, 0.6)" : "white",
            borderRadius: isFiltered ? "5px" : "0px",
          }}
          isFiltered={isFiltered}
          isSmall={isSmallSearch}
          src={Filter}
          onClick={() => dispatch(newsActions.changeShow())}
        />
      </FilterBarSmallScreen>
    </>
  );
};
export default FilterBar;
