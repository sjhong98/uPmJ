import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Incheon(props) {

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
          <MenuItem value={1}>강화</MenuItem>
          <MenuItem value={2}>계양</MenuItem>
          <MenuItem value={3}>미추홀</MenuItem>
          <MenuItem value={4}>남동</MenuItem>
          <MenuItem value={5}>동구</MenuItem>
          <MenuItem value={6}>부평</MenuItem>
          <MenuItem value={7}>서구</MenuItem>
          <MenuItem value={8}>연수</MenuItem>
          <MenuItem value={9}>옹진</MenuItem>
          <MenuItem value={10}>중구</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}