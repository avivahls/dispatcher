import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderElement from "./components/Header/Header";
import FilterBar from "./components/FilterBar/FilterBar";

function App() {
  return (
    <>
      <HeaderElement />
      <FilterBar />
      <div
        style={{
          border: "1px solid #D9DBE9",
          width: "80%",
          margin: "0 auto",
        }}
      ></div>
    </>
  );
}

export default App;
