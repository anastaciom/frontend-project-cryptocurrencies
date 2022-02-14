import React from "react";

export default function FormLogin({ title }) {
  return (
    <>
      <input type="email" name="" id="" placeholder="E-mail" />
      <input type="password" name="" id="" placeholder="Password" />
      <button type="submit">{title}</button>
    </>
  );
}
