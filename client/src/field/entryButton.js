import * as React from 'react';
import Button from '@mui/material/Button';
import {Link, useLocation, useNavigate} from 'react-router-dom';

export function Create() {
    const navigate = useNavigate();
  return (
      <Button 
        variant="contained"
        sx={{width:'17vw'}}
        onClick={() => {
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