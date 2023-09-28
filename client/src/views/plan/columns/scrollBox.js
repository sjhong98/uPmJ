import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import CardBox from './materials/card.js';
import ColumnButtonSet from './materials/columnButtonSet.js';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import SelectSido from './materials/selectSido.js';
import { Box, Button } from '@mui/material';
import { updateData2, updateData3, updateData4, updateData5, setGroupMember } from '../../../redux/actions.js'; // action에 정의된 내용 가져오기
import { useSelector, useDispatch } from 'react-redux';
import SearchField from '../../../modules/field/searchField.js';
import LocationMenu from './materials/locationMenu.js';
import './scrollBox.css';


export default function ScrollBox(props) {
    const [data, setData] = useState([{contentId:1, title:'day 1', index:0}]);
    const [doAxios, setDoAxios] = useState(false);
    const [sido, setSido] = useState("시도");
    const [sidoCode, setSidoCode] = useState("1");
    const [delCol, setDelCol] = useState("");
    const [delId, setDelId] = useState("");
    const [columnNum, setColumnNum] = useState(2);
    const [columnDisplay, setColumnDisplay] = useState([]);
    const [sigungu, setSigungu] = useState("1");
    const [selectSigungu, setSelectSigungu] = useState();
    const [columnAdded, setColumnAdded] = useState(false);
    const [columnSubed, setColumnSubed] = useState(false);
    const [draggingItem, setDraggingItem] = useState("");
    const [draggingColumn, setDraggingColumn] = useState("");
  
    const setX = props.setX;
    const setY = props.setY;
    const data2 = useSelector((state) => state.data2);
    const data3 = useSelector((state) => state.data3);
    const data4 = useSelector((state) => state.data4);
    const data5 = useSelector((state) => state.data5);
    const setPushed = props.setPushed;
    const setXData = props.setXData;
    const searchData = props.searchData;
    const [test, setTest] = useState(0);
    const [active, setActive] = useState(false);
  
    const dispatch = useDispatch();
    const urlParams = new URLSearchParams(window.location.search);
    const tripId = urlParams.get('trip_id');
  
    useEffect(() => {   // 초기 세팅
      axios.post("http://localhost:5001/group/requestgroup", {  // 그룹 정보 받아오는 부분
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
    }, []);
  
    useEffect(() => {   // 공공 데이터 받아오기
      let count = 0;
      if (doAxios) {
        const fetchData = async () => {
            console.log(sidoCode);
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
  
    useEffect(() => {   // 웹소켓 동작부
      const _source = "drop1";
      const _dest = "drop2";
      const sIndex = 0;
      const dIndex = 1;
      const testItem = {addr1: "주소", contentId: "123123", image: "이미지", index: dIndex, mapx: "127.028", mapy: "37.5", title:"테스트"};
      const move = {item: testItem, sourceColumnId:_source, sourceIndex:sIndex, destinationColumnId:_dest, destinationIndex:dIndex};
      console.log("이동", move);
  
      if(active !== false) {
        const sourceColumnItems = getDataByColumnId(move.sourceColumnId);
        const destinationColumnItems = getDataByColumnId(move.destinationColumnId);
  
        sourceColumnItems.splice(move.sourceIndex, 1);   // 잘라내기
        destinationColumnItems.splice(move.destinationIndex, 0, move.item);   // 끼워넣기
  
        setDataByColumnId(move.sourceColumnId, sourceColumnItems);
        setDataByColumnId(move.destinationColumnId, destinationColumnItems);
        console.log(getDataByColumnId("drop2"));
  
        console.log("수행");
        setDraggingItem(0);
        setDraggingColumn("");
      }
  
      setActive(true);
    }, [test]);
  
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
      } 
      else {    // 다른 column 간의 이동
        const sourceColumnItems = getDataByColumnId(sourceColumnId);
        const destinationColumnItems = getDataByColumnId(destinationColumnId);
  
        const [removed] = sourceColumnItems.splice(result.source.index, 1);   // 잘라내기
        destinationColumnItems.splice(result.destination.index, 0, removed);  // 끼워넣기
    
        setDataByColumnId(sourceColumnId, sourceColumnItems); // 잘라낸 sourceData update
        setDataByColumnId(destinationColumnId, destinationColumnItems);   // 끼워넣은 destinationData update
      }
  
      setDraggingItem(0);
      setDraggingColumn("");
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
      const items = getDataByColumnId(delCol);
      const updatedItems = items.filter(obj => obj.contentId !== delId);
      setDataByColumnId(delCol, updatedItems);
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
        <button onClick={() => {setTest(test => test+1)}}>
          test
        </button>
        <div className='scroll-box-upper-tools'>
          <div className='scroll-box-tools-container'>
            <SelectSido 
              setDoAxios={setDoAxios} 
              sido={sido} 
              setSido={setSido} 
              setSidoCode={setSidoCode} />
            {selectSigungu}
            <SearchField 
              setKeyword={props.setKeyword} 
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