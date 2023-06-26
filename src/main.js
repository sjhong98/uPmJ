import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';



function Main() {
  const navigate = useNavigate(); 
  const [msg, setMsg] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Party One</h1>
      <h3>Welcome to Party One</h3>
      <button
        onClick={() => {
          navigate('/login');
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          navigate('/list');
        }}
      >
        List
      </button>
    </div>
  );
}

export default Main;
