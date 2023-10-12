import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo2.png';
import '@styles/entry/entryMobile.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTripCardClicked } from '../../redux/actions.js';

function TripCardMobile(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div onClick={()=>{
            dispatch(setTripCardClicked(true));
            setTimeout(() => {
                navigate(`/plan?trip_id=${props.code}`);
            }, [500]);
        }}>
            <div className='trip-card-mobile' >
                <p style={{flex:'2', fontSize:'2vh'}}>{props.code}</p>
                <p style={{flex:'4', fontSize:'2vh'}}>{props.name}</p>
            </div>
        </div>
    )
}

export default function EntryMobile() {
    const name = sessionStorage.getItem('name');
    const [groupList, setGroupList] = useState([]);
    const access_token = sessionStorage.getItem("access_token");
    const refresh_token = sessionStorage.getItem("refresh_token");
    const token = {access: access_token, refresh: refresh_token};

    useEffect(() => {
        axios.post("http://localhost:5001/users/signin", {
            token: token
        })
        .then(res => {
            console.log("TEST : ", res);
            if(res.data.existedData) {
                let n = res.data.existedData.groupList.length;
                setGroupList(res.data.existedData.groupList);
            }

        })
        .catch(err => {
            console.log("err : ", err);
        })
        
    }, []);

    const list = groupList.map((item, index) => (
        <TripCardMobile key={index} name={item.title} code={item.code} host={item.host}/>
    ));

    return (
        <div className='entry-mobile'>
            <img src={logo} />
            <div className='entry-mobile-trip-list'>
                <h3>{name} 님의 여행 목록</h3>
                <div className='entry-mobile-list-container'>
                    {list}
                </div>
            </div>
        </div>

    )
}