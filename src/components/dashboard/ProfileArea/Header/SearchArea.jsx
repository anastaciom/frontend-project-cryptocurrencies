import React from "react";
import { Search } from "@mui/icons-material/";
import { SearchStyle } from "./style";

export default function SearchArea({ setSearchCrypto }) {
  return (
    <SearchStyle>
      <input
        type="text"
        placeholder="Search cryptocurrency (token name or symbol)"
        onChange={(e) => setSearchCrypto(e.target.value)}
      />
      <span>
        <Search />
      </span>
    </SearchStyle>
  );
}
