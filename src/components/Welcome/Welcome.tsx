import React, { FC } from "react";
import { Icon, WelcomeButton } from "../Button/ButtonStyle";
import { BigLogo } from "../Logo/LogoStyle";
import {
  WelcomeContainer,
  WelcomeContent,
  WelcomeData,
  WelcomeDivider,
  WelcomeLogo,
  WelcomeText,
  WelcomeTitle,
} from "./WelcomeStyle";
import Arrow from "../../assets/Arrow - Right.svg";
import { useAuth0 } from "@auth0/auth0-react";

const Welcome: FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <WelcomeContainer>
      <WelcomeLogo>
        <BigLogo />
      </WelcomeLogo>
      <WelcomeContent>
        <WelcomeData>
          <WelcomeTitle>Welcome to Dispatcher</WelcomeTitle>
          <WelcomeText>
            Locate articles and breaking news headlines from news sources and
            blogs across the web
          </WelcomeText>
          <WelcomeDivider />
          <WelcomeButton
            onClick={() =>
              loginWithRedirect({
                redirectUri: "http://localhost:3000/home",
              })
            }
          >
            CONTINUE
            <Icon src={Arrow} />
          </WelcomeButton>
        </WelcomeData>
      </WelcomeContent>
    </WelcomeContainer>
  );
};
export default Welcome;
