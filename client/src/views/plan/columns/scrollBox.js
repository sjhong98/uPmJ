import axios from 'axios';
import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { updateData2, updateData3, updateData4, updateData5, setGroupMember } from '@redux/actions.js'; // action에 정의된 내용 가져오기
import { setSocket, setChatHistory } from '@redux/actions';
import { Box } from '@mui/material';
import '@styles/plan/columns/scrollBox.css';
import CardBox from './materials/card.js';
import SelectSido from './materials/selectSido.js';
import LocationMenu from './materials/locationMenu.js';
import SearchField from '@/modules/field/searchField.js';
import ColumnButtonSet from './materials/columnButtonSet.js';


export default function ScrollBox(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [doAxios, setDoAxios] = useState(false);
  const [sido, setSido] = useState("시도"); 
  const [sidoCode, setSidoCode] = useState("1");
  const [delCol, setDelCol] = useState(""); 
  const [delId, setDelId] = useState("");
  const [delIndex, setDelIndex] = useState("");
  const [columnNum, setColumnNum] = useState(2);
  const [columnDisplay, setColumnDisplay] = useState([]);
  const [sigungu, setSigungu] = useState(1);
  const [selectSigungu, setSelectSigungu] = useState();
  const [columnAdded, setColumnAdded] = useState(false); 
  const [columnSubed, setColumnSubed] = useState(false);
  const [draggingItem, setDraggingItem] = useState(""); 
  const [draggingColumn, setDraggingColumn] = useState("");
  const [move, setMove] = useState({});
  const [socketOn, setSocketOn] = useState(0);
  const [cursorIndex, setCursorIndex] = useState(0);
  const data2 = useSelector((state) => state.data2);
  const data3 = useSelector((state) => state.data3);
  const data4 = useSelector((state) => state.data4);
  const data5 = useSelector((state) => state.data5);
  const setPushed = props.setPushed;
  const setXData = props.setXData;
  const searchData = props.searchData;
  const [socketActive, setSocketActive] = useState(false);
  const setCursorPosition = props.setCursorPosition;
  const cursorPosition = props.cursorPosition;
  const urlParams = new URLSearchParams(window.location.search);
  const tripId = urlParams.get('trip_id');
  const socket = io.connect('http://localhost:3001', {
    cors: { origin: '*' },
    reconnection: true, // 자동 재연결 활성화
    reconnectionAttempts: 10, // 최대 재연결 시도 횟수
    reconnectionDelay: 500, // 재연결 시도 간격
  });
  dispatch(setSocket(socket));
  const _email = sessionStorage.getItem("email") !== null ? sessionStorage.getItem("email") : "test@test.com";
  
  useEffect( () => {   // 초기 세팅
    axios.post("http://localhost:5001/groups/info", {  // 그룹 정보 받아오는 부분
      data: {
        code: tripId,
      },
    })
    .then(res => {
      dispatch(setGroupMember(res.data.groupMembers));
    })
    .catch(err => {
      console.log("ERR_PLAN : ", err);
    })

    axios.post("http://localhost:5001/groups/plans", {
      data: {
        code: tripId,
      }
    })
    .then(res => {
      let day2 = JSON.parse(res.data[0][1]);
      let day3 = JSON.parse(res.data[1][2]);
      let day4 = JSON.parse(res.data[2][3]);
      let day5 = JSON.parse(res.data[3][4]);
      day2.unshift({contentId:1, title:'day 1', index:0});
      day3.unshift({contentId:2, title:'day 2', index:0});
      day4.unshift({contentId:3, title:'day 3', index:0});
      day5.unshift({contentId:4, title:'day 4', index:0});
      dispatch(updateData2(day2));
      dispatch(updateData3(day3));
      dispatch(updateData4(day4));
      dispatch(updateData5(day5));
    })
    .catch(err => {
      console.log(err);
    }) 

    const data = {
        email: _email, 
        tripId: tripId
      }
    socket.emit('login', data);

  }, []);
  
  useEffect(() => {   // 공공 데이터 받아오기
    let count = 0;
    if (doAxios) {
      const fetchData = async () => {
        console.log("==== 공공데이터 수신 ====");
        const response = await axios.get(`https://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=${process.env.REACT_APP_PUBLIC_DATA_KEY}&areaCode=${sidoCode}&sigunguCode=${sigungu}&contentTypeId=12&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`);
        // setTotalCount(response.data.response.body.totalCount);

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
  }, [sidoCode, sigungu]);

  useEffect(() => {   // 시도 메뉴창
    setSelectSigungu([
      <LocationMenu 
          sigungu={sigungu} 
          setSigungu={setSigungu} 
          setDoAxios={setDoAxios} 
          location={sido} />
    ])
  }, [sido]);

  document.addEventListener('mousemove', (event) => {   // 커서 정보 전송
    const position = {
      x: event.clientX,
      y: event.clientY,
      tripId: tripId,
      email: _email,
      name: sessionStorage.getItem('name') ? sessionStorage.getItem('name') : '시연',
    };
  
    socket.emit('cursorMove', position);
  });

  useEffect(() => {   // 웹소켓 송신
    console.log("====== socket sent ======\n", move);
    if(socketActive === true)   // 처음엔 동작 X
      socket.emit('dragAndDrop', move);
    setSocketActive(true);
  }, [socketOn]);


  socket.on('dragAndDrop', (data) => {     // 웹소켓 수신 
    console.log("==== socket received ====");
    if(data.email !== _email) {           // 전송자 이외의 사용자에게만 적용
      console.log("======= data received! =======\n", data);
      const sourceColumnItems = getDataByColumnId(data.sourceColumnId);
      const destinationColumnItems = getDataByColumnId(data.destinationColumnId);

      sourceColumnItems.splice(data.sourceIndex, 1);   // 잘라내기
      destinationColumnItems.splice(data.destinationIndex, 0, data.item);   // 끼워넣기
      console.log("item added");

      if(data.sourceColumnId !== 'drop1')     // drop1은 그냥 냅둠
        setDataByColumnId(data.sourceColumnId, sourceColumnItems);
      if(data.destinationColumnId !== 'drop1')
        setDataByColumnId(data.destinationColumnId, destinationColumnItems);
      setDraggingItem(draggingItem => draggingItem+1);
      setDraggingColumn("");
    }
  })

  socket.on('cursorMove', (data) => {
    let cursorTemp, res, color;
    if(data.email !== _email && cursorPosition) {
      cursorTemp = [...cursorPosition];
      res = cursorTemp.findIndex((item) => item.user === data.email);
      if(cursorIndex === -1) {    // cursor object에 해당 user 정보 없을 경우
        if(cursorIndex === 3)
          setCursorIndex(0);
        else
          setCursorIndex(cursorIndex => cursorIndex+1);
      }
      else  
        setCursorIndex(res);
      color = cursorTemp[cursorIndex].color;
      cursorTemp[cursorIndex] = { 
          user: data.email, 
          name: data.name, 
          x: data.x, 
          y: data.y, 
          color: color 
        };
      setCursorPosition(cursorTemp);
    }
  })

  socket.on('chat', (data) => {
    dispatch(setChatHistory(data));
  })
  
  const handleDragEnd = (result) => {   // data 이동 완료
    if (!result.destination) {
      return;
    }
  
    const sourceColumnId = result.source.droppableId;
    const destinationColumnId = result.destination.droppableId;
    setPushed(true);
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
    const item = getDataByColumnId(sourceColumnId)[sourceIndex];
  
    if (sourceColumnId === destinationColumnId) {  // 같은 column 내에서의 이동
      const columnId = sourceColumnId;
      const items = (getDataByColumnId(columnId));
      const [removed] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, removed);
      setDataByColumnId(columnId, items);
      setMove({
          item: removed, 
          sourceColumnId: columnId, 
          sourceIndex: result.source.index, 
          destinationColumnId: columnId, 
          destinationIndex: result.destination.index,
          email: _email,
          tripId: tripId,
      })
    } 
    else {    // 다른 column 간의 이동
      const sourceColumnItems = getDataByColumnId(sourceColumnId);
      const destinationColumnItems = getDataByColumnId(destinationColumnId);

      const [removed] = sourceColumnItems.splice(result.source.index, 1);   // 잘라내기
      destinationColumnItems.splice(result.destination.index, 0, removed);  // 끼워넣기
  
      setDataByColumnId(sourceColumnId, sourceColumnItems); // 잘라낸 sourceData update
      setDataByColumnId(destinationColumnId, destinationColumnItems);   // 끼워넣은 destinationData update

      setMove({
        item: removed, 
        sourceColumnId: sourceColumnId, 
        sourceIndex: result.source.index, 
        destinationColumnId: destinationColumnId, 
        destinationIndex: result.destination.index,
        email: _email,
        tripId: tripId,
      })
    }

    setDraggingItem(0);
    setDraggingColumn("");
    setSocketOn(socketOn => socketOn+1);
  };

  const handleDragStart = (start, provided) => {    // 어떤 column에서 어떤 data가 이동 중인가
    setDraggingItem(start.draggableId);
    setDraggingColumn(start.source.droppableId);
  }


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
    console.log(columnId, newData);
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
    if(socketActive === true)
    {
      const items = getDataByColumnId(delCol);
      const updatedItems = items.filter(obj => obj.contentId !== delId);
      setDataByColumnId(delCol, updatedItems);
      setMove({
        item: {contentId: '0'}, 
        sourceColumnId: delCol, 
        sourceIndex: delIndex, 
        destinationColumnId: 'drop1', 
        destinationIndex: 0,
        email: _email,
        tripId: tripId,
      })
      setSocketOn(socketOn => socketOn+1);
    }
  }, [delId, delCol]);
    
  
  useEffect(() => {  // 검색 동작부
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
    if(doAxios) {
      const result = [{     // result를 배열 형태로 가져오기
        index: 0,
        contentId: searchData.id,
        title: searchData.place_name,
        addr1: searchData.road_address_name,
        mapx: searchData.x,
        mapy: searchData.y
      }];
  
      setData(result);  // data에 집어넣음 -> column1에서 출력
    }

  }, [searchData]);  // 검색 시에 동작

    
  
  const column = (
    <div style={{display:'flex', flexDirection: 'column', marginTop:'-15px', minWidth: '250px'}}>
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
                            draggingItem={draggingItem} 
                            droppableId="drop1" 
                            setXData={setXData} 
                            index={index} 
                            column={"drop1"} 
                            contentId={item.contentId} 
                            title={item.title} 
                            addr1={item.addr1} 
                            image={item.image} 
                            mapx={item.mapx} 
                            mapy={item.mapy} 
                            setDelCol={setDelCol} 
                            setDelId={setDelId}
                            setDelIndex={setDelIndex}
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
                              droppableId="drop2" 
                              setXData={setXData} 
                              index={index} 
                              column={"drop2"} 
                              contentId={item.contentId} 
                              title={item.title} 
                              addr1={item.addr1} 
                              image={item.image} 
                              mapx={item.mapx} 
                              mapy={item.mapy} 
                              setDelCol={setDelCol} 
                              setDelId={setDelId}
                              setDelIndex={setDelIndex}
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
                            index={index} 
                            droppableId="drop3" 
                            setXData={setXData} 
                            column={"drop3"} 
                            contentId={item.contentId} 
                            title={item.title} 
                            addr1={item.addr1} 
                            image={item.image} 
                            mapx={item.mapx} mapy={item.mapy} 
                            setDelCol={setDelCol} 
                            setDelId={setDelId}
                            setDelIndex={setDelIndex}
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
                              index={index} 
                              droppableId="drop4" 
                              column={"drop4"} 
                              setXData={setXData} 
                              contentId={item.contentId} 
                              title={item.title} 
                              addr1={item.addr1} 
                              image={item.image} 
                              mapx={item.mapx} 
                              mapy={item.mapy} 
                              setDelCol={setDelCol} 
                              setDelId={setDelId}
                              setDelIndex={setDelIndex}
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
    <div 
      className={columnAdded ? "add" : columnSubed ? columnNum===4 ? "sub" : "" : ""} 
      style={{marginTop:'-15px'}}>
      <div style={{
          display:'flex', 
          flexDirection: 'row', 
          justifyContent:'center', 
          marginBottom:'-10px'}}>
          <p style={{color:"#fff"}}>D a y  4</p>
        </div>
      <Box display="flex" sx={{
                          backgroundColor: "transparent", 
                          border:'solid', 
                          borderWidth:'10px', 
                          borderLeftWidth:'0px', 
                          borderColor:'#fff', 
                          height:'900px', 
                          overflow:'auto', 
                          width:'210'}}>
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
                            index={index} 
                            droppableId="drop5" 
                            column={"drop5"} 
                            setXData={setXData} 
                            contentId={item.contentId} 
                            title={item.title} 
                            addr1={item.addr1} 
                            image={item.image} 
                            mapx={item.mapx} 
                            mapy={item.mapy} 
                            setDelCol={setDelCol} 
                            setDelId={setDelId}
                            setDelIndex={setDelIndex}
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
      <div className='scroll-box-upper-tools'>
        <div className='scroll-box-tools-container'>
          <SelectSido 
            setDoAxios={setDoAxios} 
            sido={sido} 
            setSido={setSido} 
            setSidoCode={setSidoCode} />
          {selectSigungu}
          <SearchField 
            setBoxBar={props.setBoxBar} />
          <div className='scroll-box-tools-container-right' >
          <ColumnButtonSet 
            setColumnNum={setColumnNum} 
            columnNum={columnNum} 
            setColumnAdded={setColumnAdded} 
            setColumnSubed={setColumnSubed}/>
          </div>
        </div>
      </div>

    
      <div className="scroll-box-columns">
        <DragDropContext 
          onDragEnd={(result) => handleDragEnd(result)} 
          onDragStart={(start, provided) => handleDragStart(start, provided)}>
            {column}
            <div ref={props.captureRef} className="scroll-box-columns-container" >
              {columnDisplay}
            </div>
        </DragDropContext>
      </div>
    </div>
  );
    
}