import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../../redux/actions/signin.actions";
import { Visibility, VisibilityOff } from "@mui/icons-material/";
import { BtnShowPasswordLoginStyle } from "./style";

export default function FormLogin({ title }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { error } = useSelector((state) => state.signIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn({ email, password }));
  };

  const handlePasswordVisibility = () => {
    if (!showPassword) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  return (
    <form method="post" onSubmit={handleSubmit} autoComplete="off">
      <input
        style={{
          border: error ? "2px solid red" : "",
        }}
        type="email"
        name="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{
          border: error ? "2px solid red" : "",
        }}
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <BtnShowPasswordLoginStyle onClick={handlePasswordVisibility}>
        {showPassword ? (
          <VisibilityOff style={{ color: "#797979", fontSize: 20 }} />
        ) : (
          <Visibility style={{ color: "#797979", fontSize: 20 }} />
        )}
      </BtnShowPasswordLoginStyle>
      {error ? <small>{error}</small> : ""}
      <button type="submit">{title}</button>
    </form>
  );
}
