import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LinkIcon from '@mui/icons-material/Link';

export default function SearchBox(props) {
  const [result, setResult] = useState([]);


    const places = new window.kakao.maps.services.Places();

    const callback = function(res, status) {
        if (status === window.kakao.maps.services.Status.OK) {
          setResult(res[0]);
        }
    };

  useEffect(()=> { 
    places.keywordSearch(`${props.keyword}`, callback); 
    console.log("searching...");
  }, [props.keyword]);

  
  
    return(
      <div style={{padding:'20px', display:'flex', flexDirection:'column', justifyContent:'center', marginBottom:'15px'}}>

        <div>
          <p style={{fontSize:'25px'}}>{result.place_name}</p>

          <div style={{display:"flex", flexDirection:'row', alignContent:'center', marginBottom:'10px'}}>
            <CategoryOutlinedIcon sx={{color:'#1C81ED'}} />
            <p style={{marginTop:"5px", marginLeft:'10px'}}>{result.category_name}</p>
          </div>

          <div style={{display:"flex", flexDirection:'row', marginBottom:'10px'}}>
            <LocalPhoneOutlinedIcon sx={{color:'#1C81ED'}} />
            <p style={{marginTop:"5px", marginLeft:'10px'}}>{result.phone}</p>
          </div>

          <div style={{display:"flex", flexDirection:'row', marginBottom:'10px'}}>
            <PlaceOutlinedIcon sx={{color:'#1C81ED'}} />
            <p style={{marginTop:"5px", marginLeft:'10px'}}>{result.address_name}</p>
          </div>

          <div style={{display:"flex", flexDirection:'row', marginBottom:'10px' }}>
            <LinkIcon sx={{color:'#1C81ED'}} />
            <a style={{marginTop:"5px", marginLeft:'10px', fontSize:'13px'}} href={result.place_url}>{result.place_url}</a>
          </div>
        </div>

          <Button sx={{marginTop:'30px'}} onClick={() => {
            props.setSearchData(result);
          }} variant="outlined">Make Card</Button>

      </div>
    );
  }