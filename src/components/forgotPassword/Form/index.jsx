import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { forgetPassword } from "../../../redux/actions/forgetPassword.actions";
import {FormStyle} from './style'

export default function Form() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgetPassword({ email }));
  };

  return (
      <FormStyle method="post" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your E-mail"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Done</button>
      </FormStyle>
   
  );
}
