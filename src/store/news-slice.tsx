import { createSlice } from "@reduxjs/toolkit";
import { CatergoryType, Filters } from "../components/FilterBar/FilterBarStyle";
import { FilterOptions, selectedFilters } from "../style/layouts";

export interface NewsGlobalState {
  news: {
    isLoading: boolean;
    category: CatergoryType;
    searchValue: string;
    filters: Filters;
    selectedFilters: Filters;
    datesFilters: Date[];
    data: [];
    ShowSideBar: boolean;
  };
}
const newsSlice = createSlice({
  name: "news",
  initialState: {
    isLoading: false,
    category: CatergoryType.topheadlines,
    searchValue: "",
    filters: FilterOptions,
    selectedFilters: selectedFilters,
    datesFilters: [new Date(), null],
    data: [],
    ShowSideBar: false,
  },
  reducers: {
    changeLoading(state, action) {
      state.isLoading = action.payload;
    },
    getNews(state, action) {
      state.data = action.payload;
    },
    getSources(state, action) {
      action.payload.forEach((item: string) => {
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
    },
  },
});

export const newsActions = newsSlice.actions;
export default newsSlice;
