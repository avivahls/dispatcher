import React, { FC } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { SideDropdown } from "../Dropdown/SideBarDropdown";
import { SideBarContainer } from "./SideBarStyle";

export interface SideBarProps {
  isShown: boolean;
}
const SideBar: FC<SideBarProps> = ({ isShown }) => {
  return (
    <SideBarContainer isShown={isShown}>
      <SideDropdown title="Sources" items={["1", "2"]} />

      {/* FILTER
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
      ></Dropdown> */}
    </SideBarContainer>
  );
};
export default SideBar;
