import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Gangwon(props) {

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
          <MenuItem value={1}>강릉</MenuItem>
          <MenuItem value={2}>고성</MenuItem>
          <MenuItem value={3}>동해</MenuItem>
          <MenuItem value={4}>삼척</MenuItem>
          <MenuItem value={5}>속초</MenuItem>
          <MenuItem value={6}>양구</MenuItem>
          <MenuItem value={7}>양양</MenuItem>
          <MenuItem value={8}>영월</MenuItem>
          <MenuItem value={9}>원주</MenuItem>
          <MenuItem value={10}>인제</MenuItem>
          <MenuItem value={11}>정선</MenuItem>
          <MenuItem value={12}>철원</MenuItem>
          <MenuItem value={13}>춘천</MenuItem>
          <MenuItem value={14}>태백</MenuItem>
          <MenuItem value={15}>평창</MenuItem>
          <MenuItem value={16}>홍천</MenuItem>
          <MenuItem value={17}>화천</MenuItem>
          <MenuItem value={18}>횡성</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}