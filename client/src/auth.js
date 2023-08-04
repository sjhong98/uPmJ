import React, {useContext, useState, useEffect} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Auth() {
    const navigate = useNavigate();

    const code = new URL(document.location.toString()).searchParams.get("code");
    console.log("code : ", code);

    useEffect(() => {
        // axios로 서버에 code 전송
        navigate('/entry');
    }, [])

    return null;
}