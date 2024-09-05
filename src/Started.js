import React, { useState } from 'react';
import './Started.css';
import logo from './logo.png'; 
import Login from './Login'; 
import Signup from './Signup';

function Started() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  //const [showButtons, setShowButtons] = useState(true);


  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
    //setShowButtons(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
    //setShowButtons(false);
  };

  return (
    <div className="started">
      <header className="started-header">
        <img src={logo} alt="Hotel Reservations App" className="logo" />
      </header>
      <main className="started-main">
        <h1>Welcome to CheckInn</h1>
        <div className="buttons">
          <button className="button login" onClick={handleLoginClick}>Login</button>
          <button className="button signup" onClick={handleSignupClick}>Sign Up</button>
        </div>
       {showLogin && <Login />}
        {showSignup && <Signup />}
      </main>
    </div>
  );
}

export default Started;
