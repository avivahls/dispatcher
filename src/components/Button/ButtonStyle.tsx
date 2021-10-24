import styled from "styled-components";
import { BLUE, GREY, LIGHT_GREY_2, TEXT_BTN_BACKGROUND } from "../../Colors";

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
`;

export const Icon = styled.img`
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 8px;
`;

export const PrimaryButton = styled(ButtonStyled)`
  color: white;
  background: ${BLUE};
  border-radius: 20px;
  &:hover {
    opacity: 0.8;
  }
`;

export const WelcomeButton = styled(ButtonStyled)`
  color: white;
  width: 90%;
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
