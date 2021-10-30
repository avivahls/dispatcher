import styled from "styled-components";
import { FlexCol, FlexRow } from "../../Style/layouts";

export const CardList = styled(FlexCol)`
  padding: 0;
  justify-content: space-between;
  align-items: center;
  overflow: scroll;
  height: 100%;
`;
export const DataCardListStyle = styled(CardList)`
  width: fit-content; //66%
  height: 100vh;
  position: sticky;
  top: 0;
  align-self: flex-start;
  overflow: visible;
  @media only screen and (max-width: 770px) {
    width: 100%;
  }
`;
export const ChartCardListStyle = styled(CardList)`
  width: fit-content; ///34%
  overflow: visible;
  @media only screen and (max-width: 770px) {
    display: none;
  }
`;

export const Dashboard = styled(FlexRow)`
  position: relative;
  width: 80%;
  margin: 0 auto;
  height: 100%;
  justify-content: space-between;
  align-items: stretch;
  z-index: 1;
  overflow: visible;
  @media only screen and (max-width: 770px) {
    width: 90%;
  }
`;
export const DashboardTitle = styled.div`
  width: 80%;
  font-size: 27px;
  font-weight: bold;
  margin: 10px auto;
  @media only screen and (max-width: 770px) {
    font-size: 20px;
    width: 90%;
  }
`;
export const DashboardDivider = styled.div`
  border: 1px solid #d9dbe9;
  width: 80%;
  margin: 0 auto;
`;
