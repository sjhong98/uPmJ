import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../index.css';
import BoxBar from '../../modules/field/boxbar.js';
import SearchBox from './sideBox/searchBox.js';
import MapBox from './sideBox/mapBox.js'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackgroundImg from "../../assets/images/travel5.jpeg";
import Logo from "../../assets/images/logo.png";
import h2c from 'html2canvas';
import '../../views/entry/entry.css';
import Chip from '@mui/material/Chip';
import io from 'socket.io-client';  // webSocket
import ScrollBox from './columns/scrollBox';
import './list.css';


export default function List() {      // 리팩토링 : css 빼기
  const [keyword, setKeyword] = useState("");
  const [boxBar, setBoxBar] = useState(true);
  const [x, setX] = useState(126.97722);
  const [y, setY] = useState(37.57861);
  const [pushed, setPushed] = useState(false);
  const [xData, setXData] = useState("");
  const [searchData, setSearchData] = useState([]);
  const groupMember = useSelector((state) => state.groupMember);
  const groupMemberChip = groupMember.map((item) => (   // member 정보가져와 chip으로 나열
      <Chip label={item.name} />
  ))

  const titleRef = useRef();
  const bodyRef = useRef();
  const imgRef = useRef();
  const p1Ref = useRef();
  const p2Ref = useRef();
  const captureRef = useRef();
  const loadingRef = useRef();

  // const socket = io.connect('http://localhost:3001');

  // const sendMessage = () => {
  //   socket.emit("send_message", { message: 'Hello' });
  // };


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

  const capture = () => {
    h2c(captureRef.current).then(canvas => {
      const dataURL = canvas.toDataURL();

      const a = document.createElement('a');
      a.href = dataURL;
      a.download = '너는P해_나는J할게.png';
  
      a.click();
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
      ScrollTrigger.create({
        markers: false,
        trigger: '.list-p1',
        start: 'top bottom',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom 850px',     // when the "X" of the endTrigger hits "Y" of the scroller
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(p1Ref.current, {
            y: (self.progress * -200),
            overwrite: true,
          });
        },
      });

      ScrollTrigger.update();   // updata로 실행

    }, []);

  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
    
        ScrollTrigger.create({
          markers: false,
          trigger: '.list-p2',
          start: 'top bottom',  // when the "X" of the startTrigger hits "Y" of the scroller
          end: 'bottom 850px',     // when the "X" of the endTrigger hits "Y" of the scroller
          scrub: 1,
          onUpdate: (self) => {
            gsap.to(p2Ref.current, {
              y: (self.progress * -200),
              overwrite: true,
            });
          },
          
        });
  
        ScrollTrigger.update();
  
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
        <div className="root">
          <div className='list-header'>
            <div>
              <img className='list-logo' src={Logo} />
            </div>
            <div className='list-member' >
              {groupMemberChip}
            </div>
            {/* <button type='button' onClick={sendMessage}>Chat</button> */}
          </div>
          
          <div className='list-content' >
            <div ref={bodyRef} className='list-content-container' >
              <ScrollBox 
                setBoxBar={setBoxBar} 
                captureRef={captureRef} 
                searchData={searchData} 
                setKeyword={setKeyword} 
                setXData={setXData} 
                setPushed={setPushed} 
                keyword={keyword} 
                x={x} y={y} 
                setX={setX} 
                setY={setY} />
              <div className='list-box-container' >
                <div>
                  <BoxBar setBoxBar={setBoxBar} />
                </div>
                {boxBar ? 
                <MapBox 
                  boxBar={boxBar} 
                  setPushed={setPushed} 
                  pushed={pushed} 
                  xData={xData} 
                  x={x} y={y}/> : 
                <SearchBox 
                  setSearchData={setSearchData} 
                  setKeyword={setKeyword} 
                  keyword={keyword} /> }
              </div>
            </div>

          <div className='download-box'>
            <p className='list-p1' 
              ref={p1Ref} >
                Are You Finished?
            </p>
            <p className='list-p2' 
              ref={p2Ref} 
              onClick={capture} >
                Download!
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// #569AF5"
          