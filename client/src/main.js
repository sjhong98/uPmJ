import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';
import video1 from './assets/videos/video1.mp4';
import logo2 from './assets/images/logo2.png';
import logo from './assets/images/logo.png';
import Login from './login.js';
import Button from '@mui/material/Button';
import io from "socket.io-client";

function ToEntry() {
  const navigate = useNavigate();
  const name = sessionStorage.getItem('name');

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <Button sx={{fontSize:'50px'}} onClick={() => {
        navigate('/entry');
      }}>{name}님의 여행 목록</Button>
      <Button variant="outlined" sx={{width:'200px'}} onClick={() => {
        sessionStorage.clear();
        navigate('/');
      }}>로그아웃</Button>
    </div>
  )
}



function Main() {

  const navigate = useNavigate(); 
  const [msg, setMsg] = useState('');
  const name = sessionStorage.getItem('name');

  // socket.io 서버에 접속한다
  var socket = io();


  return (
    
    <div style={{backgroundColor:'#fff'}}>
      <video src={video1} autoplay='autoplay' muted loop style={{width: '100vw', position:'absolute', opacity:'1'}}/>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <img src={logo2} style={{width:'40vw', zIndex:2, position:'relative', marginTop:'5vh'}} />
      </div>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <div style={{position:'relative', textAlign:'center', marginTop:'10vh', borderRadius:'2%', backgroundColor:'#eee', height:'40vh', width:'35vw', padding:'5vh', paddingTop:'100px', boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.2)'}} >
          <p style={{fontFamily:'naver_light', fontSize:'5vh', color:'#333', letterSpacing:'-3px'}}>이 세상의 모든 <span style={{fontSize:'7vh', fontFamily:'baemin'}}>J</span>가<br/>속 편히 여행하는 그날까지</p>
          {name ? <ToEntry /> : <Login /> }
        </div>
      </div>
    </div>
  );
}

export default Main;
