import React from "react";
import { Search } from "@mui/icons-material/";
import { SearchStyle } from "./style";

export default function SearchArea({setSearchUser}) {
  return (
    <SearchStyle>
      <input
        type="text"
        placeholder="Search user (name or email)"
        onChange={(e) => setSearchUser(e.target.value)}
      />
      <span>
        <Search style={{ color: "#432A78" }} />
      </span>
    </SearchStyle>
  );
}
