import React, {useContext, useState, useEffect} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import kakaoLogin from './assets/images/kakaoLogin.png';

const Login = () =>
{
    const Rest_api_key='c105c81a4b71d2b2b6eb5313272815ef' //REST API KEY
    const redirect_uri = 'http://localhost:3000/login/auth' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }

    return(
    <>
        <img src={kakaoLogin} style={{height: '55px', width: '200px', marginLeft:'15px', cursor: 'pointer', borderRadius:'2%',boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)'}} onClick={() => {
            handleLogin();

        }}/>
    </>
    )
}

export default Login;