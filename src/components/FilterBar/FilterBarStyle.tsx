import styled from "styled-components";
import { BORDER_COLOR, DROPDOWN_HOVER } from "../../style/Colors";
import { FlexRow, IPAD_SIZE, MOBILE_SIZE } from "../../style/layouts";
import "./../../index.css";

export enum CatergoryType {
  everything = "everything",
  topheadlines = "topheadlines",
}
export const FilterBarContainer = styled(FlexRow)`
  justify-content: flex-start;
  width: 80%;
  height: 60px;
  margin-right: 0px;
  margin: auto;
  margin-top: 15px;
  @media only screen and (max-width: ${IPAD_SIZE}) {
    display: none;
  }
`;
export const FilterBarSmallScreen = styled(FilterBarContainer)<{
  type: any;
}>`
  display: none;
  width: 100%;
  height: 60px;
  margin: auto;
  padding: 5px;
  justify-content: ${(props) =>
    props.type === CatergoryType.everything ? "space-between" : "end"};
  background-color: white;
  align-items: center;

  @media only screen and (max-width: ${IPAD_SIZE}) {
    display: flex;
  }
`;
export const SideBarFilterStyle = styled(FlexRow)`
  position: relative;
  justify-content: space-between;
  border-top: 1px solid ${BORDER_COLOR};
  margin: 0px;
  padding: 5px 15px;
  z-index: 20;
  &:hover {
    background: ${DROPDOWN_HOVER};
  }
  cursor: pointer;
`;

export enum SubCategoryType {
  sources,
  country,
  category,
  sort,
  language,
  dates,
}
export interface FilterProps {
  type: CatergoryType;
}
export type Filters = {
  [CatergoryType: string]: {
    [SubCategoryType: string]: string[];
  };
};
