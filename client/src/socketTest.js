import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';

export default function SocketTest() {
    const [val, setVal] = useState("");
    const [msg, setMsg] = useState("");

    const socket = io.connect('http://localhost:3001', {
        cors: { origin: '*' }
    });

    const socketSend = () => {
        const data = {msg: val};
        socket.emit('chat', data);
    }

    socket.on('chat', (data) => {
        setMsg(data.msg);
    })
    
    return (
        <div style={{backgroundColor:'white', height:'100vh', width:'100vw', padding: '100px'}}>
            <h1>Socket Test</h1>
            <input type='text' value={val} onChange={(e) => setVal(e.target.value)} />
            <button type='button' onClick={socketSend}>send</button>
            <p>{msg}</p>
        </div>
    )
}