import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../../redux/actions/signup.actions";
import { Visibility, VisibilityOff } from "@mui/icons-material/";
import { BtnShowPasswordRegisterStyle } from "./style";

export default function FormRegister({ title }) {
  const { error } = useSelector((state) => state.signUp);

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp({ name, email, password }));
  };

  const handlePasswordVisibility = () => {
    if (!showPassword) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <input
        style={{
          border:
            error === "Name minimum is 3 characters" ? "2px solid red" : "",
        }}
        type="text"
        name="name"
        placeholder="Name (min 4 characters)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {error === "Name minimum is 3 characters" ? (
        <small style={{ color: "red" }}>{error}</small>
      ) : (
        ""
      )}

      <input
        style={{
          border:
            error === "Email minimum is 4 characters"
              ? "2px solid red"
              : error === "User already exists."
              ? "2px solid red"
              : "",
        }}
        type="email"
        name="email"
        placeholder="E-mail (Must be a valid email)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error === "Email minimum is 4 characters" ? (
        <small style={{ color: "red" }}>{error}</small>
      ) : error === "User already exists." ? (
        <small style={{ color: "red" }}>{error}</small>
      ) : (
        ""
      )}
      <input
        style={{
          border:
            error === "Password minimum is 6 characters" ? "2px solid red" : "",
        }}
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Password (min 6 characters)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error === "Password minimum is 6 characters" ? (
        <small style={{ color: "red" }}>{error}</small>
      ) : (
        ""
      )}

      <BtnShowPasswordRegisterStyle onClick={handlePasswordVisibility}>
        {showPassword ? (
          <VisibilityOff style={{ color: "#797979", fontSize: 20 }} />
        ) : (
          <Visibility style={{ color: "#797979", fontSize: 20 }} />
        )}
      </BtnShowPasswordRegisterStyle>
      <button type="submit">{title}</button>
    </form>
  );
}
