import React from "react";
import { StyledSearch } from "./Seacrh.styled";
import trade from "../../assets/SearchImg.svg";

function Search() {
  return (
    <StyledSearch>
      <input type="text" placeholder="search crypto" />

      <img src={trade} alt="tu je" />
    </StyledSearch>
  );
}

export default Search;
