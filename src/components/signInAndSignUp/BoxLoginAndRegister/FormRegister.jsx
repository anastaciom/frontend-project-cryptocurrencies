import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {signUp} from "../../../redux/actions/signup.actions";
export default function FormRegister({ title }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(signUp({name : name, email: email, password: password}))
  setName('')
  setEmail('')
  setPassword('')
}

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
        type="password"
        name="password"
        placeholder="Password (min 6 characters)"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit">{title}</button>
    </form>
  );
}
