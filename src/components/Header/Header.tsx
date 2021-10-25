import React, { FC } from "react";
import { BLUE } from "../../Colors";
import { SmallLogo } from "../Logo/LogoStyle";
import SearchElement from "../Search/SearchElement";
import { HeaderStyle, IconsContainer, UserStyle } from "./HeaderStyle";
import Notifications from "./notifications.svg";
import Settings from "./settings.svg";

const HeaderElement: FC = () => {
  return (
    <HeaderStyle>
      <div style={{ width: "15%" }}>
        <SmallLogo />
      </div>
      <div style={{ width: "70%" }}>
        <SearchElement />
      </div>
      <IconsContainer>
        <img src={Settings} alt="serch elememt"></img>
        <img src={Notifications} alt="serch elememt"></img>
        <UserStyle>AB</UserStyle>
      </IconsContainer>
    </HeaderStyle>
  );
};
export default HeaderElement;
