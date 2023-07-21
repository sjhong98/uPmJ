import React, {useContext, useState, useEffect} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Auth() {
    const navigate = useNavigate();

    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');
    const id = 'c105c81a4b71d2b2b6eb5313272815ef';
    const url = 'http://localhost:3000/login/auth';
    console.log('code : ', code);

    axios.post(`https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${id}&redirect_ur=${url}&code=${code}`)
        .then(res => {
            console.log("access token ::: ", res.data.access_token);
            console.log("refresh token ::: ", res.data.refresh_token);
        })
        .catch(err => {
            console.log(err);
        })


    useEffect(() => {
        navigate('/');
    }, [])

    return null;
}