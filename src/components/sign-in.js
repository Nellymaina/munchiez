import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./auth";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] =useState(false)

  const { auth, login } = useContext(AuthContext);

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit() {
    try {
      await login(username, password);
      setMessage('Login successful!');
    } catch (error) {
      setMessage(error.message || 'Login failed. Please check your credentials.');
    }
  }
async function handleClick(){
setLoading(true)
try{
await handleSubmit()
}
finally{
setLoading(false)}
}

  return (
    <div className="login-page">

       {auth ? 
        <div className='logout-page'>
          <p>Welcome! You are logged in.</p>
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
          <button type="submit" className='submit-login' onClick={handleClick} disabled={loading} style={{cursor:loading?"not-allowed":"pointer", opacity:loading? 0.5: 1, transition:"opacity 0.3s ease"}}>Submit</button>
          
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
