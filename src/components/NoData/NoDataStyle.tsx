import styled from "styled-components";
import NotFound from "../../assets/not-found.svg";
import Chart from "../../assets/chart.svg";
import { FlexColCenter, MOBILE_SIZE } from "../../style/layouts";

export const NoDataContainer = styled(FlexColCenter)`
  width: 100%;
  align-items: center;
  align-self: center;
  margin: auto;
  font-weight: bold;
`;
export const NoDataCStyle = styled.img.attrs({ src: NotFound })`
  height: 40%;
  width: 40%;
  margin: 0px;
  margin-bottom: 20px;
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin-top: 20px;
    width: 70%;
  }
`;
export const NoChartStyle = styled.img.attrs({ src: Chart })`
  height: 60%;
  width: 60%;
  margin: 0px;
  margin-bottom: 20px;
`;
