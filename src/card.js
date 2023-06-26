import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


export default function CardBox(props) {
  return (
    <Card sx={{ width: 190, maxHeight: 150, margin: 2, paddingBottom:3 }} onClick={()=>{
      props.setKeyword(props.title);
    }}>
        <CardContent>
            <p style={{marginLeft:'160px', marginTop:'-10px', cursor:'pointer'}} onClick={()=>{
              props.setDelCol(props.column);
              props.setDelId(props.contentId);
              console.log(props.column, props.contentId);
            }}>x</p>
            <Typography gutterBottom variant="h6" component="div" sx={{marginTop:-2}} onClick={()=>{
              props.setSearchTitle(props.title);
            }}>
            {props.key}
            </Typography>
            <Typography gutterBottom variant="h6" component="div" sx={{marginBottom:-4}}>
            {props.title}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary" sx={{marginBottom:-4}}>
            {props.addr1}
            </Typography> */}
        </CardContent>
        <CardActions>
        </CardActions>
    </Card>
  );
}