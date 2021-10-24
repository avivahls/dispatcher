import styled from "styled-components";
import { BORDER_COLOR, GREY } from "../../Colors";
import "./../../index.css";

export const DropdownContainer = styled.div`
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
export const DropdownList = styled.ul`
  padding: 0;
  margin: 0;
  margin-bottom: 0;
  padding-top: 0.625rem;
  box-sizing: border-box;
  font-size: 1.3rem;
  background: white;
  border: 0.0625rem solid ${BORDER_COLOR};
  box-shadow: 0rem 0.25rem 0.75rem rgba(0, 0, 0, 0.08);
  border-radius: 0.625rem;
  overflow: scroll;
  height: 7.875rem;
  z-index: 6;
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
  padding: 0.3125rem;
  padding-left: 0.9375rem;
  font-family: Mulish;
  color: ${GREY};
  background-color: white;
  margin-bottom: 0.8em;
  &:hover {
    background: rgba(223, 224, 235, 0.41);
  }
`;
