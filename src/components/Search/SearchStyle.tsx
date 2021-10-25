import styled from "styled-components";
import { FlexCol, FlexRowCenter } from "../../Style/layouts";

export const SearchAndRecentContainer = styled(FlexCol)`
  width: clamp(250px, 45vw, 600px);
`;
export const SearchStyle = styled(FlexRowCenter)`
  border-radius: 10px;
  background-color: white;
  height: 45px;
  padding: 0;
  margin: 10px 0px;
`;
export const InputStyle = styled.input.attrs({
  type: "text",
  placeholder: "Search",
})`
  border: none;
  font-size: 1.5rem;
  padding: 0 0.9375rem;
  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    opacity: 0.5;
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
`;
