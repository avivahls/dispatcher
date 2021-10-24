import React, { FC } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { FilterBarContainer } from "./FilterBarStyle";

const FilterBar: FC = () => {
  return (
    <FilterBarContainer>
      <Dropdown title="Country" items={["1", "2"]}></Dropdown>
      <Dropdown title="Category" items={["1", "2"]}></Dropdown>
      <Dropdown title="Sources" items={["1", "2"]}></Dropdown>
    </FilterBarContainer>
  );
};
export default FilterBar;
