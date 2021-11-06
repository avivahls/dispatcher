import React, { FC, useCallback, useState } from "react";
import { DropdownBoldHeader } from "../Dropdown/DropdownStyle";
import { SideBarFilter } from "../Dropdown/SideBarFilter";
import { OtherSide, SideBarContainer, SideBarIcon } from "./SideBarStyle";
// import DatePick from "../Date/DatePick";
import { SideBarFilterStyle } from "../FilterBar/FilterBarStyle";
import Back from "../../assets/back.svg";
import { useDispatch, useSelector } from "react-redux";
import { newsActions, NewsGlobalState } from "../../store/news-slice";
import { SideBarButton } from "../Button/ButtonStyle";
import { getApi } from "../../store/news-actions";

export interface SideBarProps {
  isShown: boolean;
  type: string;
}
const SideBar: FC<SideBarProps> = ({ isShown, type }) => {
  const [filterState, setFilterState] = useState("filters");
  const [subCategory, setSubCategory] = useState("");
  const [isMainCategory, setIsMainCategory] = useState(false);
  const MainCategory = useSelector(
    (state: NewsGlobalState) => state.news.category
  );
  const selectedFilters = useSelector(
    (state: NewsGlobalState) => state.news.selectedFilters
  );
  const filtersOptions = useSelector(
    (state: NewsGlobalState) => state.news.filters
  );
  const dispatch = useDispatch();
  const onOptionClicked = useCallback(
    (title: string, value: string) => {
      setFilterState("filters");
      dispatch(newsActions.addOptions({ category: title, value: value }));
    },
    [dispatch]
  );
  const onMainCategotyChange = useCallback(
    (category) => {
      dispatch(newsActions.changeCategory(category));
      setIsMainCategory(false);
      setFilterState("filters");
    },
    [dispatch]
  );
  const handleViewResults = useCallback(() => {
    dispatch(getApi(false));
    dispatch(newsActions.changeShow());
  }, [dispatch]);
  const renderByCategory = useCallback(
    (category) => {
      return (
        <>
          <SideBarFilter
            title="Search in"
            selected={MainCategory}
            onClickHandle={() => {
              setFilterState("options");
              setSubCategory("Search in");
              setIsMainCategory(true);
            }}
          />
          {Object.keys(category).map((item, key) => {
            return (
              <SideBarFilter
                key={key}
                title={item}
                selected={
                  selectedFilters[type][item]
                    ? String(selectedFilters[type][item])
                    : ""
                }
                onClickHandle={() => {
                  setFilterState("options");
                  setSubCategory(item);
                }}
              />
            );
          })}
        </>
      );
    },
    [type, selectedFilters, MainCategory]
  );

  return (
    <>
      <SideBarContainer isShown={isShown}>
        {filterState === "filters" && (
          <>
            <DropdownBoldHeader>FILTER</DropdownBoldHeader>
            {type === "everything"
              ? renderByCategory(filtersOptions.everything)
              : renderByCategory(filtersOptions.topheadlines)}
            <SideBarButton onClick={() => handleViewResults()}>
              View Results
            </SideBarButton>
          </>
        )}
        {filterState === "options" && (
          <>
            <DropdownBoldHeader>
              <SideBarIcon
                src={Back}
                onClick={() => setFilterState("filters")}
              />
              {subCategory.toUpperCase()}
            </DropdownBoldHeader>
            {isMainCategory &&
              ["everything", "topheadlines"].map((item, key) => (
                <SideBarFilterStyle
                  key={key}
                  onClick={() => onMainCategotyChange(item)}
                >
                  {item}
                </SideBarFilterStyle>
              ))}
            {!isMainCategory &&
              filtersOptions[type][subCategory].map((item, key) => (
                <SideBarFilterStyle
                  key={key}
                  onClick={() => onOptionClicked(subCategory, item)}
                >
                  {item}
                </SideBarFilterStyle>
              ))}
          </>
        )}
      </SideBarContainer>
      <OtherSide
        onClick={() => dispatch(newsActions.changeShow())}
        isShown={isShown}
      />
    </>
  );
};
export default SideBar;
