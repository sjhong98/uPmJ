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
            let temp = props.columnNum+1; 
            if(props.columnNum != 5)
                props.setColumnNum(temp);
        }}></Button>
        <Button startIcon={<RemoveIcon />} onClick={()=> {
            let temp = props.columnNum-1; 
            if(props.columnNum != 1)
                props.setColumnNum(temp);
        }}></Button>
      </ButtonGroup>
    </Box>
  );
}