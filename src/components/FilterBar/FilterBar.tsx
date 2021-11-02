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
import { FilterOptions } from "../../Style/layouts";

const FilterBar: FC<FilterProps> = ({ type }) => {
  const renderByCategory = useCallback((category) => {
    return (
      <>
        {Object.keys(category).map((item, key) => {
          return <Dropdown key={key} title={item} items={category[item]} />;
        })}
        {category === "topheadlines" ? <DatePick /> : ""}
      </>
    );
  }, []);
  return (
    <>
      <FilterBarContainer>
        {type === CatergoryType.everything
          ? renderByCategory(FilterOptions.everything)
          : renderByCategory(FilterOptions.topheadlines)}
      </FilterBarContainer>
      <FilterBarSmallScreen>
        <Icon src={Filter} />
      </FilterBarSmallScreen>
    </>
  );
};
export default FilterBar;
