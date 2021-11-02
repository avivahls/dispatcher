import styled from "styled-components";
import { FlexRow, IPAD_SIZE } from "../../Style/layouts";

export const Dashboard = styled(FlexRow)`
  position: relative;
  width: 80%;
  margin: 0 auto;
  height: 100%;
  justify-content: space-between;
  align-items: stretch;
  z-index: 1;
  overflow: visible;
  @media only screen and (max-width: ${IPAD_SIZE}) {
    width: 90%;
  }
`;
export const DashboardTitle = styled.div`
  width: 80%;
  font-size: 27px;
  font-weight: bold;
  margin: 10px auto;
  @media only screen and (max-width: ${IPAD_SIZE}) {
    font-size: 20px;
    width: 90%;
  }
`;
export const DashboardDivider = styled.div`
  border: 1px solid #d9dbe9;
  width: 80%;
  margin: 0 auto;
`;
