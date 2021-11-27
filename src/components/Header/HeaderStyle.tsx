import styled from "styled-components";
import { BLUE, DARK_GREY } from "../../style/Colors";
import {
  FlexRow,
  FlexRowCenter,
  IPAD_SIZE,
  MOBILE_SIZE,
} from "../../style/layouts";

export const HeaderStyle = styled(FlexRow)`
  justify-content: space-between;
  background-color: ${DARK_GREY};
  width: 100%;
  height: 74px;
`;
export const UserStyle = styled(FlexRowCenter)`
  background-color: ${BLUE};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  align-items: center;
  margin: auto 0px;
  margin-left: 15px;
  cursor: pointer;
  @media only screen and (max-width: ${IPAD_SIZE}) {
    width: 50px;
    height: 50px;
  }
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    width: 35px;
    height: 35px;
  }
`;
export const IconsContainer = styled(FlexRow)`
  justify-content: end;
  align-items: center;
  color: white;
  float: right;
  margin: auto 10px;
`;
export const LogoContainer = styled.div`
  width: 10%;
  margin: auto 5px;
  @media only screen and (max-width: 820px) and (min-width: ${MOBILE_SIZE}) {
    margin-right: 30px;
  }
`;
export const SearchContainer = styled.div`
  width: 80%;
`;
