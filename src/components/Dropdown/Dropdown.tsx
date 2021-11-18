import React, { useState } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import DownIcon from "../../assets/dropdown.svg";
import { getApi } from "../../store/news-actions";
import { newsActions } from "../../store/news-slice";

import {
  DropdownContainer,
  DropdownHeader,
  DropdownItem,
  DropdownList,
  DropdownListContainer,
} from "./DropdownStyle";

export interface DropdownProps {
  title: string;
  items: string[];
  onOptionClicked?: (item: string) => void;
}
export const Dropdown = ({ title, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();

  const onOptionClicked = (value: string) => {
    dispatch(newsActions.addOptions({ category: title, value: value }));
    setSelectedOption(value);
    setIsOpen(false);
    dispatch(getApi(false, 1));
  };
  const toggling = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggling}>
        {selectedOption !== "" ? selectedOption : title}{" "}
        <img src={DownIcon} alt="down icon of dropdown"></img>
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer>
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
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
};
