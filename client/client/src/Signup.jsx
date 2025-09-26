import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const starfield = document.getElementById('starfield');
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'stars';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      starfield.appendChild(star);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(result => {
        console.log(result);
        navigate('/login'); 
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div id="starfield"></div>
      <div className='form'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"><strong>Name</strong></label>
          <input 
            type="text" 
            placeholder='Enter Your Name' 
            autoComplete='off' 
            name='name' 
            onChange={(e)=>setName(e.target.value)} 
          />

          <label htmlFor="email"><strong>Email</strong></label>
          <input 
            type="email" 
            placeholder='Enter Your Email' 
            autoComplete='off' 
            name='email'  
            onChange={(e)=>setEmail(e.target.value)} 
          />

          <label htmlFor="password"><strong>Password</strong></label>
          <input 
            type="password" 
            placeholder='Enter Password' 
            autoComplete='off' 
            name='password' 
            onChange={(e)=>setPassword(e.target.value)} 
          />

          <button type='submit'>Register</button>
        </form>
        <p>Already Have an Account?</p>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default Signup;
