import styled from "styled-components";
import { GREY } from "../../utils/colors";
import { FlexRow, IPAD_SIZE, MOBILE_SIZE } from "../../utils/layouts";

export const Dashboard = styled(FlexRow)<{ isSmall: boolean }>`
  position: relative;
  width: 80%;
  margin: 0 auto;
  height: 100%;
  justify-content: space-between;
  align-items: stretch;
  z-index: ${(props) => (props.isSmall ? 10 : 1)};
  overflow: visible;
  @media only screen and (max-width: ${IPAD_SIZE}) {
    width: 95%;
  }
`;
export const DashboardTitle = styled.div`
  width: 80%;
  font-size: 27px;
  font-weight: bold;
  margin: 15px auto;
  padding-left: 15px;

  @media only screen and (max-width: ${IPAD_SIZE}) {
    font-size: 27px;
    width: 95%;
  }
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    font-size: 24px;
  }
`;
export const DashboardTitleTotal = styled.div`
  color: ${GREY};
  width: 80%;
  margin: 10px auto;
  padding-left: 20px;
  @media only screen and (max-width: ${IPAD_SIZE}) {
    width: 95%;
  }
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    font-size: 15px;
    display: none;
  }
`;
export const DashboardDivider = styled.div`
  border: 1px solid #d9dbe9;
  width: 80%;
  margin: 0 auto;
  @media only screen and (max-width: ${IPAD_SIZE}) {
    display: none;
  }
`;
