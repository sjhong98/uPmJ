import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function MapBox(props) {
  const x = useSelector(state => state.x);
  const y = useSelector(state => state.y);

  const data2 = useSelector((state) => state.data2);
  const data3 = useSelector((state) => state.data3);
  const data4 = useSelector((state) => state.data4);
  const data5 = useSelector((state) => state.data5);

  useEffect(() => {
    console.log(x, y);
  }, [x, y])


    useEffect(() => {
      const container = document.getElementById('map'); 
      const options = {
        center: new window.kakao.maps.LatLng(y, x), 
        level: 9 
      };
      const map = new window.kakao.maps.Map(container, options);
    
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(y, x),
      });

      
      marker.setMap(map);

      const positions2 =  data2 && data2.map(item => ({
        title: item.title,
        latlng: new window.kakao.maps.LatLng(item.mapy, item.mapx)
      }));

      const _line2 = data2 && data2.map(item => {
        if (item.contentId !== 1) {
          return new window.kakao.maps.LatLng(item.mapy, item.mapx);
        }
        return null; 
      }).filter(item => item !== null);

      const line2 = new window.kakao.maps.Polyline({
        path: _line2, 
        strokeWeight: 5,
        strokeColor: '#E35B46', 
        strokeOpacity: 0.7, 
        strokeStyle: 'solid' 
    });

    line2.setMap(map); 
      
    if(data2) {
      for (var i = 0; i < positions2.length; i ++) { 
        const markers = new window.kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions2[i].latlng, // 마커를 표시할 위치
            title : positions2[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시
        });
        props.setPushed(false);
      }
    }

      // =======================================================

      const positions3 = data3 && data3.map(item=> ({
        title: item.title,
        latlng: new window.kakao.maps.LatLng(item.mapy, item.mapx)
      }));

      const _line3 = data3 && data3.map(item => {
        if (item.contentId !== 2) {
          return new window.kakao.maps.LatLng(item.mapy, item.mapx);
        }
        return null; // 해당 조건이 아닌 경우에는 null을 반환하거나 원하는 값을 반환할 수 있습니다.
      }).filter(item => item !== null);

      const line3 = new window.kakao.maps.Polyline({
        path: _line3, // 선을 구성하는 좌표배열 입니다
        strokeWeight: 5, // 선의 두께 입니다
        strokeColor: '#7F5AFA', // 선의 색깔입니다
        strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid' // 선의 스타일입니다
    });

    line3.setMap(map); 
      
    if(positions3) {
      for (var i = 0; i < positions3.length; i ++) { 
        const markers = new window.kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions3[i].latlng, // 마커를 표시할 위치
            title : positions3[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        });
        props.setPushed(false);
      }
    }

      // =======================================================

      const positions4 = data4 && data4.map(item=> ({
        title: item.title,
        latlng: new window.kakao.maps.LatLng(item.mapy, item.mapx)
      }));

      const _line4 =data4 && data4.map(item => {
        if (item.contentId !== 3) {
          return new window.kakao.maps.LatLng(item.mapy, item.mapx);
        }
        return null; // 해당 조건이 아닌 경우에는 null을 반환하거나 원하는 값을 반환할 수 있습니다.
      }).filter(item => item !== null);

      const line4 = new window.kakao.maps.Polyline({
        path: _line4, // 선을 구성하는 좌표배열 입니다
        strokeWeight: 5, // 선의 두께 입니다
        strokeColor: '#41D1A6', // 선의 색깔입니다
        strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid' // 선의 스타일입니다
    });

    line4.setMap(map); 
      
    if(data4) {
      for (var i = 0; i < positions4.length; i ++) { 
        const markers = new window.kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions4[i].latlng, // 마커를 표시할 위치
            title : positions4[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        });
        props.setPushed(false);
      }
    }


      // =======================================================

      const positions5 = data5 && data5.map(item=> ({
        title: item.title,
        latlng: new window.kakao.maps.LatLng(item.mapy, item.mapx)
      }));

      const _line5 = data5 && data5.map(item => {
        if (item.contentId !== 4) {
          return new window.kakao.maps.LatLng(item.mapy, item.mapx);
        }
        return null; // 해당 조건이 아닌 경우에는 null을 반환하거나 원하는 값을 반환할 수 있습니다.
      }).filter(item => item !== null);

      const line5 = new window.kakao.maps.Polyline({
        path: _line5, // 선을 구성하는 좌표배열 입니다
        strokeWeight: 5, // 선의 두께 입니다
        strokeColor: '#D39B33', // 선의 색깔입니다
        strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid' // 선의 스타일입니다
    });

    line5.setMap(map); 
      
    if(data5) {
      for (var i = 0; i < positions5.length; i ++) { 
        const markers = new window.kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions5[i].latlng, // 마커를 표시할 위치
            title : positions5[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        });
        props.setPushed(false);
      }
    }
  
    }, [props.boxBar, props.pushed, x, y]);
  
    return (
      <div>
        <div id="map" style={{ width: '400px', height: '920px' }} />
      </div>
      );
  }