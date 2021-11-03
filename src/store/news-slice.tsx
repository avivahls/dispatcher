import { createSlice } from "@reduxjs/toolkit";
import { CatergoryType } from "../components/FilterBar/FilterBarStyle";
import { FilterOptions, selectedFilters } from "../style/layouts";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    category: CatergoryType.topHeadlines,
    searchValue: "",
    filters: FilterOptions,
    selectedFilters: selectedFilters,
    data: [],
  },
  reducers: {
    changeCategory(state, action) {
      state.category = action.payload;
    },
    changeSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    chageFilters(state, action) {
      state.selectedFilters = action.payload;
    },
    getNews(state, action) {
      state.data = action.payload;
    },
  },
});

export const newsActions = newsSlice.actions;
export default newsSlice;
