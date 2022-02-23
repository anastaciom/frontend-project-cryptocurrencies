import React from "react";
import { Search } from "@mui/icons-material/";
import { SearchStyle } from "./style";

export default function SearchArea() {
  return (
    <SearchStyle>
      <input type="text" placeholder="Search cryptocurrency" />
      <span>
        <Search />
      </span>
    </SearchStyle>
  );
}
