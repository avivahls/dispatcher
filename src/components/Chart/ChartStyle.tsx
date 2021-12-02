import styled from "styled-components";
import { GREY } from "../../utils/colors";
import { FlexCol, FlexRow } from "../../utils/layouts";

export const LegendListContainer = styled(FlexCol)`
  height: 45%;
  width: 95%;
  font-family: Mulish;
  font-size: 15px;
  color: ${GREY};
  overflow-y: auto;
  border-bottom: 8px;
`;
export const LegendContainer = styled(FlexRow)`
  justify-content: space-between;
  margin: 8px 0px;
`;
export const TitleAndBullet = styled(FlexRow)`
  justify-content: start;
  align-items: center;
`;
export const LegendBullet = styled.div<{ color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  margin-right: 10px;
  background-color: ${(props) => props.color};
`;
export const LegendTitle = styled.div``;
export const LegendData = styled.div``;
