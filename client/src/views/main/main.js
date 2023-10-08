import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import video1 from '../../assets/videos/video1.mp4'
import logo2 from '../../assets/images/logo2.png';
import logo from '../../assets/images/logo.png';
import Login from '../login/login.js';
import Button from '@mui/material/Button';
import '@styles/main/main.css';

function AfterLogin() {
  const navigate = useNavigate();
  const name = sessionStorage.getItem('name');

  return (
    <div className='after-login' >
      <Button 
        sx={{fontSize:'50px'}} 
        onClick={() => {
          navigate('/entry');
        }}>
          {name}님의 여행 목록
      </Button>
      <Button 
        variant="outlined" 
        sx={{width:'200px'}} 
        onClick={() => {
          sessionStorage.clear();
          navigate('/');
          window.location.reload();
        }}>
          로그아웃
      </Button>
    </div>
  )
}



function Main() {
  const name = sessionStorage.getItem('name');

  return (
    <div className='main' >
      <video 
        className='main-video'
        src={video1} 
        autoplay='autoplay' 
        muted loop />
      <div className='main-logo-container'>
        <img 
          className='main-logo' 
          src={logo2} />
      </div>
      <div className='main-login-container' >
        <div className='main-login' >
          <p className='main-login-font'>
            이 세상의 모든 <span>J</span>가<br/>속 편히 여행하는 그날까지
          </p>
          {name ? <AfterLogin /> : <Login /> }
        </div>
      </div>
    </div>
  );
}

export default Main;
