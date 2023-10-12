import React, {useContext, useState, useEffect} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Auth() {
    const navigate = useNavigate();
    const key = 'c105c81a4b71d2b2b6eb5313272815ef';
    const uri = 'http://localhost:3000/login/auth';
    // const uri = 'https://partyone-a5fab.web.app/login/auth';

    const code = new URL(document.location.toString()).searchParams.get("code");

    console.log("code : ", code);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 카카오 로그인
                const tokenResponse = await axios.post(`https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${key}&redirect_ur=${uri}&code=${code}`);
                
                const token = {
                    access: tokenResponse.data.access_token,
                    refresh: tokenResponse.data.refresh_token
                };
    
                sessionStorage.setItem("access_token", token.access);   // entry 재진입 시에 token으로 axios 요청할 수 있도록.
                sessionStorage.setItem("refresh_token", token.refresh);
    
                // UPMJ 서버 로그인
                const signInResponse = await axios.post("http://localhost:5001/users/signin", {
                    token: token
                });
    
                if(signInResponse.data.justCreatedData) {
                    sessionStorage.setItem('name', signInResponse.data.justCreatedData.name);
                    sessionStorage.setItem('email', signInResponse.data.justCreatedData.email);       
                }
                else {
                    sessionStorage.setItem('name', signInResponse.data.existedData.user.name);
                    sessionStorage.setItem('email', signInResponse.data.existedData.user.email);
                }

                navigate('/entry');
                
            } catch (error) {
                console.log("Error: ", error);
            }
        };
    
        fetchData();
    }, [code]);

    
    
    
    
    
    

    return null;
}