import React, { FC, useCallback } from "react";
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
import { newsActions } from "../../store/news-slice";

const FilterBar: FC<FilterProps> = ({ type }) => {
  const filtersOptions = useSelector((state: any) => state.news.filters);
  const dispatch = useDispatch();
  const renderByCategory = useCallback(
    (category) => {
      return (
        <>
          {Object.keys(category).map((item, key) => {
            return <Dropdown key={key} title={item} items={category[item]} />;
          })}
          {category === filtersOptions.everything && <DatePick />}
        </>
      );
    },
    [filtersOptions]
  );
  return (
    <>
      <FilterBarContainer>
        {type === CatergoryType.everything
          ? renderByCategory(filtersOptions.everything)
          : renderByCategory(filtersOptions.topheadlines)}
      </FilterBarContainer>
      <FilterBarSmallScreen type={type}>
        {type === CatergoryType.everything && (
          <Dropdown
            title="sortby"
            items={filtersOptions.everything["sortby"]}
          />
        )}
        <Icon src={Filter} onClick={() => dispatch(newsActions.changeShow())} />
      </FilterBarSmallScreen>
    </>
  );
};
export default FilterBar;
