import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../../redux/actions/resetPassword.actions";
import { BoxResetPasswordStyle } from "./style";

export default function Form() {
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ token, email, password: newPassword }));
    setToken("");
    setEmail("");
    setNewPassword("");
  };

  return (
    <BoxResetPasswordStyle>
      <h1>Reset Password</h1>
      <form method="post" onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          type="text"
          placeholder="Token"
          value={token}
          name="token"
          onChange={(e) => setToken(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password (min 6 characters)"
          value={newPassword}
          name="password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="submit">Create new password</button>
      </form>
    </BoxResetPasswordStyle>
  );
}
