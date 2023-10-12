import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LinkIcon from '@mui/icons-material/Link';
import '@styles/plan/sideBox/searchBox.css';

export default function SearchBox(props) {
  const [result, setResult] = useState([]);
  const keyword = useSelector(state => state.keyword);

    const places = new window.kakao.maps.services.Places();

    const callback = function(res, status) {
        if (status === window.kakao.maps.services.Status.OK) {
          setResult(res[0]);
        }
    };

  useEffect(()=> { 
    places.keywordSearch(`${keyword}`, callback); 
  }, [keyword]);
  
    return(
      <div className='search-box'>

        <div>
          <p className='search-box-title'>{result.place_name}</p>

          <div className='search-box-infos'>
            <CategoryOutlinedIcon sx={{color:'#1C81ED'}} />
            <p>{result.category_name}</p>
          </div>

          <div className='search-box-infos'>
            <LocalPhoneOutlinedIcon sx={{color:'#1C81ED'}} />
            <p>{result.phone}</p>
          </div>

          <div className='search-box-infos'>
            <PlaceOutlinedIcon sx={{color:'#1C81ED'}} />
            <p>{result.address_name}</p>
          </div>

          <div className='search-box-infos'>
            <LinkIcon sx={{color:'#1C81ED'}} />
            <a  href={result.place_url}>{result.place_url}</a>
          </div>
        </div>

          <Button 
            sx={{marginTop:'30px'}} 
            onClick={() => {
              props.setSearchData(result);
            }} 
            variant="outlined"
          >
              Make Card
          </Button>

      </div>
    );
  }