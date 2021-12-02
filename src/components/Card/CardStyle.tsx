import styled from "styled-components";
import { CARD_HEADER, GREY, LIGHT_GREY_2, SHADOW } from "../../style/colors";
import { FlexRow, FlexRowCenter, MOBILE_SIZE } from "../../style/layouts";

export const BasicCard = styled(FlexRowCenter)`
  position: relative;
  align-items: center;
  background-color: white;
  z-index: 0;
  border: 1px solid ${LIGHT_GREY_2};
  box-shadow: 0px 32px 64px ${SHADOW};
  border-radius: 20px;
  overflow: visible;
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const DataCardStyle = styled(BasicCard)`
  margin: 0 10px 20px 0;
  width: 100%;
  height: fit-content;
`;
export const ChartCardStyle = styled(BasicCard)`
  padding: 35px 20px;
  margin: 0 10px 20px 0;
  flex-direction: column;
  align-items: flex-start;
  height: 300px;
  width: fit-content;
  border-radius: 20px;
`;
export const DataCardHeader = styled(FlexRow)`
  justify-content: space-between;
  color: ${CARD_HEADER};
`;
export const TagList = styled(FlexRow)`
  justify-content: space-between;
  align-items: stretch;
  color: ${CARD_HEADER};
`;
export const DataCardImg = styled.img`
  width: 25%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px 0 0 20px;
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 33%;
  }
`;

export const DataCardContent = styled.div`
  width: 75%;
  padding: 15px;
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 67%;
    padding-left: 25px;
  }
`;
export const ChartDivider = styled.div`
  background: ${GREY};
  border: 4px solid ${GREY};
  width: 20px;
  height: 0px;
  border-radius: 10px;
`;
export const CardSource = styled.div`
  color: ${CARD_HEADER};
  margin: auto 0;
`;
export const CardDescription = styled.div`
  color: ${GREY};
  margin: auto;
  width: fit-content;
  overflow: auto;
`;
export const CardTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
export const ChartCardTitle = styled.span`
  font-size: 23px;
  font-weight: bold;
`;
export const DataButtonContainer = styled.div`
  float: right;
`;
export type IData = {
  source: { id: string; name: string };
  tags: string[];
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
};
