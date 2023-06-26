import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ColumnButtonSet(props) {
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
      <ButtonGroup variant="outlined" aria-label="outlined button group">


        <Button startIcon={<AddIcon />} onClick={()=> {
            props.setColumnChanged(true);
            
            if(props.columnNum < 5) {
                let temp = props.columnNum;
                props.setColumnNum(temp+1);
                props.setAdded(true);
            }
            console.log("added : ", props.columnNum);
        }}></Button>


        <Button startIcon={<RemoveIcon />} onClick={()=> {
            props.setColumnChanged(true);
            
            if(props.columnNum > 2) {
                let temp = props.columnNum;
                props.setColumnNum(temp-1);
                props.setAdded(false);
            }
            console.log("subtracted : ", props.columnNum);
        }}></Button>


      </ButtonGroup>
    </Box>
  );
}