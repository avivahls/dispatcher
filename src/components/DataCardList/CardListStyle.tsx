import styled from "styled-components";

export const CardList = styled.div`
  display: flex;
  padding: 0;
  flex-direction: column;
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

export const Dashboard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: stretch;
`;
