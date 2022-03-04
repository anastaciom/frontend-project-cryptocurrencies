import React,{useState} from "react";
import { AllUsersAreaStyle } from "./style";
import Header from './Header'
import AllUsersData from "./AllUsersData";
export default function AllUsersArea() {

  const [searchUser, setSearchUser] = useState("");
  return (
    <AllUsersAreaStyle>
      <Header setSearchUser={setSearchUser}/>
      <AllUsersData searchUser={searchUser}/>
    </AllUsersAreaStyle>
  );
}
