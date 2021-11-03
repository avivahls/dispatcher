import React, { FC } from "react";
import { Icon, PrimaryButton } from "../Button/ButtonStyle";
import { FormStyle, InputLoginStyle, LoginButton } from "./LoginStyle";
import Arrow from "../../assets/Arrow - Right.svg";
import RedDot from "../../assets/asterisk.svg";
import { InputStyle } from "../Search/SearchStyle";

const Login: FC = () => {
  return (
    <FormStyle>
      <div>
        <p>
          Email Address
          <img src={RedDot} alt="reddot" />
        </p>
        <InputLoginStyle />
      </div>
      <div>
        <p>
          Password
          <img src={RedDot} alt="reddot" />
        </p>
        <InputLoginStyle />
      </div>
      <LoginButton>
        Login
        <Icon src={Arrow} />
      </LoginButton>
    </FormStyle>
  );
};
export default Login;
