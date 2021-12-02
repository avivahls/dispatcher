import styled from "styled-components";
import { BORDER_COLOR, GREY, LIGHT_GREY_2, SHADOW } from "../../style/colors";
import { PrimaryButton } from "../Button/ButtonStyle";

export const FormStyle = styled.form`
  color: ${GREY};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 50%;
  height: 50%;
  border: 1px solid ${LIGHT_GREY_2};
  box-shadow: 0px 32px 64px ${SHADOW};
  border-radius: 20px;
  margin: 30px auto;
  padding: 15px 30px;
`;
export const InputLoginStyle = styled.input.attrs({
  type: "text",
  placeholder: "Search",
})`
  width: 80%;
  box-shadow: 0px 4px 12px ${SHADOW};
  border-radius: 10px;
  border: 1px solid ${BORDER_COLOR};
  margin: auto 0px;
  padding: 10px 10px;
  font-size: 1.3rem;

  border-radius: 0.625rem;
  &::placeholder {
    opacity: 0.5;
  }
`;
export const LoginButton = styled(PrimaryButton)`
  width: 20%;
  float: right;
  margin: 20px 0px;
`;
