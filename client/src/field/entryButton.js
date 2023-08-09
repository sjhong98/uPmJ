import * as React from 'react';
import Button from '@mui/material/Button';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { createdGroup, setCode } from '../actions';

export function Create() {
  const _name = sessionStorage.getItem('name');
  const _email = sessionStorage.getItem('email');
  const groupName = useSelector((state) => state.groupName);
  const groupDesc = useSelector((state) => state.groupDesc);
  // const randomNumber = useSelector((state) => state.randomNumber);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rn = useSelector((state) => state.randomNumber);

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
          console.log(groupInfo);
          axios.post("http://localhost:5001/group/creategroup", {
              groupInfo: groupInfo
            })
            .then(res => {
              console.log("===== HOST =====", res);  // 난수 받아서 randomNumber에 저장
              console.log(res.data);
              dispatch(setCode(res.data));
              dispatch(createdGroup(true));
            })
            .catch(err => {
              console.log("===== ERROR =====", err);
            })
          
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
          // axios로 randomNumber post하고 trip_id 받아오기
          const trip_id = "trip_id";
          navigate(`/plan?trip_id=${trip_id}`);
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
      sx={{width:'20vw'}}
      onClick={() => {
        // axios로 randomNumber post하고 trip_id 받아오기
        const trip_id = 'trip_id';
        dispatch(createdGroup(false));
        navigate(`/plan?trip_id=${trip_id}`);
      }}
      >여행 시작하기</Button>
  )
}