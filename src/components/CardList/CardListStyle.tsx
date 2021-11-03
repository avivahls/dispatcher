import styled from "styled-components";
import { FlexCol, IPAD_SIZE } from "../../style/layouts";

export const CardList = styled(FlexCol)`
  padding: 0;
  justify-content: space-between;
  align-items: center;
  overflow: scroll;
  height: 100%;
`;
export const DataCardListStyle = styled(CardList)`
  width: fit-content;
  height: 100vh;
  position: sticky;
  align-self: flex-start;
  @media only screen and (max-width: ${IPAD_SIZE}) {
    width: 100%;
  }
`;
export const ChartCardListStyle = styled(CardList)`
  width: fit-content;
  overflow: visible;
  @media only screen and (max-width: ${IPAD_SIZE}) {
    display: none;
  }
`;

export const BackGroundData = styled.div`
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;
