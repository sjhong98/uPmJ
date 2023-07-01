import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
      <div style={{padding:'20px', display:'flex', flexDirection:'column', justifyContent:'center'}}>

        <div>
          <p style={{fontSize:'25px'}}>{result.place_name}</p>
          <p>{result.category_name}</p>
          <p>{result.phone}</p>
          <p>{result.address_name}</p>
          <a href={result.place_url}>{result.place_url}</a>
        </div>

        <Button sx={{marginTop:'30px'}} onClick={() => {
          props.setSearchData(result);
        }} variant="outlined">Make Card</Button>

      </div>
    );
  }