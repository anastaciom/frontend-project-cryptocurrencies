import React from "react";

export default function FormRegister({ title }) {
  return (
    <>
      <input type="text" placeholder="Name" />
      <input type="email" name="" id="" placeholder="E-mail" />
      <input type="password" name="" id="" placeholder="Password" />
      <button type="submit">{title}</button>
    </>
  );
}
