import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSido(props) {

  const handleChange = (event) => {
    props.setSido(event.target.value.loc);
    props.setSidoCode(event.target.value.code);
    props.setDoAxios(true);
  };

  return (
    <Box sx={{ width: 120, marginRight: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="sido">시도</InputLabel>
        <Select
          labelId="시도"
          id="sido"
          value={props.sido}
          label="시도"
          onChange={handleChange}
        >
          <MenuItem value={{loc: "seoul", code: 1}}>서울</MenuItem>
          <MenuItem value={{loc: "busan", code: 6}}>부산</MenuItem>
          <MenuItem value={{loc: "incheon", code: 2}}>인천</MenuItem>
          <MenuItem value={{loc: "daejeon", code: 3}}>대전</MenuItem>
          <MenuItem value={{loc: "daegu", code: 4}}>대구</MenuItem>
          <MenuItem value={{loc: "gwangju", code: 5}}>광주</MenuItem>
          <MenuItem value={{loc: "ulsan", code: 6}}>울산</MenuItem>
          <MenuItem value={{loc: "sejong", code: 7}}>세종</MenuItem>
          <MenuItem value={{loc: "gyeonggi", code: 31}}>경기</MenuItem>
          <MenuItem value={{loc: "gangwon", code: 32}}>강원</MenuItem>
          <MenuItem value={{loc: "chungbuk", code: 33}}>충북</MenuItem>
          <MenuItem value={{loc: "chungnam", code: 34}}>충남</MenuItem>
          <MenuItem value={{loc: "kyeongbuk", code: 35}}>경북</MenuItem>
          <MenuItem value={{loc: "kyeongnam", code: 36}}>경남</MenuItem>
          <MenuItem value={{loc: "jeonbuk", code: 37}}>전북</MenuItem>
          <MenuItem value={{loc: "jeonnam", code: 38}}>전남</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}