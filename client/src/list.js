import React, { useState, useEffect, useRef } from 'react';
import { Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { updateData2, updateData3, updateData4, updateData5 } from './actions.js'; // action에 정의된 내용 가져오기
import './index.css';
import axios from 'axios';
import CardBox from './card.js';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import SelectSido from './field/selectSido.js';
import ColumnButtonSet from './columnButtonSet.js';
import Seoul from './field/sigungu/seoul.js';
import Busan from './field/sigungu/busan.js';
import Incheon from './field/sigungu/incheon.js';
import Gyeonggi from './field/sigungu/gyeonggi.js';
import Kyeongbuk from './field/sigungu/kyeongbuk.js';
import Kyeongnam from './field/sigungu/kyeongnam.js';
import Jeonnam from './field/sigungu/jeonnam.js';
import Jeonbuk from './field/sigungu/jeonbuk.js';
import Gwangju from './field/sigungu/gwangju.js';
import Daejeon from './field/sigungu/daejeon.js';
import Daegu from './field/sigungu/daegu.js';
import Sejong from './field/sigungu/sejong.js';
import Ulsan from './field/sigungu/ulsan.js';
import Chungbuk from './field/sigungu/chungbuk.js';
import Chungnam from './field/sigungu/chungnam.js';
import Gangwon from './field/sigungu/gangwon.js';
import Default from './field/sigungu/default.js';
import BoxBar from './field/boxbar.js';
import { useSpring, animated } from '@react-spring/web';
import SearchBox from './searchBox.js';
import MapBox from './mapBox.js';
import SearchField from './field/searchField.js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackgroundImg from "./assets/images/travel5.jpeg";
import Logo from "./assets/images/logo.png";
import h2c from 'html2canvas';
import './entry.css';




// #569AF5
// #70B4FA

function ScrollBox(props) {
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [doAxios, setDoAxios] = useState(false);
  const [sido, setSido] = useState("1");
  const [delCol, setDelCol] = useState("");
  const [delId, setDelId] = useState("");
  const [columnNum, setColumnNum] = useState(2);
  const [columnDisplay, setColumnDisplay] = useState([]);
  const [sigungu, setSigungu] = useState("1");
  const [selectSigungu, setSelectSigungu] = useState([<Default />]);
  const [added, setAdded] = useState(true);
  const [columnAdded, setColumnAdded] = useState(false);
  const [columnSubed, setColumnSubed] = useState(false);
  const [draggingItem, setDraggingItem] = useState("");
  const [draggingColumn, setDraggingColumn] = useState("");
  const [BackgroundColor, setBackgroundColor] = useState("#000000");

  const setX = props.setX;
  const setY = props.setY;
  const data2 = useSelector((state) => state.data2);
  const data3 = useSelector((state) => state.data3);
  const data4 = useSelector((state) => state.data4);
  const data5 = useSelector((state) => state.data5);
  const setPushed = props.setPushed;
  const setXData = props.setXData;
  const searchData = props.searchData;

  const dispatch = useDispatch();

  const urlParams = new URLSearchParams(window.location.search);
  const tripId = urlParams.get('trip_id');
  console.log("TRIP_ID : ", tripId);

  axios.post("http://localhost:5001/group/requestgroup", {  // data 받아오는 부분
    data: {
      code: tripId,
    },
  })
  .then(res => {
    console.log("RES_PLAN : ", res);
  })
  .catch(err => {
    console.log("ERR_PLAN : ", err);
  })

  useEffect(() => {
    let count = 0;
    if (doAxios) {
      const fetchData = async () => {
        const response = await axios.get(`https://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=${process.env.REACT_APP_PUBLIC_DATA_KEY}&areaCode=${sido}&sigunguCode=${sigungu}&contentTypeId=12&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`);
        setTotalCount(response.data.response.body.totalCount);

        const _data = response.data.response.body.items.item;

        const extracted = _data && Array.isArray(_data)
          ? _data.map((item) => {
            return {
              index: count++,
              contentId: item.contentid,
              title: item.title,
              addr1: item.addr1,
              image: item.firstimage,
              mapx: item.mapx,
              mapy: item.mapy
            };
          })
          : [];

        setData(extracted);

      };

      fetchData();
    }
  }, [sido, sigungu]);

  useEffect(() => {
    switch (sido) {
      case 1 :
        setSelectSigungu([<Seoul sigungu={sigungu} setSigungu={setSigungu} setDoAxios={setDoAxios} />]);
        return;

      case 2 :
        setSelectSigungu([<Incheon sigungu={sigungu} setSigungu={setSigungu} setDoAxios={setDoAxios} />]);
        return;

      case 3 :
        setSelectSigungu([<Daejeon sigungu={sigungu} setSigungu={setSigungu} setDoAxios={setDoAxios} />]);
        return;

      case 4 :
        setSelectSigungu([<Daegu sigungu={sigungu} setSigungu={setSigungu} setDoAxios={setDoAxios} />]);
        return;

      case 5:
        setSelectSigungu([<Gwangju sigungu={sigungu} setSigungu={setSigungu} setDoAxios={setDoAxios} />]);
        return;

      case 6 :
        setSelectSigungu([<Busan sigungu={sigungu} setSigungu={setSigungu} setDoAxios={setDoAxios} />]);
        return;

      case 7:
        setSelectSigungu([<Ulsan sigungu={sigungu} setSigungu={setSigungu} setDoAxios={setDoAxios} />]);
        return;

      case 8 :
        setSelectSigungu([<Sejong sigungu={sigungu} setSigungu={setSigungu} setDoAxios={setDoAxios} />]);
        return;

      case 31 :
        setSelectSigungu([<Gyeonggi sigungu={sigungu} setSigungu={setSigungu} setDoAxios={setDoAxios} />]);
        return;

      case 32 :
        setSelectSigungu([<Gangwon sigungu={sigungu} setSigungu={setSigungu} setDoAxios={setDoAxios} />]);
        return;

      case 33 :
        setSelectSigungu([<Chungbuk sigungu={sigungu} setSigungu={setSigungu} setDoAxios={setDoAxios} />]);
        return;

      case 34 :
        setSelectSigungu([<Chungnam sigungu={sigungu} setSigungu={setSigungu} setDoAxios={setDoAxios} />]);
        return;
      
      case 35 :
        setSelectSigungu([<Kyeongbuk sigungu={sigungu} setSigungu={setSigungu} setDoAxios={setDoAxios} />]);
        return;
      
      case 36 :
        setSelectSigungu([<Kyeongnam sigungu={sigungu} setSigungu={setSigungu} setDoAxios={setDoAxios} />]);
        return;
      
      case 37 :
        setSelectSigungu([<Jeonbuk sigungu={sigungu} setSigungu={setSigungu} setDoAxios={setDoAxios} />]);
        return;

      case 38 :
        setSelectSigungu([<Jeonnam sigungu={sigungu} setSigungu={setSigungu} setDoAxios={setDoAxios} />]);
        return;
    }
  }, [sido])

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
  
    const sourceColumnId = result.source.droppableId;
    const destinationColumnId = result.destination.droppableId;
    setPushed(true);
  
    if (sourceColumnId === destinationColumnId) {
      // 같은 column 내에서의 이동
      const columnId = sourceColumnId;
      const items = (getDataByColumnId(columnId));
      const [removed] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, removed);
      setDataByColumnId(columnId, items);
    } else {
      // 다른 column 간의 이동
      const sourceColumnItems = getDataByColumnId(sourceColumnId);
      const destinationColumnItems = getDataByColumnId(destinationColumnId);
  
      const [removed] = sourceColumnItems.splice(result.source.index, 1);   // 잘라내기
      destinationColumnItems.splice(result.destination.index, 0, removed);  // 끼워넣기
  
      setDataByColumnId(sourceColumnId, sourceColumnItems); // 잘라낸 sourceData update
      setDataByColumnId(destinationColumnId, destinationColumnItems);   // 끼워넣은 destinationData update
    }

    setDraggingItem(0);
    setDraggingColumn("");
    setBackgroundColor("#FFFFFF");
  };

  const handleDragStart = (start, provided) => {

    console.log(start);
    console.log(start.draggableId);
    console.log(start.source.droppableId)

    setDraggingItem(start.draggableId);
    setDraggingColumn(start.source.droppableId);
  }

  useEffect(() => { // 드래그 시에 어떤 요소가 드래고 있는지에 대한 정보 갱신
    setBackgroundColor("#569AF5");
  }, [draggingItem, draggingColumn]);


  const getDataByColumnId = (columnId) => {
    switch (columnId) {
      case 'drop1':
        return data;
      case 'drop2':
        return data2;
      case 'drop3':
        return data3;
      case 'drop4':
        return data4;
      case 'drop5' :
        return data5;
      default:
        return [];
    }
  };
  
  const setDataByColumnId = (columnId, newData) => { // 변경된 데이터 업데이트
    switch (columnId) {
      case 'drop1':
        setData(newData);  // useState로 상태관리
        break;
      case 'drop2':
        dispatch(updateData2(newData))  // redux로 상태관리
        break;
      case 'drop3':
        dispatch(updateData3(newData))
        break;
      case 'drop4':
        dispatch(updateData4(newData))
        break;
      case 'drop5':
        dispatch(updateData5(newData))
        break;
      default:
        break;
    }
  };

  useEffect(() => {  // 카드 삭제
    const items = getDataByColumnId(delCol);
    const updatedItems = items.filter(obj => obj.contentId !== delId);
    setDataByColumnId(delCol, updatedItems);
  }, [delId, delCol]);
  

  useEffect(() => {
    setTimeout(() => {
      switch (columnNum) {
        case 2:
          if(!columnSubed) {
            setColumnDisplay([column2]);
            setColumnAdded(false);
            setColumnSubed(false);
            break;
          }
          else {
            setColumnDisplay([column2, column3]);
            setColumnAdded(false);
            setColumnSubed(false);
            break;
          }
  
        case 3:
          if(!columnSubed) {
            setColumnDisplay([column2, column3]);
            setColumnAdded(false);
            setColumnSubed(false);
            break;
          }
          else {
            setColumnDisplay([column2, column3, column4]);
            setColumnAdded(false);
            setColumnSubed(false);
            
            break;
          }
  
        case 4:
          if(!columnSubed) {
            setColumnDisplay([column2, column3, column4]);
            setColumnAdded(false);
            setColumnSubed(false);
            break;
          }
          else {
            setColumnDisplay([column2, column3, column4, column5]);
            setColumnAdded(false);
            setColumnSubed(false);
            break;
          }
  
        case 5:
            setColumnDisplay([column2, column3, column4, column5]);
            setColumnAdded(false);
            setColumnSubed(false);
            break;

  
        default:
          setColumnDisplay([]);
          break;
      }

    }, 0);
  }, [columnNum, data, data2, data3, data4, data5, draggingItem, draggingColumn]); // data2 -> 처음에 day1 카드들어갈 때 업데이트 / data -> axios할 때 업데이트 / data3-5 -> 제거시 리랜더링

  useEffect(() => {  // make card 검색 시 result 가져와 card로 만들기
    const result = [{     // result를 배열 형태로 가져오기
      index: 0,
      contentId: searchData.id,
      title: searchData.place_name,
      addr1: searchData.road_address_name,
      mapx: searchData.x,
      mapy: searchData.y
    }];

    setData(result);  // data에 집어넣음 -> column1에서 출력


  }, [searchData]);  // 검색 시에 동작

  

  const column = (
    <div style={{display:'flex', flexDirection: 'column', marginTop:'-15px'}}>
        <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', marginBottom:'-10px'}}>
          <p style={{color:"#fff"}}>P l a c e</p>
        </div>
        <Box display="flex" sx={{ backgroundColor: "transparent", border:'solid', borderWidth:'10px', borderColor:'#fff', height:'900px', overflow:'auto', width: '210', marginRight:'30px'}}>
            <Droppable droppableId="drop1">
            {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps} >
                {data.map((item, index) => (
                    <Draggable key={item.contentId} draggableId={item.contentId} index={index} >
                    {(provided) => (
                        <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        >
                        <CardBox
                           draggingItem={draggingItem} droppableId="drop1" setXData={setXData} index={index} column={"drop1"} setX={setX} setY={setY} contentId={item.contentId} setKeyword={props.setKeyword} title={item.title} addr1={item.addr1} image={item.image} mapx={item.mapx} mapy={item.mapy} setDelCol={setDelCol} setDelId={setDelId}
                        />
                        </div>
                    )}
                    </Draggable>
                ))}
                {provided.placeholder}
                </div>
            )}
            </Droppable>
        </Box>
    </div>
  );

  const column2 = (
    <div style={{display:'flex', flexDirection: 'column', marginTop:'-15px'}}>
        <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', marginBottom:'-10px'}}>
          <p style={{color:"#fff"}}>D a y  1</p>
        </div>
        <Box display="flex" sx={{ border:'solid', borderWidth:'10px', borderColor:'#fff', height:'900px', overflow:'auto', width:'210'}}>
            <Droppable droppableId="drop2">
            {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                {data2 && data2.map((item, index) => (
                    <Draggable key={item.contentId} draggableId={item.contentId} index={index}>
                    {(provided) => (
                        <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        >
                            <CardBox
                            style={{}} droppableId="drop2" setXData={setXData} index={index} column={"drop2"} setX={setX} setY={setY} contentId={item.contentId} setKeyword={props.setKeyword} title={item.title} addr1={item.addr1} image={item.image} mapx={item.mapx} mapy={item.mapy} setDelCol={setDelCol} setDelId={setDelId}
                        />

                        </div>
                    )}
                    </Draggable>
                ))}
                {provided.placeholder}
                </div>
            )}
            </Droppable>
        </Box>
        </div>
  );

  const column3 = (
    <div className={columnAdded ? "add" : columnSubed ? columnNum===2 ? "sub" : "" : ""} style={{marginTop:"-15px"}}>
      <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', marginBottom:'-10px'}}>
          <p style={{color:"#fff"}}>D a y  2</p>
        </div>
        <Box display="flex" sx={{ backgroundColor: "transparent", border:'solid', borderWidth:'10px', borderLeftWidth:'0px', borderColor:'#fff', height:'900px', overflow:'auto', width:'210'}}>
            <Droppable droppableId="drop3">
            {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                {data3 && data3.map((item, index) => (
                    <Draggable key={item.contentId} draggableId={item.contentId} index={index}>
                    {(provided) => (
                        <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        >
                            <CardBox
                            index={index} droppableId="drop3" setXData={setXData} column={"drop3"} setX={setX} setY={setY} contentId={item.contentId} setKeyword={props.setKeyword} title={item.title} addr1={item.addr1} image={item.image} mapx={item.mapx} mapy={item.mapy} setDelCol={setDelCol} setDelId={setDelId}
                        />
                            
                        </div>
                    )}
                    </Draggable>
                ))}
                {provided.placeholder}
                </div>
            )}
            </Droppable>
        </Box>
      </div>
  );

  const column4 = (
    <div className={columnAdded ? "add" : columnSubed ? columnNum===3 ? "sub" : "" : ""} style={{marginTop:'-15px'}}>
      <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', marginBottom:'-10px'}}>
          <p style={{color:"#fff"}}>D a y  3</p>
        </div>
          <Box display="flex" sx={{ backgroundColor: "transparent", border:'solid', borderWidth:'10px', borderLeftWidth:'0px', borderColor:'#fff', height:'900px', overflow:'auto', width:'210'}}>
            <Droppable droppableId="drop4">
            {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                {data4 && data4.map((item, index) => (
                    <Draggable key={item.contentId} draggableId={item.contentId} index={index}>
                    {(provided) => (
                        <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        >
                            <CardBox
                            index={index} droppableId="drop4" column={"drop4"} setXData={setXData} setX={setX} setY={setY} contentId={item.contentId} setKeyword={props.setKeyword} title={item.title} addr1={item.addr1} image={item.image} mapx={item.mapx} mapy={item.mapy} setDelCol={setDelCol} setDelId={setDelId}
                        />
                            
                        </div>
                    )}
                    </Draggable>
                ))}
                {provided.placeholder}
                </div>
            )}
            </Droppable>
        </Box>
      </div>
  );

  const column5 = (
    <div className={columnAdded ? "add" : columnSubed ? columnNum===4 ? "sub" : "" : ""} style={{marginTop:'-15px'}}>
      <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', marginBottom:'-10px'}}>
          <p style={{color:"#fff"}}>D a y  4</p>
        </div>
      <Box display="flex" sx={{backgroundColor: "transparent", border:'solid', borderWidth:'10px', borderLeftWidth:'0px', borderColor:'#fff', height:'900px', overflow:'auto', width:'210'}}>
          <Droppable droppableId="drop5">
          {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
              {data5 && data5.map((item, index) => (
                  <Draggable key={item.contentId} draggableId={item.contentId} index={index}>
                  {(provided) => (
                      <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      >
                          <CardBox
                          index={index} droppableId="drop5" column={"drop5"} setXData={setXData} setX={setX} setY={setY} contentId={item.contentId} setKeyword={props.setKeyword} title={item.title} addr1={item.addr1} image={item.image} mapx={item.mapx} mapy={item.mapy} setDelCol={setDelCol} setDelId={setDelId}
                      />
                          
                      </div>
                  )}
                  </Draggable>
              ))}
              {provided.placeholder}
              </div>
          )}
          </Droppable>
      </Box>
    </div>
);




  return (
    <div>
      <div style={{marginBottom: '5px', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
        <div style={{display:'flex', flexDirection:'row'}}>
          <SelectSido setDoAxios={setDoAxios} setSido={setSido} />
          {selectSigungu}
          <SearchField setKeyword={props.setKeyword} setBoxBar={props.setBoxBar} />
          <div style={{marginLeft:'500px', marginRight:'50px'}}>
            <ColumnSet setColumnNum={setColumnNum} columnNum={columnNum} setAdded={setAdded} setColumnAdded={setColumnAdded} setColumnSubed={setColumnSubed}/>
          </div>
        </div>
      </div>

    
      <div className="column" style={{ display: 'flex', flexDirection: 'row'}}>
        <DragDropContext onDragEnd={(result) => handleDragEnd(result)} onDragStart={(start, provided) => handleDragStart(start, provided)}>
            {column}
            <div ref={props.captureRef} style={{display:'flex', flexDirection:'row'}}>
              {columnDisplay}
            </div>
        </DragDropContext>
      </div>
    </div>
  );
  
}

function ColumnSet(props) {
  const setColumnNum = props.setColumnNum;
  const columnNum = props.columnNum;

  return(
    <ColumnButtonSet setColumnNum={setColumnNum} columnNum={columnNum} setAdded={props.setAdded} setColumnAdded={props.setColumnAdded} setColumnSubed={props.setColumnSubed}/>
  )
}



export default function List() {
  const [keyword, setKeyword] = useState("");
  const [boxBar, setBoxBar] = useState(true);
  const [x, setX] = useState(126.97722);
  const [y, setY] = useState(37.57861);
  const [pushed, setPushed] = useState(false);
  const [xData, setXData] = useState("");
  const [searchData, setSearchData] = useState([]);

  const titleRef = useRef();
  const bodyRef = useRef();
  const imgRef = useRef();
  const p1Ref = useRef();
  const p2Ref = useRef();
  const p3Ref = useRef();
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
        trigger: '.p1',
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
          trigger: '.p2',
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
    <div className="page" style={{height:'200vh', backgroundColor:'#E3AF27'}}>
      <div className='plan_loading' ref={loadingRef} />

      <div style={{marginTop:'30px', position:'absolute', zIndex:2, width: '100%'}}>
        <div className="root">
          <div style={{height:'15vh', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <div>
              <img src={Logo} style={{width:'500px'}} />
            </div>
            <div style={{marginLeft:'60vw'}}>
              <p>hello</p>
            </div>
          </div>
          
          <div style={{display:'flex', flexDirection:'column'}}>

            <div ref={bodyRef} style={{display:'flex', flexDirection:'row', justifyContent:'space-between', fontFamily:"naver_light"}}>
              
                <ScrollBox setBoxBar={setBoxBar} captureRef={captureRef} searchData={searchData} setKeyword={setKeyword} setXData={setXData} setPushed={setPushed} keyword={keyword} x={x} y={y} setX={setX} setY={setY} />

              <div style={{backgroundColor:'#FFFFFF', width:'400px', height:'970px', marginTop:'5px', padding:'0px', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.4)'}} >
                <div style={{ }}>
                  <BoxBar setBoxBar={setBoxBar} />
                </div>
                {boxBar ? <MapBox boxBar={boxBar} setPushed={setPushed} pushed={pushed} xData={xData} x={x} y={y}/> : <SearchBox setSearchData={setSearchData} setKeyword={setKeyword} keyword={keyword} /> }
              </div>
            
          </div>

          <div className='downloadBox' style={{textAlign:'center', marginTop:'100px'}}>

            <p className='p1' style={{zIndex:'100', fontFamily:'google1', fontSize:'100px', color:'#fff', position:'relative'}} ref={p1Ref} >Are You Finished?</p>
            <p className='p2' style={{zIndex:'100', fontFamily:'google1', fontSize:'100px', color:'#fff', cursor:'pointer', position: 'relative', top:'-80px'}} ref={p2Ref} onClick={capture} >Download!</p>

          </div>

          </div>

        </div>
      </div>

    </div>

  );
}


// #569AF5"
          