import { createSlice } from "@reduxjs/toolkit";
import { CatergoryType, Filters } from "../components/FilterBar/FilterBarStyle";
import { FilterOptions, selectedFilters } from "../style/layouts";

export interface NewsGlobalState {
  news: {
    category: CatergoryType;
    searchValue: string;
    filters: Filters;
    selectedFilters: Filters;
    data: [];
    ShowSideBar: boolean;
  };
}
const newsSlice = createSlice({
  name: "news",
  initialState: {
    category: CatergoryType.topheadlines,
    searchValue: "",
    filters: FilterOptions,
    selectedFilters: selectedFilters,
    data: [],
    ShowSideBar: false,
  },
  reducers: {
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
        case "dates":
          state.selectedFilters.everything.dates[0] = value;
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
