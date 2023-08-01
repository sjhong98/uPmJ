import * as React from 'react';
import TextField from '@mui/material/TextField';

export function TripName() {
  return (
      <div>
        <TextField
          id="text1"
          label="여행 이름"
          defaultValue=""
          sx={{width:'17vw'}}
        />
      </div>
  );
}

export function TripDesc() {
    return (
        <div>
          <TextField
            id="text2"
            label="어떤 여행인가요?"
            defaultValue=""
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