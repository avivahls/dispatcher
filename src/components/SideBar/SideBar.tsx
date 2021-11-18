import React, { FC, useCallback, useState } from "react";
import { DropdownBoldHeader } from "../Dropdown/DropdownStyle";
import { SideBarFilter } from "../Dropdown/SideBarFilter";
import { OtherSide, SideBarContainer, SideBarIcon } from "./SideBarStyle";
import { SideBarFilterStyle } from "../FilterBar/FilterBarStyle";
import Back from "../../assets/back.svg";
import { useDispatch, useSelector } from "react-redux";
import { newsActions, NewsGlobalState } from "../../store/news-slice";
import { SideBarButton } from "../Button/ButtonStyle";
import { getApi } from "../../store/news-actions";
import DatePicker from "react-datepicker";
import moment from "moment";

export interface SideBarProps {
  isShown: boolean;
  type: string;
}
const SideBar: FC<SideBarProps> = ({ isShown, type }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState<Date>();
  const [filterState, setFilterState] = useState("filters");
  const [subCategory, setSubCategory] = useState("");
  const [isMainCategory, setIsMainCategory] = useState(false);
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    dispatch(
      newsActions.addDatesFilter({
        from: moment(start).format("YYYY-MM-DD"),
        to: moment(end).format("YYYY-MM-DD"),
      })
    );
    if (end) {
      dispatch(getApi(false, 1));
      setFilterState("filters");
    }
  };
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
  const handleViewResults = () => {
    dispatch(getApi(false, 1));
    dispatch(newsActions.changeShow());
  };
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
            if (item !== "sortby") {
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
            }
          })}
          {category === filtersOptions.everything && (
            <SideBarFilter
              title="Date"
              selected={
                endDate
                  ? `${moment(startDate).format("YY/MM/DD")}-${moment(
                      endDate
                    ).format("YY/MM/DD")}`
                  : ``
              }
              onClickHandle={() => {
                setFilterState("options");
                setSubCategory("Date");
              }}
            />
          )}
        </>
      );
    },
    [type, selectedFilters, MainCategory, filtersOptions, endDate, startDate]
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
        {filterState === "options" && subCategory !== "Date" && (
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
              subCategory !== "Date" &&
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
        {filterState === "options" && subCategory === "Date" && (
          <>
            <DropdownBoldHeader>
              <SideBarIcon
                src={Back}
                onClick={() => setFilterState("filters")}
              />
              DATE
            </DropdownBoldHeader>
            <DatePicker
              className="datePicker"
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
            />{" "}
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
