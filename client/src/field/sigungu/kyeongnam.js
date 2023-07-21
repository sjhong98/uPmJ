import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Kyeongnam(props) {

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
          <MenuItem value={15}>통영</MenuItem>
          <MenuItem value={16}>하동</MenuItem>
          <MenuItem value={1}>거제</MenuItem>
          <MenuItem value={5}>남해</MenuItem>
          <MenuItem value={2}>거창</MenuItem>
          <MenuItem value={3}>고성</MenuItem>
          <MenuItem value={4}>김해</MenuItem>
          <MenuItem value={6}>마산</MenuItem>
          <MenuItem value={7}>밀양</MenuItem>
          <MenuItem value={8}>사천</MenuItem>
          <MenuItem value={9}>산청</MenuItem>
          <MenuItem value={10}>양산</MenuItem>
          <MenuItem value={11}>의령</MenuItem>
          <MenuItem value={12}>진주</MenuItem>
          <MenuItem value={13}>진해</MenuItem>
          <MenuItem value={14}>창녕</MenuItem>
          <MenuItem value={17}>함안</MenuItem>
          <MenuItem value={18}>함양</MenuItem>
          <MenuItem value={19}>합천</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}