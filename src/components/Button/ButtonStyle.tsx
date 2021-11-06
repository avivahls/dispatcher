import styled from "styled-components";
import {
  BLUE,
  GREY,
  LIGHT_GREY_2,
  TEXT_BTN_BACKGROUND,
} from "../../style/Colors";
import { MOBILE_SIZE } from "../../style/layouts";

export const ButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 16px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  cursor: pointer;
`;

export const Icon = styled.img`
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 8px;
  width: 30px;
`;
export const SmallIcon = styled(Icon)`
  width: 15px;
`;
export const SmallSearchIcon = styled.img`
  display: none;
  cursor: pointer;
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    display: flex;
  }
`;

export const PrimaryButton = styled(ButtonStyled)`
  color: white;
  background: ${BLUE};
  border-radius: 20px;
  &:hover {
    opacity: 0.8;
  }
`;
export const SideBarButton = styled(PrimaryButton)`
  width: 50%;
  align-self: center;
  bottom: 0px;
`;

export const WelcomeButton = styled(ButtonStyled)`
  color: white;
  width: 100%;
  background: ${BLUE};
  border-radius: 10px;
  &:hover {
    opacity: 0.8;
  }
`;
export const SecondaryButton = styled(ButtonStyled)`
  color: ${GREY};
  background: ${LIGHT_GREY_2};
  border-radius: 20px;
  &:hover {
    opacity: 0.8;
  }
`;
export const TextButton = styled(ButtonStyled)`
  color: ${GREY};
  background: white;
  &:hover {
    background: ${TEXT_BTN_BACKGROUND};
    border-radius: 20px;
  }
`;
export const RecentSearchSmallButton = styled(TextButton)`
  background: ${LIGHT_GREY_2};
  font-weight: bold;
`;
