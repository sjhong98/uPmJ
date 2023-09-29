import React, {useContext, useState, useEffect, useRef} from 'react';
import {Link, Navigate, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setTripCardClicked } from '../../redux/actions.js';

function TripCard(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div onClick={()=>{
            dispatch(setTripCardClicked(true));
            setTimeout(() => {
                navigate(`/plan?trip_id=${props.code}`);
            }, [500]);
        }}>
            <div className='trip_card' >
                <div style={{flex:'2', fontSize:'0.6vw', marginLeft:'1vw'}}>
                    <p>{props.code}</p>
                </div>
                <p style={{flex:'4', fontSize:'1vw'}}>{props.name}</p>
                <p style={{flex:'2', color:'darkgray', fontSize:'0.6vw'}}>{props.host}</p>
            </div>
        </div>
    )
}

function DummyCard(props) {
    return (
        <div className='dummy_card'>
        </div>
    )
}

export default function TripList(props) {
    const [groupList, setGroupList] = useState([]);
    const access_token = sessionStorage.getItem("access_token");
    const refresh_token = sessionStorage.getItem("refresh_token");
    const token = {access: access_token, refresh: refresh_token};

    useEffect(() => {
        axios.post("http://localhost:5001/user/signin", {
            token: token
        })
        .then(res => {
            console.log("TEST : ", res);
            if(res.data.existedData) {
                let n = res.data.existedData.groups.length;
                setGroupList(res.data.existedData.groups);
            }

        })
        .catch(err => {
            console.log("err : ", err);
        })
        
    }, []);

    const list = groupList.map((item, index) => (
        <TripCard key={index} name={item.title} code={item.code} host={item.host}/>
    ));

    console.log("list : ", list);

    return (
        <div className='trip_list'>
            <div style={{height:'100vh'}}>
                <DummyCard />
                {list}
            </div>
        </div>
    )
}