import styled, { css } from "styled-components";
import {
  BLUE,
  GREY,
  LIGHT_GREY_2,
  TEXT_BTN_BACKGROUND,
} from "../../utils/colors";
import { IPAD_SIZE, MOBILE_SIZE } from "../../utils/layouts";

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

export const Icon = styled.img<{ isSmall: boolean; isFiltered: boolean }>`
  ${(props) =>
    props.isFiltered
      ? css`
          background:rgba(90, 90, 137, 0.5)
          border-radius: 10px;
        `
      : ``}
  flex: none;
  order: 1;
  flex-grow: 0;
  width: 30px;
  height: 30px;
  margin: auto 10px;
  ${(props) =>
    props.isSmall
      ? css`
          z-index: 10;
        `
      : ``};
`;
export const SmallIcon = styled(Icon)`
  width: 15px;
  height: 15px;
  cursor: pointer;
  margin-top: auto;
  margin-bottom: auto;
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
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    width: 100%;
  }
`;
export const SideBarButton = styled(PrimaryButton)`
  width: 50%;
  align-self: center;
  bottom: 0px;
  margin: 15px 0px;
`;

export const WelcomeButton = styled(ButtonStyled)`
  color: white;
  width: 100%;
  background: ${BLUE};
  border-radius: 10px;
  text-align: center;
  margin: 0px auto;
  &:hover {
    opacity: 0.8;
  }
  @media only screen and (max-width: ${IPAD_SIZE}) {
    width: 90%;
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
  color: ${GREY};
  background: ${LIGHT_GREY_2};
  font-weight: bold;
  &:hover {
    background: ${TEXT_BTN_BACKGROUND};
    border-radius: 0px;
  }
`;
