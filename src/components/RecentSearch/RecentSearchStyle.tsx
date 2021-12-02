import styled from "styled-components";
import { DROPDOWN_HOVER } from "../../style/colors";
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
  justify-content: space-between;
  font-size: 13px;
  font-weight: normal;
  margin: 5px 0;
  &:hover {
    background: ${DROPDOWN_HOVER};
  }
`;
