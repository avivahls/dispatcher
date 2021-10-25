import styled from "styled-components";
import { CARD_HEADER, GREY, LIGHT_GREY_2, SHADOW } from "../../Colors";
import { FlexRow, FlexRowCenter } from "../../Style/layouts";

export const BasicCard = styled(FlexRowCenter)`
  position: relative;
  align-items: center;
  background: white;
  border: 1px solid ${LIGHT_GREY_2};
  box-shadow: 0px 32px 64px ${SHADOW};
  border-radius: 20px;
`;

export const DataCardStyle = styled(BasicCard)`
  margin: 0 10px 20px 0;
  width: 100%;
  height: 260px;
`;
export const ChartCardStyle = styled(BasicCard)`
  padding: 35px 20px;
  margin: 0 10px 20px 0;
  flex-direction: column;
  align-items: flex-start;
  min-width: 390px;
  max-width: fit-content;
  height: 300px;
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
`;

export const DataCardContent = styled.div`
  width: 75%;
  padding: 20px;
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
  margin: 20px auto;
`;
export const CardDescription = styled.div`
  color: ${GREY};
  margin: 20px auto;
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
