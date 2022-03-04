import React from "react";
import { AllUsersDataStyle, AlertUserNotFoundStyle } from "./style";
import { useSelector } from "react-redux";
export default function AllUsersData({searchUser}) {
  const { users } = useSelector((state) => state.authAdmin);

  const specificUser = users.filter(
    (user) =>
      user.name.includes(searchUser) ||
      user.email.includes(searchUser)
  );

  return (
    <AllUsersDataStyle>
      <h1>Users</h1>
      {specificUser.length === 0 ? <AlertUserNotFoundStyle>User not found... :(</AlertUserNotFoundStyle> :
      <ul>
        {specificUser.map((user, index) => (
          <li key={index}>
            <p>
              Name: <small>{user.name}</small>
            </p>
            <p>
              Email: <small>{user.email}</small>
            </p>
            <p>
              Created At: <small>{user.createdAt}</small>
            </p>
            <p>
              Admin: <small
                style={{
                  color: user.isAdmin.toString() === "true" ? "green" : "red",
                }}
              >
                {user.isAdmin.toString()}
              </small>
            </p>
          </li>
        ))}
      </ul>
      }
    </AllUsersDataStyle>
  );
}
