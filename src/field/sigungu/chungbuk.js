import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Chungbuk(props) {

  const handleChange = (event) => {
    props.setSigungu(event.target.value);
    console.log("시군구 : ", props.sigungu);
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
          <MenuItem value={1}>괴산</MenuItem>
          <MenuItem value={2}>단양</MenuItem>
          <MenuItem value={3}>보은</MenuItem>
          <MenuItem value={4}>영동</MenuItem>
          <MenuItem value={5}>옥천</MenuItem>
          <MenuItem value={6}>음성</MenuItem>
          <MenuItem value={7}>제천</MenuItem>
          <MenuItem value={8}>진천</MenuItem>
          <MenuItem value={9}>청원</MenuItem>
          <MenuItem value={10}>청주</MenuItem>
          <MenuItem value={11}>충주</MenuItem>
          <MenuItem value={12}>증평</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}