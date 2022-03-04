import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material/";
import { useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import { BtnShowPasswordLoginStyle, BoxLoginStyle} from './style';
import { signInAdmin} from "../../../redux/actions/signInAdmin.actions";
export default function BoxLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { error } = useSelector((state) => state.signInAdmin);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInAdmin({ email, password }));
  };

  const handlePasswordVisibility = () => {
    if (!showPassword) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  return (
    <BoxLoginStyle>
        <h1>Admin</h1>
      <form method="post" onSubmit={handleSubmit}>
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

        {error ? <small style={{color:'red', fontWeight: 'bold'}}>{error}</small> : ""}
        <button type="submit">Sign in</button>
      </form>
    </BoxLoginStyle>
  );
}
