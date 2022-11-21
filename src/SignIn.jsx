import React, { useState } from "react"

export const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example_john@gmail.com" id="email" name="email" />

        <label for="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />

        <button type="submit">Sign In</button>
      </form>
      <button onClick={() => props.onFormSwitch('signup')}>Don't have an account? Sign up here.</button>
    </>
  )
}