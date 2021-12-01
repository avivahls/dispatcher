import styled, { css } from "styled-components";
import { CARD_HEADER, GREY, LIGHT_GREY_2, SHADOW } from "../../utils/colors";
import {
  FlexRow,
  FlexRowCenter,
  IPAD_SIZE,
  MOBILE_SIZE,
  SMALL_PC,
} from "../../utils/layouts";
import { ChartType } from "../Chart/ChartType";

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
  width: 98%;
  height: 300px;
  margin-left: auto;
  @media only screen and (max-width: 1050px) and (min-width: ${IPAD_SIZE}) {
    width: 93%;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin-top: 10px;
    height: fit-content;
    width: 96%;
  }
`;
export const ChartCardStyle = styled(BasicCard)<{ type: ChartType }>`
  padding: 35px 20px;
  margin: 0 10px 20px 0;
  flex-direction: column;
  align-items: flex-start;
  height: 300px;
  width: 300px;
  border-radius: 20px;
  padding-top: 45px;
  ${(props) =>
    props.type === ChartType.Doughnut
      ? css`
          padding-top: 15px;
          @media only screen and (max-width: ${SMALL_PC}) {
            padding-top: 10px;
          }
        `
      : ``};
  @media only screen and (max-width: ${SMALL_PC}) {
    height: 250px;
    width: 250px;
  }
  @media only screen and (min-width: 1700px) {
    height: 400px;
    width: 400px;
  }
`;
export const DataCardHeader = styled(FlexRow)`
  justify-content: space-between;
  color: ${CARD_HEADER};
  margin-top: 0px;
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin: 10px auto;
    margin-left: 0px;
    padding-right: 5px;
    padding-left: 5px;
  }
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
    height: 30%;
  }
`;

export const DataCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 15px 15px;
  padding-bottom: 0px;
  justify-content: space-around;
  height: 90%;
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: fit-content;
    padding-bottom: 10px;
    padding: 10px 10px;
  }
`;
export const ChartDivider = styled.div`
  background: ${GREY};
  border: 2px solid ${GREY};
  width: 20px;
  height: 0px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
export const CardSource = styled.div`
  color: ${CARD_HEADER};
  margin: 10px 0;
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    padding-right: 5px;
    padding-left: 5px;
  }
`;
export const CardDescription = styled.div<{ isHebrew: boolean }>`
  color: ${GREY};
  display: -webkit-box;
  width: 40vw;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 0px;
  margin: 10px 0px;
  padding: 0px;
  ${(props) =>
    props.isHebrew
      ? css`
          direction: rtl;
          padding-right: 15px;
        `
      : ``}
  @media only screen and (max-width: 1050px) and (min-width: ${IPAD_SIZE}) {
    width: 31vw;
  }
  @media only screen and (min-width: 1050px) and (max-width: 1450px) {
    width: 34vw;
  }
  @media only screen and (max-width: ${IPAD_SIZE}) {
    width: 64vw;
    padding-right: 15px;
    margin: 10px 0px;
  }
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    width: 87vw;
    padding: 5px;
    font-size: 15px;
    padding: 1px 0px;
    margin-bottom: 10px;
  }
`;
export const CardTitle = styled.span<{ isHebrew: boolean }>`
  font-size: 20px;
  font-weight: bold;
  padding: 0px;
  margin: 10px 0px;
  ${(props) =>
    props.isHebrew
      ? css`
          direction: rtl;
          padding-right: 15px;
        `
      : ``}
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    padding: 5px;
    font-size: 17px;
    margin: 0px;
  }
`;
export const ChartCardTitle = styled.span`
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const DataButtonContainer = styled.div`
  float: right;
  margin: 10px 0px;
  margin-right: 15px;
  align-self: flex-end;
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    margin: 0px;
    margin-top: 10px;
    width: 100%;
  }
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
