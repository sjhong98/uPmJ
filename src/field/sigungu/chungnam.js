import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Chungnam(props) {

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
          <MenuItem value={1}>공주</MenuItem>
          <MenuItem value={2}>금산</MenuItem>
          <MenuItem value={3}>논산</MenuItem>
          <MenuItem value={4}>당진</MenuItem>
          <MenuItem value={5}>보령</MenuItem>
          <MenuItem value={6}>부여</MenuItem>
          <MenuItem value={7}>서산</MenuItem>
          <MenuItem value={8}>서천</MenuItem>
          <MenuItem value={9}>아산</MenuItem>
          <MenuItem value={10}>예산</MenuItem>
          <MenuItem value={11}>천안</MenuItem>
          <MenuItem value={12}>청양</MenuItem>
          <MenuItem value={13}>태안</MenuItem>
          <MenuItem value={14}>홍성</MenuItem>
          <MenuItem value={15}>계룡</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}