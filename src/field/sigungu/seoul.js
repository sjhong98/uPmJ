import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Seoul(props) {

  const handleChange = (event) => {
    props.setSigungu(event.target.value);
    props.setDoAxios(true);
  };

  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="sigungu">시군구</InputLabel>
        <Select
          labelId="시군구"
          id="sigungu"
          value={props.sigungu}
          label="시도"
          onChange={handleChange}
        >
          <MenuItem value={23}>종로</MenuItem>
          <MenuItem value={13}>마포</MenuItem>
          <MenuItem value={21}>용산</MenuItem>
          <MenuItem value={20}>영등포</MenuItem>
          <MenuItem value={1}>강남</MenuItem>
          <MenuItem value={15}>서초</MenuItem>
          <MenuItem value={2}>강동</MenuItem>
          <MenuItem value={3}>강북</MenuItem>
          <MenuItem value={4}>강서</MenuItem>
          <MenuItem value={5}>관악</MenuItem>
          <MenuItem value={6}>광진</MenuItem>
          <MenuItem value={7}>구로</MenuItem>
          <MenuItem value={8}>금천</MenuItem>
          <MenuItem value={9}>노원</MenuItem>
          <MenuItem value={10}>도봉</MenuItem>
          <MenuItem value={11}>동대문</MenuItem>
          <MenuItem value={12}>동작</MenuItem>
          <MenuItem value={14}>서대문</MenuItem>
          <MenuItem value={16}>성동</MenuItem>
          <MenuItem value={17}>성북</MenuItem>
          <MenuItem value={18}>송파</MenuItem>
          <MenuItem value={19}>양천</MenuItem>
          <MenuItem value={22}>은평</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}