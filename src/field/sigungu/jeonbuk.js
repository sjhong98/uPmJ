import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Jeonbuk(props) {

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
          <MenuItem value={1}>고창</MenuItem>
          <MenuItem value={2}>군산</MenuItem>
          <MenuItem value={3}>김제</MenuItem>
          <MenuItem value={4}>남원</MenuItem>
          <MenuItem value={5}>무주</MenuItem>
          <MenuItem value={6}>부안</MenuItem>
          <MenuItem value={7}>순창</MenuItem>
          <MenuItem value={8}>완주</MenuItem>
          <MenuItem value={9}>익산</MenuItem>
          <MenuItem value={10}>임실</MenuItem>
          <MenuItem value={11}>장수</MenuItem>
          <MenuItem value={12}>전수</MenuItem>
          <MenuItem value={13}>정읍</MenuItem>
          <MenuItem value={14}>진안</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}