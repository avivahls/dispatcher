import React, { FC } from "react";
import { InputStyle, SearchStyle } from "./SearchStyle";
import Search from "./search.svg";
import { Dropdown } from "../Dropdown/Dropdown";

const SearchElement: FC = () => {
  return (
    <SearchStyle>
      <img
        style={{
          flex: "none",
          width: "fit-content",
          margin: "0rem 0.5rem",
        }}
        src={Search}
        alt="serch elememt"
      ></img>
      <InputStyle></InputStyle>
      <div
        style={{
          border: "1px solid #D9DBE9",
          backgroundColor: "#D9DBE9",
          height: "90%",
        }}
      ></div>
      <Dropdown title="Top Headlines" items={["1", "2"]}></Dropdown>
    </SearchStyle>
  );
};
export default SearchElement;
