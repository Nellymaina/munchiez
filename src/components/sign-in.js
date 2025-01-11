import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./auth";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { auth, login, logout } = useContext(AuthContext);

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(""); 
    try {
      await login(username, password);
      setMessage("Login successful! Welcome back.");
    } catch (error) {
      setMessage("Login failed. Please check your credentials.");
    }
  }

  return (
    <div className="login-page">

       {auth ? 
        <div>
          <p>Welcome! You are logged in.</p>
          <button onClick={logout} className='submit-login'>Logout</button>
        </div>
      : 
<div className='login-div'>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <input
            className="login-textbox"
            type="text"
            placeholder="Email"
            value={username}
            onChange={handleUsername}
          />
          <br />
          <input
            className="login-textbox"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
          <br />
          {message && <p >{message}</p>} 
          <button type="submit" className='submit-login'>Submit</button>
          
        </form> 
      </div>


      <br />

      <div className="login-prompt">
        <p className="login-text">Don't have an account?</p>
        <Link className="signup" to="/signup">
          Signup
        </Link>
      </div>
</div>
}
    </div>
  );
}
