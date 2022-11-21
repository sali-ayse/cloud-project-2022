import { useState } from "react";
// Sign up
export const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input value={firstName} id="firstName" placeholder="First Name" />

        <label htmlFor="lastName">Last name</label>
        <input value={lastName} id="lastName" placeholder="Last Name" />

        <label for="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example_john@gmail.com" id="email" name="email" />

        <label for="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />

        <button type="submit">Sign In</button>
      </form>
      <button onClick={() => props.onFormSwitch('signin')}>Already have an account? Sign in here.</button>
    </>
  )
}