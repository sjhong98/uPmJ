import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Busan(props) {

  const handleChange = (event) => {
    props.setSigungu(event.target.value);
    props.setDoAxios(true);
  };

  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="sido">시군구</InputLabel>
        <Select
          labelId="시군구"
          id="sigungu"
          value={props.sigungu}
          label="시도"
          onChange={handleChange}
        >
          <MenuItem value={16}>해운대</MenuItem>
          <MenuItem value={3}>기장</MenuItem>    
          <MenuItem value={14}>영도</MenuItem>      
          <MenuItem value={1}>강서</MenuItem>
          <MenuItem value={2}>금정</MenuItem>
          <MenuItem value={4}>남구</MenuItem>
          <MenuItem value={5}>동구</MenuItem>
          <MenuItem value={6}>동래</MenuItem>
          <MenuItem value={7}>부산진</MenuItem>
          <MenuItem value={8}>북구</MenuItem>
          <MenuItem value={9}>사상</MenuItem>
          <MenuItem value={10}>사하</MenuItem>
          <MenuItem value={11}>서구</MenuItem>
          <MenuItem value={12}>수영</MenuItem>
          <MenuItem value={13}>연제</MenuItem>
          <MenuItem value={15}>중구</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}