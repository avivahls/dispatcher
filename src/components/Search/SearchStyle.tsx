import styled from "styled-components";

export const SearchStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  width: fit-content;
  height: 45px;
  padding: 0 0.9375rem;
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
