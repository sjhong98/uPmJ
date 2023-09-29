import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './card.css';


export default function CardBox(props) {

  const handleClickCard = () => {
    props.setKeyword(props.title);
      if(props.contentId !== 1 && props.contentId !== 2) {
        if(props.contentId !== 3 && props.contentId !== 3) {
          props.setX(props.mapx);
          props.setY(props.mapy);
        }
      }
      props.setXData(props.droppableId);
  }

  const handleClickDeleteBtn = () => {
    props.setDelCol(props.column);
    props.setDelId(props.contentId);
  }

  return (
    <div className='card'>
    <Card sx={{ 
            width: 180, 
            maxHeight: 150, 
            margin:0, 
            paddingBottom:3, 
            borderRadius:0, 
            backgroundColor:'#fff', 
            color:'#555555', 
            borderRadius:'1' }} 
          onClick={handleClickCard}>
        <CardContent>
            <p className='card-delete-btn' 
                onClick={handleClickDeleteBtn}>
                  x
            </p>
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
    </div>
  );
}