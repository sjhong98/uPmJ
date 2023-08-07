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
                sessionStorage.setItem('name', res.data.name);
                sessionStorage.setItem('email', res.data.email);
            })
            .catch(err => {
                console.log("err : ", err);
            })

            console.log("access token ::: ", res.data.access_token);
            console.log("refresh token ::: ", res.data.refresh_token);
        })
        .catch(err => {
            console.log(err);
        })
        navigate('/entry');
    }, [code])

    return null;
}