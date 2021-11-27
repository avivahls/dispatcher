import { createSlice } from "@reduxjs/toolkit";
import { IDoughnutData, ILineData } from "../components/Chart/ChartType";
import { CatergoryType, Filters } from "../components/FilterBar/FilterBarStyle";
import { DoughnutChartState, LineChartState } from "../MockData";
import { FilterOptions, selectedFiltersOptions } from "../style/layouts";
export interface NewsGlobalState {
  news: {
    totalResults: number;
    isFiltered: boolean;
    isFirstData: boolean;
    moreDataToScroll: boolean;
    smallSearchMode: boolean;
    errorMessage: string;
    isLoading: boolean;
    pageNumber: number;
    category: CatergoryType;
    searchValue: string;
    filters: Filters;
    selectedFilters: Filters;
    datesFilters: [];
    data: [];
    ShowSideBar: boolean;
    sourcesChart: IDoughnutData;
    datesChart: ILineData;
  };
}
const newsSlice = createSlice({
  name: "news",
  initialState: {
    totalResults: 0,
    isFiltered: true,
    isFirstData: false,
    moreDataToScroll: true,
    smallSearchMode: false,
    errorMessage: "",
    isLoading: false,
    pageNumber: 0,
    category: CatergoryType.topheadlines,
    searchValue: "",
    filters: FilterOptions,
    selectedFilters: selectedFiltersOptions,
    datesFilters: [new Date().toISOString(), null],
    data: [],
    ShowSideBar: false,
    sourcesChart: DoughnutChartState,
    datesChart: LineChartState,
  },
  reducers: {
    setTotal(state, action) {
      state.totalResults = action.payload;
    },
    setIsFirst(state, action) {
      state.isFirstData = action.payload;
    },
    setSourcesChart(state, action) {
      state.sourcesChart = action.payload;
    },
    setDatesChart(state, action) {
      state.datesChart = action.payload;
    },
    setMoreDataToScroll(state, action) {
      state.moreDataToScroll = action.payload;
    },
    setSmallSearchMode(state, action) {
      state.smallSearchMode = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    setPageNumber(state, action) {
      state.pageNumber = action.payload;
    },
    clearFilters(state) {
      state.selectedFilters = selectedFiltersOptions;
      newsSlice.caseReducers.isFiltered(state);
    },
    clearSelectedFilters(state, action) {
      const subCategory = action.payload.subCategory;
      switch (subCategory) {
        case "sortby":
          state.selectedFilters.everything.sortby = [];
          break;
        case "language":
          state.selectedFilters.everything.language = [];
          break;
        case "country":
          state.selectedFilters.topheadlines.country = [];
          break;
        case "category":
          state.selectedFilters.topheadlines.category = [];
          break;
        case "sources": {
          if (state.category === CatergoryType.everything) {
            state.selectedFilters.everything.sources = [];
          } else {
            state.selectedFilters.topheadlines.sources = [];
          }
        }
      }
      newsSlice.caseReducers.isFiltered(state);
    },
    changeLoading(state, action) {
      state.isLoading = action.payload;
    },
    getNews(state, action) {
      state.data = action.payload;
    },
    getSources(state, action) {
      action.payload.forEach((item: any) => {
        state.filters.everything.sources.push(item);
        state.filters.topheadlines.sources.push(item);
      });
    },
    changeCategory(state, action) {
      state.category = action.payload;
    },
    changeSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    changeShow(state) {
      state.ShowSideBar = !state.ShowSideBar;
    },
    addDatesFilter(state, action) {
      const startDate = action.payload.from;
      const endDate = action.payload.to;
      state.datesFilters = [startDate, endDate];
    },
    isFiltered(state) {
      if (
        state.selectedFilters.everything.sources[0] ||
        state.selectedFilters.everything.language[0] ||
        state.selectedFilters.topheadlines.country[0] ||
        state.selectedFilters.topheadlines.category[0] ||
        state.selectedFilters.topheadlines.sources[0]
      ) {
        state.isFiltered = true;
      } else {
        state.isFiltered = false;
      }
    },
    addOptions(state, action) {
      const subCategory = action.payload.category;
      const value = action.payload.value;

      switch (subCategory) {
        case "sortby":
          state.selectedFilters.everything.sortby[0] = value;
          break;
        case "language":
          state.selectedFilters.everything.language[0] = value;
          break;
        case "country":
          state.selectedFilters.topheadlines.country[0] = value;
          break;
        case "category":
          state.selectedFilters.topheadlines.category[0] = value;
          break;
        case "sources": {
          if (state.category === CatergoryType.everything) {
            state.selectedFilters.everything.sources[0] = value;
          } else {
            state.selectedFilters.topheadlines.sources[0] = value;
          }
        }
      }
      newsSlice.caseReducers.isFiltered(state);
    },
  },
});

export const newsActions = newsSlice.actions;
export default newsSlice;
