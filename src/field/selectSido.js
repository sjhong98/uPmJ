import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSido(props) {

  const handleChange = (event) => {
    props.setSido(event.target.value);
    props.setDoAxios(true);
  };

  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="sido">시도</InputLabel>
        <Select
          labelId="시도"
          id="sido"
          value={props.sido}
          label="시도"
          onChange={handleChange}
        >
          <MenuItem value={1}>서울</MenuItem>
          <MenuItem value={6}>부산</MenuItem>
          <MenuItem value={2}>인천</MenuItem>
          <MenuItem value={3}>대전</MenuItem>
          <MenuItem value={4}>대구</MenuItem>
          <MenuItem value={5}>광주</MenuItem>
          <MenuItem value={7}>울산</MenuItem>
          <MenuItem value={8}>세종</MenuItem>
          <MenuItem value={31}>경기</MenuItem>
          <MenuItem value={32}>강원</MenuItem>
          <MenuItem value={33}>충북</MenuItem>
          <MenuItem value={34}>충남</MenuItem>
          <MenuItem value={35}>경북</MenuItem>
          <MenuItem value={36}>경남</MenuItem>
          <MenuItem value={37}>전북</MenuItem>
          <MenuItem value={38}>전남</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}