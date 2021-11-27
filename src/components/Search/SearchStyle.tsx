import styled, { css } from "styled-components";
import { GREY } from "../../style/Colors";
import {
  FlexCol,
  FlexRowCenter,
  IPAD_SIZE,
  MOBILE_SIZE,
} from "../../style/layouts";

export const SearchAndRecentContainer = styled(FlexCol)<{
  isSearchable: boolean;
}>`
  padding: 0px;
  width: ${(props) => (props.isSearchable ? "80%" : "fit-content")};
  ${(props) =>
    props.isSearchable
      ? css`
          left: 0;
          justify-content: space-between;
        `
      : ``};
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    display: none;
  }
`;
export const SearchAndRecentSmall = styled(FlexCol)<{ isSearch: boolean }>`
  display: none;
  position: absolute;
  z-index: 10;
  width: 100vw;
  height: 100%;
  padding: 0px;
  transition: transform 1s ease-in-out;
  will-change: transform;
  transform: translateX(100%);
  overflow-y: scroll;
  ${(props) =>
    props.isSearch
      ? css`
          display: flex;
          transform: translateX(0);
          box-shadow: -0.125rem 0 1.25rem 0 #343851;
        `
      : ``};
`;
export const SearchStyle = styled(FlexRowCenter)<{ isSearchable: boolean }>`
  border-radius: 10px;
  background-color: white;
  height: 50px;
  padding: 0;
  margin: 10px 0px;
  ${(props) =>
    props.isSearchable
      ? css`
          justify-content: flex-start;
        `
      : ``};
`;
export const SmallSearchStyle = styled(FlexRowCenter)<{
  isSearchMode: boolean;
}>`
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 54px;
  padding: 10px;
  margin: 0px;
  /* ${(props) =>
    props.isSearchMode
      ? css`
          border-bottom: 3px solid black;
        `
      : ``} */
`;
export const InputStyle = styled.input.attrs({
  type: "text",
  placeholder: "Search",
})`
  background-color: transparent;

  color: ${GREY};
  border: none;
  font-size: 18px;
  padding: auto 0.9375rem;
  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    opacity: 0.5;
  }
  @media only screen and (max-width: ${IPAD_SIZE}) {
    background-color: transparent;
  }
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    font-size: 16px;
    padding-top: 3px;
  }
`;
export const SearchIcon = styled.img`
  flex: none;
  width: fit-content;
  margin: 0rem 0.5rem;
`;
export const SearchDivider = styled.div`
  border: 1px solid #d9dbe9;
  background-color: #d9dbe9;
  height: 90%;
  margin: auto 0px;
  width: 1px;
`;
export const DropdownSearch = styled(FlexRowCenter)<{ isSearchable: boolean }>`
  align-items: center;
  margin-bottom: 0px;
  margin-top: 3px;
  ${(props) =>
    props.isSearchable
      ? css`
          justify-content: end;
          flex: 1;
        `
      : ``};
  @media only screen and (max-width: ${IPAD_SIZE}) {
    display: none;
  }
`;
