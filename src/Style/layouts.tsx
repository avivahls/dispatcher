import styled from "styled-components";
import { Filters } from "../components/FilterBar/FilterBarStyle";

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export const FlexColCenter = styled(FlexCol)`
  justify-content: center;
`;
export const FlexRowCenter = styled(FlexRow)`
  justify-content: center;
`;
export const MOBILE_SIZE = "500px";
export const IPAD_SIZE = "880px";
export const SMALL_PC = "1190PX";
export const coutries = [
  { id: "us", value: "United State" },
  { id: "il", value: "Israel" },
  { id: "ru", value: "Russia" },
  { id: "ar", value: "Argentina" },
  { id: "gb", value: "Great Britain" },
  { id: "et", value: "Ethiopia" },
];
export const languages = [
  { id: "ar", value: "Arabic" },
  { id: "de", value: "German" },
  { id: "en", value: "English" },
  { id: "he", value: "Hebrew" },
  { id: "it", value: "Italian" },
  { id: "no", value: "Norwegian" },
  { id: "pt", value: "Portuguese" },
  { id: "ru", value: "Russian" },
];
export const sortBy = [
  { id: "relevancy", value: "Relevancy" },
  { id: "popularity", value: "Popularity" },
  { id: "publishedAt", value: "Published At" },
];
export const filtersHeaders = [
  { id: "sources", value: "Sources" },
  { id: "country", value: "Country" },
  { id: "category", value: "Category" },
  { id: "Date", value: "Date" },
  { id: "sortby", value: "Sort By" },
  { id: "language", value: "Language" },
];

export const FilterOptions: Filters = {
  everything: {
    sortby: sortBy.map((item) => item.value),
    sources: [],
    language: languages.map((item) => item.value),
  },
  topheadlines: {
    country: coutries.map((item) => item.value),
    category: [
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology",
    ],
    sources: [],
  },
};

export const selectedFiltersOptions: Filters = {
  everything: {
    sortby: [],
    sources: [],
    language: [],
  },
  topheadlines: {
    country: [],
    category: [],
    sources: [],
  },
};
