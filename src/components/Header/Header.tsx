import React, { FC } from "react";
import { BLUE } from "../../Colors";
import { SmallLogo } from "../Logo/LogoStyle";
import SearchElement from "../Search/SearchElement";
import { HeaderStyle } from "./HeaderStyle";
import Notifications from "./notifications.svg";
import Settings from "./settings.svg";

const HeaderElement: FC = () => {
  return (
    <HeaderStyle>
      <SmallLogo />
      <SearchElement></SearchElement>
      <div style={{ display: "flex", color: "white", float: "right" }}>
        <img src={Settings} alt="serch elememt"></img>
        <img src={Notifications} alt="serch elememt"></img>
        <div
          style={{
            display: "flex",
            backgroundColor: BLUE,
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          AB
        </div>
      </div>
    </HeaderStyle>
  );
};
export default HeaderElement;
