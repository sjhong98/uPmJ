import logo2 from '../../assets/images/logo.png';
import React, { useState, useEffect } from 'react';
import kakaoLogin from '../../assets/images/kakaoLogin.png';
import '@styles/main/mainMobile.css';
import { useNavigate } from 'react-router-dom';

export default function MainMobile() {
    const navigate = useNavigate();
    const Rest_api_key='c105c81a4b71d2b2b6eb5313272815ef' //REST API KEY
    const redirect_uri = 'http://localhost:9000/login/auth' //Redirect URI
    // const redirect_uri = 'https://partyone-a5fab.web.app/login/auth';
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }

    return (
        <div className='main-mobile'>
            <img className='main-mobile-logo' src={logo2} />
            <div className='main-mobile-login-container'>
                <p>이 세상 모든 J가<br/>속 편히 여행하는 그날까지</p>
                <img 
                    className='main-mobile-login-btn' 
                    src={kakaoLogin}
                    onClick={handleLogin} 
                />
            </div>
        </div>
    )
}