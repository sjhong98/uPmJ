import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { updateGroupName, updateGroupDesc } from '../actions.js';

export function TripName() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.groupName);

  return (
      <div>
        <TextField
          id="text1"
          label="여행 이름"
          defaultValue=""
          value={name}
          onChange={(e) => {
            dispatch(updateGroupName(e.target.value));
          }}
          sx={{width:'17vw'}}
        />
      </div>
  );
}

export function TripDesc() {
    const dispatch = useDispatch();
    const desc = useSelector((state) => state.groupDesc);

    return (
        <div>
          <TextField
            id="text2"
            label="어떤 여행인가요?"
            defaultValue=""
            value={desc}
            onChange={(e) => {
              dispatch(updateGroupDesc(e.target.value));
            }}
            sx={{width:'17vw'}}
          />
        </div>
    );
  }

  export function TripCode() {
    return (
        <div>
          <TextField
            id="text3"
            label="여행 코드"
            defaultValue=""
            sx={{width:'17vw'}}
          />
        </div>
    );
  }