import styled from "styled-components";
import { DARK_GREY, LIGHT_GREY_4 } from "../../Colors";
import { FlexColCenter, FlexRow } from "../../Style/layouts";

export const WelcomeContainer = styled(FlexRow)`
  height: 100vh;
  font-weight: normal;
  @media only screen and (max-width: 770px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const WelcomeContent = styled(FlexColCenter)`
  padding-left: 15px;
  align-items: flex-start;
  background-color: ${LIGHT_GREY_4};
  width: 60%;
  @media only screen and (max-width: 770px) {
    width: 100%;
    height: 60%;
  }
`;
export const WelcomeData = styled(FlexColCenter)`
  margin: auto 0;
  width: 60%;
  @media only screen and (max-width: 770px) {
    width: 100%;
    height: 60%;
    font-size: 10px;
  }
`;
export const WelcomeLogo = styled(FlexColCenter)`
  align-items: center;
  background-color: ${DARK_GREY};
  width: 40%;
  @media only screen and (max-width: 770px) {
    width: 100%;
    height: 40%;
  }
`;
