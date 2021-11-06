import styled from "styled-components";
import {
  BORDER_COLOR,
  DROPDOWN_HOVER,
  GREY,
  LIGHT_GREY_4,
} from "../../style/Colors";
import { FlexCol, FlexRow } from "../../style/layouts";

export const RecentSearchContainer = styled(FlexCol)`
  padding: 5px 16px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  z-index: 3;
`;
export const RecentSearchTitle = styled(FlexRow)`
  justify-content: space-between;
`;
export const RecentSearchItem = styled(FlexRow)`
  cursor: pointer;
  justify-content: space-between;
  font-size: 13px;
  font-weight: normal;
  margin: 5px 0;
  &:hover {
    background: ${DROPDOWN_HOVER};
  }
`;

export const SmallRecentSearch = styled(FlexCol)`
  color: ${GREY};
  padding: 15px 16px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  background-color: ${LIGHT_GREY_4};
  position: relative;
  height: 100%;
  z-index: 3;
`;
export const SmallRecentSearchTitle = styled(FlexRow)`
  justify-content: space-between;
  font-weight: bold;
`;
export const SmallRecentSearchItem = styled(FlexRow)`
  cursor: pointer;
  justify-content: space-between;
  border-bottom: 1px solid ${BORDER_COLOR};
  padding: 5px 15px;
  font-size: 13px;
  font-weight: normal;
  margin: 5px 0;
  &:hover {
    background: ${DROPDOWN_HOVER};
  }
`;
