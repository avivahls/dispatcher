import styled, { css } from "styled-components";
import { BORDER_COLOR, DROPDOWN_HOVER, GREY, SHADOW } from "../../style/Colors";
import { FlexCol, FlexRow } from "../../style/layouts";
import "./../../index.css";

export const DropdownContainer = styled(FlexCol)<{
  isSmall: boolean;
  isDisable: boolean;
}>`
  width: 200px;
  margin: 0px 5px;
  height: 100%;
  border-radius: 10px;
  ${(props) =>
    props.isDisable
      ? css`
          opacity: 0.5;
          cursor: not-allowed;
        `
      : ``};
  ${(props) =>
    props.isSmall
      ? css`
          z-index: 11;
        `
      : ``};
`;
export const SideBarDropdown = styled(FlexCol)`
  width: 100%;
  margin: 0 5px;
`;
export const DropdownListContainer = styled.div<{
  isSmall: boolean;
  isDisable: boolean;
}>`
  position: relative;
  border-radius: 10px;
  margin-top: 5px;
  ${(props) =>
    props.isSmall
      ? css`
          z-index: 11;
        `
      : ``};
  ${(props) =>
    props.isDisable
      ? css`
          display: none;
        `
      : ``};
`;
export const DropdownHeader = styled(FlexRow)<{ isDisable: boolean }>`
  color: ${GREY};
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  /* margin-bottom: 5px; */
  padding: 12px 12px;
  font-size: 18px;
  background: white;
  border-radius: 0.625rem;
  border: 0.0625rem solid ${BORDER_COLOR};
  border: none;
  ${(props) =>
    props.isDisable
      ? css`
          opacity: 0.5;
          cursor: not-allowed;
        `
      : ``};
`;
export const DropdownBoldHeader = styled(DropdownHeader)`
  font-weight: bold;
  justify-content: left;
`;
export const SideDropdownHeader = styled(FlexRow)`
  color: ${GREY};
  justify-content: start;
  align-items: center;
  margin: 0;
  padding: 10px 10px;
  font-size: 20.8px;
  background: white;
  border: none;
`;
export const DropdownList = styled.ul`
  padding: 0;
  margin-top: 5px;
  margin-bottom: 0px;
  padding-top: 10px;
  padding-bottom: 0px;
  box-sizing: border-box;
  font-size: 16px;
  background: white;
  border: 1px solid ${BORDER_COLOR};
  box-shadow: 0px 4px 12px ${SHADOW};
  border-radius: 10px;
  overflow: scroll;
  height: min(100%, 7.875rem);
  position: relative;
  z-index: 2;
  &::-webkit-scrollbar {
    background: none;
    width: 0.375rem;
    height: 90%;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.375rem;
    background-color: ${GREY};
  }
  &:first-child {
    padding-top: 0.8em;
  }
  cursor: pointer;
`;
export const DropdownListLogout = styled(DropdownList)`
  right: 0;
  overflow: hidden;
  position: absolute;
  padding: 20px;
  height: fit-content;
  margin-right: 0px;
  padding-right: 0px;
  padding-left: 0px;
  margin-top: 30px;
  padding-top: 30px;
  padding-bottom: 0px;
`;
export const SideDropdownsList = styled.ul`
  padding: 0;
  margin-top: 0px;
  box-sizing: border-box;
  font-size: 20.8px;
  background: white;
  position: relative;
  list-style-type: none;
  z-index: 2;
  &::-webkit-scrollbar {
    background: none;
    width: 0.375rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.375rem;
    background-color: ${GREY};
  }
  &:first-child {
    padding-top: 0.8em;
  }
  cursor: pointer;
`;
export const DropdownItem = styled.li`
  padding: 3px 15px;
  font-family: Mulish;
  color: ${GREY};
  background-color: white;
  margin-bottom: 0.8em;
  &:hover {
    background: ${DROPDOWN_HOVER};
  }
  cursor: pointer;
`;
export const SelectedDropdownItem = styled(DropdownItem)`
  background-color: ${DROPDOWN_HOVER};
`;

export const SideDropdownItem = styled.li`
  padding: 5px;
  padding-left: 15px;
  font-family: Mulish;
  color: ${GREY};
  background-color: white;
  border-top: 1px solid ${BORDER_COLOR};

  &:hover {
    background: ${DROPDOWN_HOVER};
  }
  cursor: pointer;
`;
