import React, { FC, useCallback, useState } from "react";
import { DropdownBoldHeader } from "../Dropdown/DropdownStyle";
import { SideBarFilter } from "../Dropdown/SideBarFilter";
import {
  MainFilterCompStyle,
  OtherSide,
  SideBarButtonContainer,
  SideBarContainer,
  SideBarIcon,
} from "./SideBarStyle";
import { SideBarFilterStyle } from "../FilterBar/FilterBarStyle";
import Back from "../../assets/back.svg";
import { useDispatch, useSelector } from "react-redux";
import { newsActions, NewsGlobalState } from "../../store/news-slice";
import { SideBarButton } from "../Button/ButtonStyle";
import { getApi } from "../../store/news-actions";
import DatePicker from "react-datepicker";
import moment from "moment";
import { coutries, languages, sortBy } from "../../utils/layouts";
import _ from "lodash";

export interface SideBarProps {
  isShown: boolean;
  type: string;
}
const SideBar: FC<SideBarProps> = ({ isShown, type }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState<Date>();
  const [filterState, setFilterState] = useState("filters");
  const [subCategory, setSubCategory] = useState("");
  const isSmallScreanSearch = useSelector(
    (state: NewsGlobalState) => state.news.smallSearchMode
  );
  const searchValue = useSelector(
    (state: NewsGlobalState) => state.news.searchValue
  );
  const [isMainCategory, setIsMainCategory] = useState(false);
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    dispatch(
      newsActions.addDatesFilter({
        from: moment(new Date(start)).format("YYYY-MM-DD"),
        to: moment(new Date(end)).format("YYYY-MM-DD"),
      })
    );
    if (end) {
      setFilterState("filters");
    }
  };
  const mainCategory = useSelector(
    (state: NewsGlobalState) => state.news.category
  );
  const selectedFilters = useSelector(
    (state: NewsGlobalState) => state.news.selectedFilters
  );
  const filtersOptions = useSelector(
    (state: NewsGlobalState) => state.news.filters
  );
  const dispatch = useDispatch();
  const onOptionClicked = (title: string, value: any) => {
    let data = value;
    if (
      selectedFilters[mainCategory][title][0] === getValueOutId(title, value)
    ) {
      dispatch(
        newsActions.clearSelectedFilters({
          mainCategory: mainCategory,
          subCategory: title,
        })
      );
    } else {
      if (title === "sources") {
        data = value.id;
      } else if (title === "country" || title === "language") {
        data = (title === "country" ? coutries : languages).filter((item) => {
          return item.value === value;
        })[0].id;
      }
      dispatch(newsActions.addOptions({ category: title, value: data }));
    }
    setFilterState("filters");
  };
  const getValueOutId = (title: string, item: any) => {
    switch (title) {
      case "sources":
        return _.isString(item)
          ? item
          : filtersOptions[mainCategory].sources.filter(
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
  const getIdOutValue = (title: string, item: any) => {
    switch (title) {
      case "sources":
        return filtersOptions[mainCategory].sources.filter(
          (data: any) => data.id === (_.isString(item) ? item : item.id)
        )[0]?.value;
      case "country":
        return coutries.filter((data: any) => data.id === item)[0]?.value;
      case "language":
        return languages.filter((data: any) => data.id === item)[0]?.value;
      case "sortby":
        return sortBy.filter((data: any) => data.id === item)[0]?.value;
      default:
        return item;
    }
  };
  const onMainCategotyChange = useCallback(
    (category) => {
      dispatch(newsActions.changeCategory(category));
      dispatch(newsActions.clearFilters());
      setIsMainCategory(false);
      setFilterState("filters");
    },
    [dispatch]
  );
  const handleViewResults = () => {
    dispatch(newsActions.setPageNumber(1));

    dispatch(getApi(false));
    dispatch(newsActions.changeShow());
  };
  const renderByCategory = (category: any) => {
    return (
      <>
        <SideBarFilter
          isDisable={false}
          title="Search in"
          selected={
            mainCategory === "everything" ? "Everything" : "Top Headlines"
          }
          onClickHandle={() => {
            setFilterState("options");
            setSubCategory("Search in");
            setIsMainCategory(true);
          }}
        />
        {Object.keys(category).map((item, key) => {
          return (
            item !== "sortby" && (
              <SideBarFilter
                isDisable={isDisable(category, item)}
                key={key}
                title={item}
                selected={
                  item !== "sources"
                    ? item === "category"
                      ? selectedFilters[type][item]
                        ? String(selectedFilters[type][item])
                            .substr(0, 1)
                            .toUpperCase() +
                          String(selectedFilters[type][item]).substr(1)
                        : ""
                      : selectedFilters[type][item]
                      ? String(selectedFilters[type][item])
                      : ""
                    : selectedFilters[type][item][0]
                    ? getIdOutValue(item, selectedFilters[type][item][0])
                    : ""
                }
                onClickHandle={() => {
                  if (!isDisable(category, item)) {
                    setFilterState("options");
                    setSubCategory(item);
                    setIsMainCategory(false);
                  }
                }}
              />
            )
          );
        })}
        {category === filtersOptions.everything && (
          <SideBarFilter
            isDisable={isDisable(category, "Date")}
            title="Date"
            selected={
              endDate
                ? `${moment(new Date(startDate)).format("DD/MM/YY")}-${moment(
                    new Date(endDate)
                  ).format("DD/MM/YY")}`
                : ``
            }
            onClickHandle={() => {
              if (!isDisable(category, "Date")) {
                setFilterState("options");
                setSubCategory("Date");
                setIsMainCategory(false);
              }
            }}
          />
        )}
      </>
    );
  };
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
        return searchValue === "";
      }
    }
    return false;
  };
  return (
    <>
      <SideBarContainer isSmallSearch={isSmallScreanSearch} isShown={isShown}>
        {filterState === "filters" && (
          <MainFilterCompStyle>
            <div>
              <DropdownBoldHeader
                isDisable={false}
                style={{ margin: "20px 12px" }}
              >
                FILTER
              </DropdownBoldHeader>
              {type === "everything"
                ? renderByCategory(filtersOptions.everything)
                : renderByCategory(filtersOptions.topheadlines)}
            </div>
            <SideBarButtonContainer>
              <SideBarButton onClick={() => handleViewResults()}>
                View Results
              </SideBarButton>
            </SideBarButtonContainer>
          </MainFilterCompStyle>
        )}
        {filterState === "options" && subCategory !== "Date" && (
          <>
            <DropdownBoldHeader
              style={{ marginTop: "16px", marginBottom: "16px" }}
              isDisable={false}
            >
              <SideBarIcon
                src={Back}
                onClick={() => setFilterState("filters")}
              />
              {subCategory.toUpperCase()}
            </DropdownBoldHeader>
            {isMainCategory &&
              ["everything", "topheadlines"].map((item, key) => (
                <SideBarFilterStyle
                  selected={mainCategory === item}
                  isDisable={false}
                  key={key}
                  onClick={() => onMainCategotyChange(item)}
                >
                  <p>
                    {item === "everything" ? "Everything" : "Top Headlines"}
                  </p>
                </SideBarFilterStyle>
              ))}
            {!isMainCategory &&
              filtersOptions[type][subCategory].map((item: any, key) => (
                <SideBarFilterStyle
                  selected={
                    subCategory.toLowerCase() === "sources"
                      ? item.id === selectedFilters[type][subCategory][0]
                      : item ===
                        getIdOutValue(
                          subCategory,
                          selectedFilters[type][subCategory][0]
                        )
                  }
                  isDisable={false}
                  key={key}
                  onClick={() => onOptionClicked(subCategory, item)}
                >
                  <p>
                    {subCategory.toLowerCase() !== "sources"
                      ? subCategory.toLowerCase() === "category"
                        ? String(item).charAt(0).toUpperCase() +
                          String(item).substr(1)
                        : item
                      : item.value}
                  </p>
                </SideBarFilterStyle>
              ))}
          </>
        )}
        {filterState === "options" && subCategory === "Date" && (
          <>
            <DropdownBoldHeader
              style={{ marginTop: "16px", marginBottom: "16px" }}
              isDisable={false}
            >
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
        isSmallSearch={isSmallScreanSearch}
        onClick={() => dispatch(newsActions.changeShow())}
        isShown={isShown}
      />
    </>
  );
};
export default SideBar;
