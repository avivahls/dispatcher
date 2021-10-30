import React, { useState } from "react";
import { useCallback } from "react";
import Back from "../../assets/back.svg";
import {
  DropdownHeader,
  DropdownItem,
  DropdownList,
  SideBarDropdown,
  SideDropdownHeader,
  SideDropdownItem,
  SideDropdownsList,
} from "./DropdownStyle";

export interface DropdownProps {
  title: string;
  items: string[];
  //selected: string;
  onOptionClicked?: (item: string) => void;
}
export const SideDropdown = ({ title, items }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState("");

  const onOptionClicked = useCallback((value: string) => {
    setSelectedOption(value);
  }, []);
  return (
    <SideBarDropdown>
      <SideDropdownHeader>
        <img src={Back} alt="back to filters"></img>
        {title}
      </SideDropdownHeader>
      <SideDropdownsList>
        {items.map((item, key) => (
          <SideDropdownItem onClick={() => onOptionClicked(item)} key={key}>
            {item}
          </SideDropdownItem>
        ))}
      </SideDropdownsList>
    </SideBarDropdown>
  );
};
