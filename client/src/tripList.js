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
            <p>{props.name}</p>
        </div>
    )
}

function DummyCard(props) {
    return (
        <div className='dummy_card'>
        </div>
    )
}

export default function TripList() {

    const test = [
        {name:'USA', id:'usa'}, 
        {name:'Russia', id:'russia'},
        {name:'Austrailia', id:'austrailia'},
        {name:'Japan', id:'japan'},
        {name:'Hungary', id:'hungary'},
        {name:'France', id:'france'},
        {name:'China', id:'china'},
        {name:'Korea', id:'korea'},
        {name:'Britain', id:'britain'},
    ];

    const list = test.map((item, index) => (
        <TripCard key={index} name={item.name} id={item.id} />
    ));

    return (
        <div className='trip_list'>
            <div style={{height:'100vh'}}>
                <DummyCard />
                {list}
            </div>
        </div>
    )
}