import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { signUp } from "../../../redux/actions/signup.actions";
import { Visibility, VisibilityOff } from "@mui/icons-material/";
import { BtnShowPasswordRegisterStyle } from "./style";

export default function FormRegister({ title }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp({ name: name, email: email, password: password }));
    setName("");
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
        type="text"
        name="name"
        placeholder="Name  (min 4 characters)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail (Must be a valid email)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Password (min 6 characters)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

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
