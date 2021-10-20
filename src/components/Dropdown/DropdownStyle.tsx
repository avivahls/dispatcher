import styled from "styled-components";
import { BORDER_COLOR, GREY } from "../../Colors";
import './../../index.css';


export const DropdownContainer= styled.div`
  width: 15rem;
  margin: 0 auto;
`
export const DropdownHeader = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${GREY};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.375rem;
    padding: 0.9375rem;
    font-size: 1.5rem;
    background: white;
    border-radius: 0.625rem;
    border: 0.0625rem solid ${BORDER_COLOR};
`
export const DropdownList = styled.ul`
  padding:0;
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
`
export const DropdownItem = styled.li`
       padding: 0.3125rem;
       padding-left: 0.9375rem;
       font-family: Mulish;
       color: ${GREY};
       background-color: white;
       margin-bottom: 0.8em;
       &:hover{
        background: rgba(223, 224, 235, 0.41);
       }
`