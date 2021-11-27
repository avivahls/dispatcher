import styled, { css } from "styled-components";
import {
  BORDER_COLOR,
  DROPDOWN_HOVER,
  GREY,
  LIGHT_GREY_2,
} from "../../style/Colors";
import { FlexRow, IPAD_SIZE } from "../../style/layouts";
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
  isSmall: boolean;
  type: any;
}>`
  display: none;
  width: 100%;
  height: 44px;
  margin: auto;
  padding: 5px;
  border: 1px solid ${LIGHT_GREY_2};
  ${(props) =>
    props.isSmall
      ? css`
          z-index: 10;
        `
      : ``};
  justify-content: space-between;
  background-color: white;
  align-self: center;
  @media only screen and (max-width: ${IPAD_SIZE}) {
    display: flex;
  }
`;
export const SideBarFilterStyle = styled(FlexRow)<{
  isDisable: boolean;
  selected: boolean;
}>`
  color: ${GREY};
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
  ${(props) =>
    props.isDisable
      ? css`
          opacity: 0.5;
          cursor: not-allowed;
        `
      : ``};
  ${(props) =>
    props.selected
      ? css`
          background-color: ${DROPDOWN_HOVER};
        `
      : ``};
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
  isFirst: boolean;
}
export type Filters = {
  [CatergoryType: string]: {
    [SubCategoryType: string]: any[];
  };
};
