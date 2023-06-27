import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MapBox(props) {
    useEffect(() => {
      const container = document.getElementById('map'); 
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), 
        level: 9 
      };
      const map = new window.kakao.maps.Map(container, options); 
  
      return () => {
        // map.destroy();
      };
    }, [props.boxBar]);
  
    return (
      <div>
        <div id="map" style={{ width: '400px', height: '800px' }} />
      </div>
      );
  }