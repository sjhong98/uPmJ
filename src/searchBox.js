import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SearchBox(props) {
  const [result, setResult] = useState([]);


    const places = new window.kakao.maps.services.Places();

    const callback = function(res, status) {
        if (status === window.kakao.maps.services.Status.OK) {
          // console.log(res);
          setResult(res[0]);
          
        }
    };

  useEffect(()=> { 
    places.keywordSearch(`${props.keyword}`, callback); 
    console.log("searching...");
  }, [props.keyword]);

  
  
    return(
      <div>
        <p>{result.place_name}</p>
      </div>
    );
  }