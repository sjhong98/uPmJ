import * as React from 'react';
import Button from '@mui/material/Button';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { createdGroup } from '../actions';

export function Create() {
  const _name = sessionStorage.getItem('name');
  const _email = sessionStorage.getItem('email');
  const groupName = useSelector((state) => state.groupName);
  const groupDesc = useSelector((state) => state.groupDesc);
  const randomNumber = useSelector((state) => state.randomNumber);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
      <Button 
        variant="contained"
        sx={{width:'17vw'}}
        onClick={() => {
          const groupInfo = {
            host: _email, 
            groupName: groupName,
            groupDesc: groupDesc,
          };
          // axios.post("http://localhost:5001/group/creategroup", {
          //       userInfo: userInfo
          //   })
          //   .then(res => {
          //     console.log("===== HOST =====", res);  // 난수 받아서 randomNumber에 저장
          //   })
          //   .catch(err => {
          //     console.log("===== ERROR =====", err);
          //   })
          dispatch(createdGroup(true));
          
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

export function Create2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      sx={{width:'17vw'}}
      onClick={() => {
        dispatch(createdGroup(false));
        navigate('/plan');
      }}
      >여행 만들기</Button>
  )
}