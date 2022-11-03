import './Login.css';
import './style/css/bootstrap.min.css'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import { useEffect, useState } from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";



const Login_default = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  console.log({ email, password });

  const handleEmail = (e) => {
    setUsername(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleApi = (e) => {
    e.preventDefault();
    console.log({ email, password })
    axios.post('/api/users/signin', {
      email: email,
      password: password,
    })
      .then(function (response) {
        console.log(response);
        navigate('/home');
        alert('success')
      })
      .catch(function (error) {
        console.log(error);
        alert('service error')
      });
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form method="post">
        <input type="text" name="u" placeholder="Username"
          value={email}
          onChange={handleEmail} />
        <input value={password}
          onChange={handlePassword}
          type="password" name="p" placeholder="Password" required="required" />
        <button onClick={handleApi} type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
      </form>
    </div>
  );
}

export default Login_default;
