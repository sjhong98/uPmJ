import React, {useContext, useState, useEffect, useRef} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

function TripCard(props) {
    return (
        <div className='trip_card'>
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
        {name:'USA'}, 
        {name:'Russia'},
        {name:'Austrailia'},
        {name:'Japan'},
        {name:'Hungary'},
        {name:'France'},
        {name:'China'},
        {name:'Korea'},
        {name:'Britain'},
    ];

    const height = `${test.length * 70}px`;
    console.log(height);

    const list = test.map((item, index) => (
        <TripCard key={index} name={item.name} />
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