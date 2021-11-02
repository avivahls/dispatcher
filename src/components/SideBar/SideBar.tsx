import React, { FC, useCallback, useState } from "react";
import { DropdownBoldHeader } from "../Dropdown/DropdownStyle";
import { SideBarFilter } from "../Dropdown/SideBarFilter";
import { OtherSide, SideBarContainer, SideBarIcon } from "./SideBarStyle";
// import DatePick from "../Date/DatePick";
import { CatergoryType, SideBarFilterStyle } from "../FilterBar/FilterBarStyle";
import { FilterOptions } from "../../style/layouts";
import Back from "../../assets/back.svg";

export interface SideBarProps {
  isShown: boolean;
  type: CatergoryType;
}
const SideBar: FC<SideBarProps> = ({ isShown, type }) => {
  const [filterState, setFilterState] = useState("filters");
  const [currentCategoryName, setCurrentCategoryName] = useState("");
  const [currentCategoryOptions, setCurrentCategoryOptions] = useState<
    string[]
  >([]);
  const renderByCategory = useCallback((category) => {
    return (
      <>
        {Object.keys(category).map((item, key) => {
          return (
            <SideBarFilter
              key={key}
              title={item}
              selected=""
              onClickHandle={() => {
                setFilterState("options");
                setCurrentCategoryName(item);
                setCurrentCategoryOptions(category[item]);
              }}
            />
          );
        })}
      </>
    );
  }, []);

  return (
    <>
      <SideBarContainer isShown={isShown}>
        {filterState === "filters" && (
          <>
            <DropdownBoldHeader>FILTER</DropdownBoldHeader>
            {type === CatergoryType.everything
              ? renderByCategory(FilterOptions.everything)
              : renderByCategory(FilterOptions.topheadlines)}
          </>
        )}
        {filterState === "options" && (
          <>
            <DropdownBoldHeader>
              <SideBarIcon
                src={Back}
                onClick={() => setFilterState("filters")}
              />
              {currentCategoryName.toUpperCase()}
            </DropdownBoldHeader>
            {currentCategoryOptions.map((item, key) => (
              <SideBarFilterStyle key={key}>{item}</SideBarFilterStyle>
            ))}
          </>
        )}
      </SideBarContainer>
      <OtherSide onClick={() => setFilterState("filters")} isShown={isShown} />
    </>
  );
};
export default SideBar;
