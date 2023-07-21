import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';
import video1 from './assets/videos/video1.mp4';
import logo from './assets/images/logo2.png';
import Login from './login.js';
import zIndex from '@mui/material/styles/zIndex';



function Main() {
  const navigate = useNavigate(); 
  const [msg, setMsg] = useState('');

  return (
    <div>
      <video src={video1} autoplay='autoplay' muted loop style={{width: '100vw', position:'absolute'}}/>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <img src={logo} style={{width:'40vw', zIndex:2, position:'relative', marginTop:'5vh'}} />
      </div>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <div style={{position:'relative', textAlign:'center', marginTop:'10vh', borderRadius:'2%', backgroundColor:'#eee', height:'55vh', width:'35vw', padding:'5vh', boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.2)'}} >
          <p style={{fontFamily:'tmon', fontSize:'7vh'}}>이 세상의 모든 J가<br/>속 편해지는 그날까지</p>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Main;
