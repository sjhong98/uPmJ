import React, {useContext, useState, useEffect, useRef} from 'react';
import {Link, Navigate, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useSelector} from 'react-redux';

function TripCard(props) {
    const navigate = useNavigate();
    return (
        <div className='trip_card' onClick={()=>{
            navigate(`/plan?trip_id=${props.id}`);
        }}>
            <div style={{flex:'2', fontSize:'0.6vw'}}>
                <p>{props.code}</p>
            </div>
            <p style={{flex:'8'}}>{props.name}</p>
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
            if(res.data.existedData) {
                let n = res.data.existedData.groups.length;
                    setGroupList(res.data.existedData.groups);
            }
            console.log("test : ", res);

        })
        .catch(err => {
            console.log("err : ", err);
        })
        
    }, []);

    const list = groupList.map((item, index) => (
        <TripCard key={index} name={item.title} id={item.id} code={item.code} />
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