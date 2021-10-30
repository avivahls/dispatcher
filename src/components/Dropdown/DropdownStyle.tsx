import styled from "styled-components";
import { BORDER_COLOR, DROPDOWN_HOVER, GREY, SHADOW } from "../../Colors";
import "./../../index.css";

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 5px;
`;
export const SideBarDropdown = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 5px;
`;
export const DropdownHeader = styled.div`
  color: ${GREY};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  margin-bottom: 5px;
  padding: 10px 10px;
  font-size: 1.3rem;
  background: white;
  border-radius: 0.625rem;
  border: 0.0625rem solid ${BORDER_COLOR};
  border: none;
`;
export const SideDropdownHeader = styled.div`
  color: ${GREY};
  /* cursor: pointer; */
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: 0;
  /* margin-bottom: 5px; */
  padding: 10px 10px;
  font-size: 1.3rem;
  background: white;
  /* border-radius: 0.625rem; */
  /* border: 0.0625rem solid ${BORDER_COLOR}; */
  border: none;
`;
export const DropdownList = styled.ul`
  padding: 0;
  margin-top: 10px;
  margin-bottom: 0;
  padding-top: 10px;
  box-sizing: border-box;
  font-size: 20.8px;
  background: white;
  border: 1px solid ${BORDER_COLOR};
  box-shadow: 0px 4px 12px ${SHADOW};
  border-radius: 10px;
  overflow: scroll;
  height: 7.875rem;
  position: relative;
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
`;
export const SideDropdownsList = styled.ul`
  padding: 0;
  margin-top: 0px;
  /* margin-bottom: 0; */
  /* padding-top: 10px; */
  box-sizing: border-box;
  font-size: 20.8px;
  background: white;
  /* border-top: 1px solid ${BORDER_COLOR}; */
  /* box-shadow: 0px 4px 12px ${SHADOW}; */
  /* border-radius: 10px; */
  /* overflow: scroll; */
  /* height: 7.875rem; */
  cursor: pointer;
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
`;
export const DropdownItem = styled.li`
  padding: 30px 15px;
  font-family: Mulish;
  color: ${GREY};
  background-color: white;
  margin-bottom: 0.8em;
  &:hover {
    background: ${DROPDOWN_HOVER};
  }
`;
export const SideDropdownItem = styled.li`
  padding: 5px;
  padding-left: 15px;
  font-family: Mulish;
  color: ${GREY};
  background-color: white;
  border-top: 1px solid ${BORDER_COLOR};
  /* margin-bottom: 0.8em; */
  &:hover {
    background: ${DROPDOWN_HOVER};
  }
`;
