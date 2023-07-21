import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Deagu(props) {

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
          <MenuItem value={1}>남구</MenuItem>
          <MenuItem value={2}>달서</MenuItem>
          <MenuItem value={3}>달성</MenuItem>
          <MenuItem value={4}>동구</MenuItem>
          <MenuItem value={5}>북구</MenuItem>
          <MenuItem value={6}>서구</MenuItem>
          <MenuItem value={7}>수성</MenuItem>
          <MenuItem value={8}>중구</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}