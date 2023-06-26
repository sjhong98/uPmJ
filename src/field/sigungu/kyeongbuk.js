import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Kyeongbuk(props) {

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
          <MenuItem value={2}>경주</MenuItem>
          <MenuItem value={11}>안동</MenuItem>
          <MenuItem value={17}>울릉</MenuItem>
          <MenuItem value={23}>포항</MenuItem>
          <MenuItem value={1}>경산</MenuItem>
          <MenuItem value={3}>고령</MenuItem>
          <MenuItem value={4}>구미</MenuItem>
          <MenuItem value={5}>군위</MenuItem>
          <MenuItem value={6}>김천</MenuItem>
          <MenuItem value={7}>문경</MenuItem>
          <MenuItem value={8}>봉화</MenuItem>
          <MenuItem value={9}>상주</MenuItem>
          <MenuItem value={10}>성주</MenuItem>
          <MenuItem value={12}>영덕</MenuItem>
          <MenuItem value={13}>영양</MenuItem>
          <MenuItem value={14}>영주</MenuItem>
          <MenuItem value={15}>영천</MenuItem>
          <MenuItem value={16}>예천</MenuItem>
          <MenuItem value={18}>울진</MenuItem>
          <MenuItem value={19}>의성</MenuItem>
          <MenuItem value={20}>청도</MenuItem>
          <MenuItem value={21}>청송</MenuItem>
          <MenuItem value={22}>칠곡</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}