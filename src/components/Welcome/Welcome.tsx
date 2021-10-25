import React, { FC } from "react";
import { Icon, WelcomeButton } from "../Button/ButtonStyle";
import { BigLogo } from "../Logo/LogoStyle";
import {
  WelcomeContainer,
  WelcomeContent,
  WelcomeData,
  WelcomeLogo,
} from "./WelcomeStyle";
import Arrow from "../../assets/Arrow - Right.svg";

const Welcome: FC = () => {
  return (
    <WelcomeContainer>
      <WelcomeLogo>
        <BigLogo />
      </WelcomeLogo>
      <WelcomeContent>
        <WelcomeData>
          <div style={{ fontSize: "30px" }}>Welcome to Dispatcher</div>
          <div style={{ fontSize: "20px" }}>
            Locate articles and breaking news headlines from news sources and
            blogs across the web
          </div>
          <div
            style={{
              border: "1px solid #D9DBE9",
              width: "100%",
              margin: "10px auto",
            }}
          ></div>
          <WelcomeButton>
            CONTINUE
            <Icon src={Arrow} />
          </WelcomeButton>
        </WelcomeData>
      </WelcomeContent>
    </WelcomeContainer>
  );
};
export default Welcome;
