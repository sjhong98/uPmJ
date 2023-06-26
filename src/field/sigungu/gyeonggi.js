import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Gyeonggi(props) {

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
          <MenuItem value={1}>가평</MenuItem>
          <MenuItem value={2}>고양</MenuItem>
          <MenuItem value={3}>과천</MenuItem>
          <MenuItem value={4}>광명</MenuItem>
          <MenuItem value={5}>광주</MenuItem>
          <MenuItem value={6}>구리</MenuItem>
          <MenuItem value={7}>군포</MenuItem>
          <MenuItem value={8}>김포</MenuItem>
          <MenuItem value={9}>남양주</MenuItem>
          <MenuItem value={10}>동두천</MenuItem>
          <MenuItem value={11}>부천</MenuItem>
          <MenuItem value={12}>성남</MenuItem>
          <MenuItem value={13}>수원</MenuItem>
          <MenuItem value={14}>시흥</MenuItem>
          <MenuItem value={15}>안산</MenuItem>
          <MenuItem value={16}>안성</MenuItem>
          <MenuItem value={17}>안양</MenuItem>
          <MenuItem value={18}>양주</MenuItem>
          <MenuItem value={19}>양평</MenuItem>
          <MenuItem value={20}>여주</MenuItem>
          <MenuItem value={21}>연천</MenuItem>
          <MenuItem value={22}>오산</MenuItem>
          <MenuItem value={23}>용인</MenuItem>
          <MenuItem value={24}>의왕</MenuItem>
          <MenuItem value={25}>의정부</MenuItem>
          <MenuItem value={26}>이천</MenuItem>
          <MenuItem value={27}>파주</MenuItem>
          <MenuItem value={28}>평택</MenuItem>
          <MenuItem value={29}>포천</MenuItem>
          <MenuItem value={30}>하남</MenuItem>
          <MenuItem value={31}>화성</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}