import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Jeonnam(props) {

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
          <MenuItem value={1}>강진</MenuItem>
          <MenuItem value={2}>고흥</MenuItem>
          <MenuItem value={3}>곡성</MenuItem>
          <MenuItem value={4}>광양</MenuItem>
          <MenuItem value={5}>구례</MenuItem>
          <MenuItem value={6}>나주</MenuItem>
          <MenuItem value={7}>담양</MenuItem>
          <MenuItem value={8}>목포</MenuItem>
          <MenuItem value={9}>무안</MenuItem>
          <MenuItem value={10}>보성</MenuItem>
          <MenuItem value={11}>순천</MenuItem>
          <MenuItem value={12}>신안</MenuItem>
          <MenuItem value={13}>여수</MenuItem>
          <MenuItem value={14}>영광</MenuItem>
          <MenuItem value={15}>영암</MenuItem>
          <MenuItem value={16}>완도</MenuItem>
          <MenuItem value={17}>장성</MenuItem>
          <MenuItem value={18}>장흥</MenuItem>
          <MenuItem value={19}>진도</MenuItem>
          <MenuItem value={20}>함평</MenuItem>
          <MenuItem value={21}>해남</MenuItem>
          <MenuItem value={22}>화순</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}