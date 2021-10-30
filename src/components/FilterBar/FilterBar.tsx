import React, { FC } from "react";
import { Icon } from "../Button/ButtonStyle";
import { Dropdown } from "../Dropdown/Dropdown";
import { FilterBarContainer, FilterBarSmallScreen } from "./FilterBarStyle";
import Filter from "../../assets/filter.svg";

const FilterBar: FC = () => {
  return (
    <>
      <FilterBarContainer>
        <Dropdown title="Country" items={["1", "2"]}></Dropdown>
        <Dropdown title="Category" items={["1", "2"]}></Dropdown>
        <Dropdown title="Sources" items={["1", "2"]}></Dropdown>
      </FilterBarContainer>
      <FilterBarSmallScreen>
        <Dropdown title="Sort By" items={["Date"]}></Dropdown>
        <Icon src={Filter} />
      </FilterBarSmallScreen>
    </>
  );
};
export default FilterBar;
