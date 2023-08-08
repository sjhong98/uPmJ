import React, {useContext, useState, useEffect} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Auth() {
    const navigate = useNavigate();
    const key = 'c105c81a4b71d2b2b6eb5313272815ef';
    const uri = 'http://localhost:3000/login/auth';
    const [accessToken, setAccessToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("");
    const [token, setToken] = useState({});

    const code = new URL(document.location.toString()).searchParams.get("code");

    useEffect(() => {
        axios.post(`https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${key}&redirect_ur=${uri}&code=${code}`)
        .then(res => {
            setAccessToken(res.data.access_token);
            setRefreshToken(res.data.refresh_token);

            const token = {access: res.data.access_token, refresh: res.data.refresh_token};
            
            axios.post("http://localhost:5001/user/signin", {
                token: token
            })
            .then(res => {
                console.log("RESULT : ", res);
                if(res.data.justCreatedData) {
                    sessionStorage.setItem('name', res.data.justCreatedData.name);
                    sessionStorage.setItem('email', res.data.justCreatedData.email);       // 여행목록 정보 받아서 redux에 저장? SS에 저장?
                }
                else {
                    sessionStorage.setItem('name', res.data.existedData.name);
                    sessionStorage.setItem('email', res.data.existedData.email);
                }
                
            })
            .catch(err => {
                console.log("err : ", err);
            })
        })
        .catch(err => {
            console.log(err);
        })
        navigate('/entry');
    }, [code])

    return null;
}