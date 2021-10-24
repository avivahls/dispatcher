import styled from "styled-components";
import { BORDER_COLOR, DROPDOWN_HOVER, GREY, SHADOW } from "../../Colors";
import { FlexRow } from "../../Style/layouts";
import "./../../index.css";

export const DropdownContainer = styled.div`
  width: 240px;
  margin: 0 auto;
`;
export const DropdownHeader = styled(FlexRow)`
  color: ${GREY};
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  padding: 15px;
  font-size: 24px;
  background: white;
  border-radius: 10px;
  border: 1px solid ${BORDER_COLOR};
`;
export const DropdownList = styled.ul`
  padding: 0;
  margin: 0;
  margin-bottom: 0;
  padding-top: 10px;
  box-sizing: border-box;
  font-size: 20.8px;
  background: white;
  border: 1px solid ${BORDER_COLOR};
  box-shadow: 0px 4px 12px ${SHADOW};
  border-radius: 10px;
  overflow: scroll;
  height: 126px;
  &::-webkit-scrollbar {
    background: none;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: ${GREY};
  }
  &:first-child {
    padding-top: 0.8em;
  }
`;
export const DropdownItem = styled.li`
  padding: 5px;
  padding-left: 15px;
  font-family: Mulish;
  color: ${GREY};
  background-color: white;
  margin-bottom: 0.8em;
  &:hover {
    background: ${DROPDOWN_HOVER};
  }
`;
