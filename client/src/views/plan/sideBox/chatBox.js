import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';
import './chatBox.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ChatBox() {
    const _email = sessionStorage.getItem("email") !== null ? sessionStorage.getItem("email") : "test@test.com";
    const urlParams = new URLSearchParams(window.location.search);
    const _tripId = urlParams.get('trip_id');
    const _name = sessionStorage.getItem('name') !== null ? sessionStorage.getItem("name") : "Test";
    const [chatHistory, setChatHistory] = useState([]);
    const [msg, setMsg] = useState("");
    const socket = useSelector((state) => state.socket);
    const chatMsg = useSelector((state) => state.chatMsg);
    const [active, setActive] = useState(false);

    useEffect(() => {
        if(active){
            console.log(chatMsg);
            let temp = [...chatHistory];
            temp.push({
                name: chatMsg.name, 
                email: chatMsg.email, 
                tripId: chatMsg.tripId, 
                msg: chatMsg.msg
            });
            setChatHistory(temp);
        }
        setActive(true);
    }, [chatMsg]);

    const handleSendChat = () => {
        const _data = {
            msg: msg,
            email: _email,
            name: _name,
            tripId: _tripId
        }

        socket.emit('chat', _data);
        setMsg("");
    }

    // useEffect(() => {
    //     console.log(chatHistory);
    // }, [chatHistory]);

    return (
        <div className='chat-container'>
            <div className='chat-history'>
                { chatHistory.map(item => (
                    item.email !== _email ?   // 다른 유저 메세지
                        <div className='chat-msg-container'>
                            <p className='chat-name'>{item.name}</p>
                            <div className='chat-others-msg'>
                                <p className='chat-msg'>{item.msg}</p>
                            </div>
                        </div>
                        :
                        <div className='chat-msg-container'>
                            <div className='chat-my-msg'>
                                <p className='chat-msg'>{item.msg}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='chat-input'>
                <TextField 
                    id="outlined-basic" 
                    label="" 
                    variant="outlined"
                    value={msg}
                    sx={{width: '15vw'}}
                    onChange={(e) => {
                        setMsg(e.target.value);
                    }}
                />
                <Button 
                    variant="outlined"
                    sx={{height: '5.8vh', marginLeft: '5px'}}
                    onClick={() => {
                        handleSendChat();
                    }}
                >
                    Chat
                </Button>
            </div>
            
        </div>

    )

}