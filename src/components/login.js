import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [user, setUser] = useState({
    Firstname: '',
    Lastname: '',
    email: '',
    password: '',
    phone: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  function fillIn(event) {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      username: user.email, 
      password: user.password,
    };

    axios.post('https://munchiez-1.onrender.com/register', payload)
      .then((response) => {
        console.log('User registered successfully:', response.data);
        alert('Account created successfully!');
      })
      .catch((error) => {
        console.error('Error registering user:', error.response?.data || error.message);
        alert('Failed to register. Try again.');
      });
  }

  return (
    <div className="form">
      <form className="form-2" onSubmit={handleSubmit}>
        <h1 className="title-login">Create an account</h1>
        <input
          className="text-box"
          type="text"
          name="Firstname"
          placeholder="First name"
          onChange={fillIn}
          value={user.Firstname}
        />
        <br />
        <input
          className="text-box"
          type="text"
          name="Lastname"
          placeholder="Last name"
          onChange={fillIn}
          value={user.Lastname}
        />
        <br />
        <input
          className="text-box"
          type="text"
          name="email"
          placeholder="Email"
          onChange={fillIn}
          value={user.email}
        />
        <br />
        <input
          className="text-box"
          type="text"
          name="phone"
          placeholder="Phone number"
          onChange={fillIn}
          value={user.phone}
        />
        <br />
        <div>
          <input
            className="text-box"
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            onChange={fillIn}
            value={user.password}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            style={{ marginLeft: '5px' }}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <br />
        <button type='submit' className="submit-button">SIGN UP</button>
      </form>
    </div>
  );
}
