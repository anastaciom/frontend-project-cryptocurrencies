import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { signIn } from "../../../redux/actions/signin.actions";
import { Visibility, VisibilityOff } from "@mui/icons-material/";
import {BtnShowPasswordLoginStyle} from './style'

export default function FormLogin({ title }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn({ email: email, password: password }));
    setEmail("");
    setPassword("");
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
        type="email"
        name="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
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
      <button type="submit">{title}</button>
      <h4>Forget password?</h4>
    </form>
  );
}
