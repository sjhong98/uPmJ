import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BoxBar from '../../modules/field/boxbar.js';
import SearchBox from './sideBox/searchBox.js';
import MapBox from './sideBox/mapBox.js'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackgroundImg from "../../assets/images/travel5.jpeg";
import Logo from "../../assets/images/logo.png";
import Chip from '@mui/material/Chip';
import ScrollBox from './columns/scrollBox';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import '@styles/index.css';
import '@styles/entry/entry.css';
import '@styles/plan/list.css';

import ChatBox from './sideBox/chatBox';

function SideBox(props) {
  const boxBar = props.boxBar;

  return (
    <div>
      {
        boxBar === 'map' && (
          <MapBox
            boxBar={boxBar}
            setPushed={props.setPushed}
            pushed={props.pushed}
            xData={props.xData}
          />
        )
      }
      {
        boxBar === 'search' && (
          <SearchBox
            setSearchData={props.setSearchData}
          />
        )
      }
      {
        boxBar === 'chat' && (
          <ChatBox />
        )
      }
    </div>
  )
}

function Cursor(props) {
  const cp = props.cursorPosition;
  const [pst, setPst] = useState(cp);

  useEffect(() => {
    setPst(cp);
  }, [cp])

  return(
    <div>
      {pst.map(item => {
        return (
          item.x === 0 && item.y === 0 
          ?
          <></>
          :  
          <div className='list-cursor' >
            <div 
              className='cursor-container' 
              style={{
                left: `${item.x}px`,
                top: `${item.y}px`
              }}>
              <NorthWestIcon 
                sx={{color: `${item.color}`}}
                />
              <p style={{color: `${item.color}`}}>
                {item.name}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}


export default function List() {      // 리팩토링 : css 빼기
  const [boxBar, setBoxBar] = useState("map");
  const [pushed, setPushed] = useState(false);
  const [xData, setXData] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [cursorPosition, setCursorPosition] = useState([
      {user: '', name: '', color: 'blue', x: 0, y: 0}, 
      {user: '', name: '', color: 'red', x: 0, y: 0}, 
      {user: '', name: '', color: 'green', x: 0, y: 0}, 
      {user: '', name: '', color: 'purple', x: 0, y: 0}]);
  const groupMember = useSelector((state) => state.groupMember);
  // const groupMemberChip = groupMember.map((item) => (   // member 정보가져와 chip으로 나열
  //     <Chip label={item.name} />
  // ))
  const navigate = useNavigate();
  const titleRef = useRef();
  const bodyRef = useRef();
  const imgRef = useRef();
  const captureRef = useRef();
  const loadingRef = useRef();


  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(titleRef.current, {
      x: 0,  // 에서 시작
      duration: 0,   // 부터 시작
      ease: "bounce.out"  // 마무리 모션
    });
    tl.to(titleRef.current, {
      x: 0,
      duration: 1,
      scale: 2
    });
    tl.to(titleRef.current, {
      scale: 1.5,
      ease: "bounce.out"
    })
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const handleImageLoad = () => {
      ScrollTrigger.create({
        trigger: imgRef.current,
        start: 'top top',
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(imgRef.current, {
            y: (self.progress * -1000),
            overwrite: true,
          });
        },
      });
    };
  
    const img = new Image();   // 이미지 로드 이후 에니메이션 적용
                               // js에서 이미지 나타내는 객체인 Image 생성 후, 이미지 로드. 로드 완료되면 onload 트리거되어 handler 실행.
    img.onload = handleImageLoad;
    img.src = BackgroundImg;
  
    return () => {
      img.onload = null; // 이벤트 핸들러 제거
    };
  }, []);
  
  useEffect(() => {  
    setTimeout(() => {
      loadingRef.current.classList.add("plan-loading-animation");
    }, [1000]);
  }, [])

  return (
    <div className="list-page" >
      <div className='plan-loading' ref={loadingRef} />

      <div className='list-body'>
        { cursorPosition.x !== 0 && cursorPosition.y !== 0
          ? 
            <Cursor cursorPosition={cursorPosition} /> 
          :
            <></>
        }
        
        <div className="root">
          <div className='list-header'>
            <div>
              <img 
                className='list-logo' 
                src={Logo} 
                onClick={() => {
                  navigate('/entry');
                }}
              />
            </div>
            {/* <div className='list-member' >
              {groupMemberChip}
            </div> */}
            {/* <button type='button' onClick={sendMessage}>Chat</button> */}
          </div>
          
          <div className='list-content' >
            <div ref={bodyRef} className='list-content-container' >
              <ScrollBox 
                setBoxBar={setBoxBar} 
                captureRef={captureRef} 
                searchData={searchData} 
                setXData={setXData} 
                setPushed={setPushed} 
                setCursorPosition={setCursorPosition}
                cursorPosition={cursorPosition} />
              <div className='list-box-container' >
                <div>
                  <BoxBar setBoxBar={setBoxBar} />
                </div>
                  <SideBox 
                    boxBar={boxBar} 
                    setPushed={setPushed}
                    pushed={pushed}
                    xData={xData}
                    setSearchData={setSearchData}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// #569AF5"
          