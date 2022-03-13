import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../../redux/actions/resetPassword.actions";
import { BoxResetPasswordStyle, BtnShowPasswordLoginStyle } from "./style";
import { Visibility, VisibilityOff } from "@mui/icons-material/";

export default function Form() {
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ token, email, password: newPassword }));
    setToken("");
    setEmail("");
    setNewPassword("");
  };

  const handlePasswordVisibility = () => {
    if (!showPassword) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  }
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
          type={showPassword ? "text" : "password"}
          placeholder="New Password (min 6 characters)"
          value={newPassword}
          name="password"
          onChange={(e) => setNewPassword(e.target.value)}
        />

      <BtnShowPasswordLoginStyle onClick={handlePasswordVisibility}>
          {showPassword ? (
            <VisibilityOff style={{ color: "#797979", fontSize: 20 }} />
          ) : (
            <Visibility style={{ color: "#797979", fontSize: 20 }} />
          )}
        </BtnShowPasswordLoginStyle>
        <button type="submit">Create new password</button>
      </form>
    </BoxResetPasswordStyle>
  );
}
