import styled from "styled-components";
import "./../../index.css";

export const FilterBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 80%;
  height: 60px;
  margin-right: 0px;
  margin: auto;
  margin-top: 15px;
  @media only screen and (max-width: 770px) {
    display: none;
  }
`;
export const FilterBarSmallScreen = styled(FilterBarContainer)`
  display: none;
  width: 100%;
  height: 60px;
  margin: auto;
  padding: 5px;
  justify-content: space-between;
  background-color: white;
  align-items: center;

  @media only screen and (max-width: 770px) {
    display: flex;
  }
`;
