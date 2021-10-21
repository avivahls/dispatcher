import React, { useState } from "react";
import DownIcon from "./dropdown.svg";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownItem,
  DropdownList,
} from "./DropdownStyle";

export interface DropdownProps {
  title: string;
  items: string[];
  onOptionClicked?: (item: string) => void;
}
export const Dropdown = ({ title, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const onOptionClicked = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  const toggling = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggling}>
        {selectedOption !== "" ? selectedOption : title}{" "}
        <img src={DownIcon} alt="down icon of dropdown"></img>
      </DropdownHeader>
      {isOpen && (
        <div>
          <DropdownList>
            {items.map((item) => (
              <DropdownItem
                onClick={() => onOptionClicked(item)}
                key={Math.random()}
              >
                {item}
              </DropdownItem>
            ))}
          </DropdownList>
        </div>
      )}
    </DropdownContainer>
  );
};
