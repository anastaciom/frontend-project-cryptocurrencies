import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../../redux/actions/signin.actions";

export default function FormLogin({ title }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn({ email: email, password: password }));
    setEmail("");
    setPassword("");
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
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">{title}</button>
    </form>
  );
}
