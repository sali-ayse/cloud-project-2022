import React, { useState } from 'react';
import './App.css';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

// App
function App() {
  const [currentForm, setCurrentForm] = useState('signin');

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <div className="App">
      {
        currentForm === "signin" ? <SignIn onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
