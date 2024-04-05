import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {

    try {
      const response = await axios.post('http://localhost:2000/login', { email, password });
      const { firstName } = response.data;
      dispatch({ type: 'SET_USER', payload: firstName }); 
       if(response.data) {
        navigate('/')
       }       
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const redirecter = () => {
    navigate('/register');
  }

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'10px',backgroundColor:'lavender',height:'787px'}}>
      <h1>Login</h1>
      <div>
        {/* <label>Email:</label> */}
        <br />
        <input style={{fontSize:'17px'}}
         placeholder='Enter your email'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        {/* <label>Password:</label> */}
        <br />
        <input style={{fontSize:'17px'}}
        placeholder='password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button  style={{border:'2px solid black',borderRadius:'100px'}} onClick={handleSubmit}>Login</button> 

      <button style={{border:'2px solid black',borderRadius:'100px'}} onClick={redirecter}>New user</button> 
      <a href="/forget">ForgetPassword</a>

    </div>
  );
};

export default Login;
