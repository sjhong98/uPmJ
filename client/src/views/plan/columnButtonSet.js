import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function ColumnButtonSet(props) {

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
    
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ThemeProvider theme={theme}>
      <ButtonGroup variant="outlined" aria-label="outlined button group">

      


        <Button startIcon={<AddIcon />} color="neutral" onClick={()=> {
            props.setColumnAdded(true);
            
            if(props.columnNum < 5) {
                let temp = props.columnNum;
                props.setColumnNum(temp+1);
            }
            console.log("added : ", props.columnNum);
        }}></Button>


        <Button startIcon={<RemoveIcon />} color="neutral" onClick={()=> {
            props.setColumnSubed(true);
            
            if(props.columnNum > 2) {
                let temp = props.columnNum;
                props.setColumnNum(temp-1);
            }
            console.log("subtracted : ", props.columnNum);
        }}></Button>
        


      </ButtonGroup>

      </ThemeProvider>
    </Box>
    
  );
}