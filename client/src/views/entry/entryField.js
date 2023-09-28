import React, {useContext, useState, useEffect, useRef} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { updateGroupName, updateGroupDesc, setCode } from '../../redux/actions.js';
import { stepButtonClasses } from '@mui/material';

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
    const code = useSelector(state => state.code);
    const dispatch = useDispatch();

    return (
        <div>
          <TextField
            id="text3"
            label="여행 코드"
            defaultValue=""
            value={code}
            onChange={(e) => {
              dispatch(setCode(e.target.value));
            }}
            sx={{width:'17vw'}}
          />
        </div>
    );
  }

export function RandomNumber() {
  const code = useSelector((state) => state.code);
  const [copied, setCopied] = useState(false);

  return (
    <div>
    <div style={{display:'flex', flexDirection:'row', marginBottom:'2vh'}}>
          <TextField
          id="outlined-read-only-input"
          label=""
          defaultValue={code}
          InputProps={{
            readOnly: true,
          }}
        />
        <Button variant="outlined"
        onClick={() => {
          navigator.clipboard.writeText(code);  // copy to clipboard
          setCopied(true);
        }}>COPY</Button>
    </div>
        {copied ? <p style={{textAlign:'center'}}>복사되었습니다</p> : <p></p>}
    </div>
  )
}