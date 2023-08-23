import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';

export default function SocketTest() {
    const socket = io.connect('http://localhost:3001', {
        cors: { origin: '*' }
    });

    // useEffect(() => {
    //     socket.on('chat', (data) => {
    //         console.log(data);
    //     })
    // }, []);

    // useEffect(() => {
    // const data = {
    //     name : sessionStorage.getItem('name'),
    //     userid : sessionStorage.getItem('email') };
    
    // console.log(data);

    // socket.on('login', data);
    // }, []);

    const socketSend = () => {
        const data = {msg:'hello'};
        socket.emit('chat', data);
    }
    
    return (
        <div style={{backgroundColor:'white', height:'100vh', width:'100vw', padding: '100px'}}>
            <h1>Socket Test</h1>
            <button type='button' onClick={socketSend}>send</button>

        </div>
    )
}