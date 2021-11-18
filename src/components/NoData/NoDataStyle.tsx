import styled from "styled-components";
import NotFound from "../../assets/not-found.svg";
import Chart from "../../assets/chart.svg";
import { FlexColCenter } from "../../style/layouts";

export const NoDataContainer = styled(FlexColCenter)`
  width: 100%;
  align-items: center;
  align-self: center;
  margin: auto;
`;
export const NoDataCStyle = styled.img.attrs({ src: NotFound })`
  height: 40%;
  width: 40%;
  margin: auto;
`;
export const NoChartStyle = styled.img.attrs({ src: Chart })`
  height: 60%;
  width: 60%;
  margin: auto;
`;
