import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { setKeyword } from '../../redux/actions';

export default function SearchField(props) {
  const [_keyword, _setKeyword] = useState("");
  const dispatch = useDispatch();

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#333333',
      contrastText: '#ffffff',
    },
  },
});

  return (
    <div style={{display:'flex', flexDirection:'row'}}>
    <Box sx={{ '& > :not(style)': { m: 1, alignItems:'center'}  }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon />
        <TextField id="input-with-sx" label="search" variant="standard" value={_keyword} sx={{width:'120px'}} onChange={(e) => {
          _setKeyword(e.target.value);
        }}/>
      </Box>
    </Box>
    <ThemeProvider theme={theme}>
      <Button variant="outlined" color="neutral" sx={{height:55}} onClick={() => {
          dispatch(setKeyword(_keyword));
          props.setBoxBar("search");
        }}>Search</Button>
    </ThemeProvider>
     </div>
  );
}