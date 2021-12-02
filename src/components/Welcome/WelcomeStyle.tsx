import styled from "styled-components";
import { DARK_GREY, GREY, LIGHT_GREY_4 } from "../../utils/colors";
import {
  FlexColCenter,
  FlexRow,
  IPAD_SIZE,
  MOBILE_SIZE,
} from "../../utils/layouts";

export const WelcomeContainer = styled(FlexRow)`
  height: 100vh;
  color: ${GREY};
  @media only screen and (max-width: ${IPAD_SIZE}) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const WelcomeContent = styled(FlexColCenter)`
  padding-left: 15px;
  align-items: flex-start;
  background-color: ${LIGHT_GREY_4};
  width: 60%;
  @media only screen and (max-width: ${IPAD_SIZE}) {
    padding-left: 0px;
    justify-content: space-between;
    width: 100%;
    height: 60%;
  }
`;
export const WelcomeData = styled(FlexColCenter)`
  margin: auto 0;
  width: 60%;
  @media only screen and (max-width: ${IPAD_SIZE}) {
    width: 100%;
    height: 100%;
    font-size: 10px;
    justify-content: space-between;
    margin-bottom: 10px;
  }
`;
export const WelcomeLogo = styled(FlexColCenter)`
  align-items: center;
  background-color: ${DARK_GREY};
  width: 40%;
  @media only screen and (max-width: ${IPAD_SIZE}) {
    width: 100%;
    height: 40%;
  }
`;
export const WelcomeDivider = styled.div`
  border: 1px solid #d9dbe9;
  width: 100%;
  margin: 15px auto;
  margin-top: 20px;
  @media only screen and (max-width: ${IPAD_SIZE}) {
    width: 90%;
    align-self: center;
    text-align: center;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    bottom: 0px;
  }
`;
export const WelcomeTitle = styled.div`
  font-size: 30px;
  @media only screen and (max-width: ${IPAD_SIZE}) {
    margin-top: 10px;
    align-self: center;
  }
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    font-size: 25px;
  }
  @media only screen and (min-width: 1180px) {
    font-size: 40px;
  }
`;
export const WelcomeText = styled.div`
  color: ${GREY};
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 20px;
  @media only screen and (max-width: ${IPAD_SIZE}) {
    top: 0px;
    font-size: 25px;

    margin: auto 20px;
    margin-top: 10px;
    text-align: center;
  }
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    font-size: 20px;
    margin-top: 20px;
  }
  @media only screen and (min-width: 1180px) {
    font-size: 30px;
    margin-top: 20px;
  }
`;
