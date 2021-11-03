import React, { FC } from "react";
import { SmallLogo } from "../Logo/LogoStyle";
import SearchElement from "../Search/SearchElement";
import {
  HeaderStyle,
  IconsContainer,
  LogoContainer,
  SearchContainer,
  UserStyle,
} from "./HeaderStyle";
import Notifications from "../../assets/notifications.svg";
import Settings from "../../assets/settings.svg";
import { useAuth0 } from "@auth0/auth0-react";

const HeaderElement: FC = () => {
  const { logout } = useAuth0();
  const { user } = useAuth0();

  return (
    <HeaderStyle>
      <LogoContainer>
        <SmallLogo />
      </LogoContainer>
      <SearchContainer>
        <SearchElement />
      </SearchContainer>
      <IconsContainer>
        <img src={Settings} alt="serch elememt"></img>
        <img src={Notifications} alt="serch elememt"></img>
        <UserStyle
          onClick={() =>
            logout({
              returnTo: window.location.origin,
            })
          }
        >
          {user &&
            String(user.name).charAt(0).toUpperCase() +
              "" +
              String(user.family_name).charAt(0).toUpperCase()}
        </UserStyle>
      </IconsContainer>
    </HeaderStyle>
  );
};
export default HeaderElement;
