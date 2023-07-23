import React, {useContext, useState, useEffect} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import kakaoLogin from './assets/images/kakaoLogin.png';
import video1 from './assets/videos/video1.mp4';
import logo from './assets/images/logo2.png';

const Entry = () =>
{
    const navigate = useNavigate();


    return(
    <>
        <div>
            <video src={video1} autoplay='autoplay' muted loop style={{width: '100vw', position:'absolute'}}/>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <img src={logo} style={{width:'40vw', zIndex:2, position:'relative', marginTop:'5vh', cursor:'pointer'}} onClick={() => {
                    navigate('/entry');
                }} />
            </div>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <div style={{position:'relative', textAlign:'center', marginTop:'10vh', borderRadius:'2%', backgroundColor:'#eee', height:'55vh', width:'35vw', padding:'5vh', boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.2)'}} >
                    <p style={{fontSize:'3vh', fontFamily:'tmon'}}>여행 계획 목록</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Entry;