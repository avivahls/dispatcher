import React, { FC } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { SideBarContainer } from "./SideBarStyle";

export interface SideBarProps {
  isShown: boolean;
}
const SideBar: FC<SideBarProps> = ({ isShown }) => {
  return (
    <SideBarContainer isShown={isShown}>
      FILTER
      <Dropdown
        title="Search in"
        items={["EveryThing", "Top Headlines"]}
      ></Dropdown>
      <Dropdown
        title="Search in"
        items={["EveryThing", "Top Headlines"]}
      ></Dropdown>
      <Dropdown
        title="Search in"
        items={["EveryThing", "Top Headlines"]}
      ></Dropdown>
      <Dropdown
        title="Search in"
        items={["EveryThing", "Top Headlines"]}
      ></Dropdown>
    </SideBarContainer>
  );
};
export default SideBar;
