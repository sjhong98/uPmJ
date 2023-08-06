import * as React from 'react';
import Button from '@mui/material/Button';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

export function Create() {
  const _name = sessionStorage.getItem('name');
  const _email = sessionStorage.getItem('email');
  const navigate = useNavigate();

  return (
      <Button 
        variant="contained"
        sx={{width:'17vw'}}
        onClick={() => {
          const userInfo = {name: _name, email: _email};
          axios.post("http://localhost:5001/group/creategroup", {
                userInfo: userInfo
            })
            .then(res => {
              console.log("===== HOST =====", res);
            })
            .catch(err => {
              console.log("===== ERROR =====", err);
            })
          navigate('/plan');
        }}
        >여행 만들기</Button>
  );
}

export function Join() {
    const navigate = useNavigate();
  return (
      <Button 
        variant="contained"
        sx={{width:'17vw'}}
        onClick={() => {
            navigate('/plan');
        }}
        >여행 참여하기</Button>
  );
}