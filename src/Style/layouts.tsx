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
    dates: [],
    sources: ["ABC NEWS", "WALLA"],
    language: [],
  },
  topheadlines: {
    country: ["USA", "ISRAEL", "FRANCE"],
    category: ["COVID", "SPORT"],
    sources: ["ABC NEWS", "WALLA"],
  },
};
export const selectedFilters: Filters = {
  everything: {
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
