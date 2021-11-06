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
export const IPAD_SIZE = "770px";

export const FilterOptions: Filters = {
  everything: {
    sortby: ["relevancy", "popularity", "publishedAt"],
    dates: [],
    sources: [],
    language: [
      "ar",
      "de",
      "en",
      "es",
      "fr",
      "he",
      "it",
      "nl",
      "no",
      "pt",
      "ru",
      "se",
      "ud",
      "zh",
    ],
  },
  topheadlines: {
    country: [
      "ae",
      "ar",
      "at",
      "au",
      "be",
      "bg",
      "br",
      "ca",
      "ch",
      "cn",
      "co",
      "cu",
      "cz",
      "de",
      "eg",
      "fr",
      "gb",
      "gr",
      "hk",
      "hu",
      "id",
      "ie",
      "il",
      "in",
      "it",
      "jp",
      "kr",
      "lt",
      "lv",
      "ma",
      "mx",
      "my",
      "ng",
      "nl",
      "no",
      "nz",
      "ph",
      "pl",
      "pt",
      "ro",
      "rs",
      "ru",
      "sa",
      "se",
      "sg",
      "si",
      "sk",
      "th",
      "tr",
      "tw",
      "ua",
      "us",
      "ve",
      "za",
    ],
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
export const selectedFilters: Filters = {
  everything: {
    sortby: [],
    dates: [],
    sources: [],
    language: [],
  },
  topheadlines: {
    country: [],
    category: [],
    sources: [],
  },
};
