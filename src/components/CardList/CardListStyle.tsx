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
  width: 66%;
  height: 100vh;
  position: sticky;
  top: 0;
  align-self: flex-start;
`;
export const ChartCardListStyle = styled(CardList)`
  width: 34%;
`;

export const Dashboard = styled(FlexRow)`
  position: relative;
  width: 70%;
  margin: 0 auto;
  height: 100%;
  justify-content: space-between;
  align-items: stretch;
  z-index: 1;
`;
