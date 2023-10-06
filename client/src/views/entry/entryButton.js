import * as React from 'react';
import Button from '@mui/material/Button';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { createdGroup, setCode, setTripCardClicked } from '../../redux/actions';

export function Create() {
  const _name = sessionStorage.getItem('name');
  const _email = sessionStorage.getItem('email');
  const groupName = useSelector((state) => state.groupName);
  const groupDesc = useSelector((state) => state.groupDesc);
  // const randomNumber = useSelector((state) => state.randomNumber);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const code = useSelector((state) => state.code);

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
          axios.post("http://localhost:5001/groups", {
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
    const _code = useSelector((state) => state.code);
    const _name = sessionStorage.getItem('name');
    const _email = sessionStorage.getItem('email');
    const dispatch = useDispatch();

  return (
      <Button 
        variant="contained"
        sx={{width:'17vw'}}
        onClick={() => {
          dispatch(setCode(_code));
          axios.post("http://localhost:5001/groups/participants", {
            msg: "groupjoin",
            data: {
              code: _code,
              name: _name,
              email: _email,
            }
          }).then(res => {
            console.log("JOIN_BUTTON_RES : ", res); // DB에서 user 삽입
          })
          dispatch(setTripCardClicked(true));
            setTimeout(() => {
              navigate(`/plan?trip_id=${_code}`);
            }, [500]);
        }}
        >여행 참여하기</Button>
  );
}

export function Create2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const code = useSelector(state => state.code);

  return (
    <Button
      variant="contained"
      sx={{width:'20vw'}}
      onClick={() => {
        dispatch(setTripCardClicked(true));
            setTimeout(() => {
              navigate(`/plan?trip_id=${code}`);
            }, [500]);
        
        dispatch(createdGroup(false));
        
      }}
      >여행 시작하기</Button>
  )
}