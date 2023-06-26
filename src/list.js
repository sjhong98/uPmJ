import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
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


function ScrollBox(props) {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [doAxios, setDoAxios] = useState(false);
  const [sido, setSido] = useState("1");
  const [delCol, setDelCol] = useState("");
  const [delId, setDelId] = useState("");
  const [w1, setW1] = useState(250);
  const [w2, setW2] = useState(230);
  const [w3, setW3] = useState(230);
  const [w4, setW4] = useState(230);
  const [w5, setW5] = useState(230);
  const [columnNum, setColumnNum] = useState(4);
  const [columnDisplay, setColumnDisplay] = useState([]);
  const [sigungu, setSigungu] = useState("1");
  const [selectSigungu, setSelectSigungu] = useState([<Default />]);
  const [searchTitle, setSearchTitle] = useState("");


  useEffect(() => {
    let count = 0;
    console.log(sido, sigungu);
    if (doAxios) {
      const fetchData = async () => {
        const response = await axios.get(`http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=9WoDbi5cEPzCGVDav3rhhV97QiukpderlvNMdfM8nJ4gTXBHoky%2BSAyPpmQtqdyOz3PUABXccwrIqz%2FtJXBIJg%3D%3D&areaCode=${sido}&sigunguCode=${sigungu}&contentTypeId=12&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`);
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
  };

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
  
  const setDataByColumnId = (columnId, newData) => {
    switch (columnId) {
      case 'drop1':
        setData(newData);
        break;
      case 'drop2':
        setData2(newData);
        break;
      case 'drop3':
        setData3(newData);
        break;
      case 'drop4':
        setData4(newData);
        break;
      case 'drop5':
        setData5(newData);
        break;
      default:
        break;
    }
  };
  
  useEffect(() => {
    const temp2 = {contentId:1234, title:'day1', index:0};
    setData2([temp2]);
    const temp3 = {contentId:5678, title:'day2', index:0};
    setData3([temp3]);
    const temp4 = {contentId:9012, title:'day3', index:0};
    setData4([temp4]);
    const temp5 = {contentId:3456, title:'day4', index:0};
    setData5([temp5]);
  }, []);


  useEffect(() => {  // 카드 삭제
    const items = getDataByColumnId(delCol);
    const updatedItems = items.filter(obj => obj.contentId !== delId);
    setDataByColumnId(delCol, updatedItems);
  }, [delId, delCol]);
  

  useEffect(() => {
    switch (columnNum) {
      case 2:
        setColumnDisplay([column, column2]);
        break;
  
      case 3:
        setColumnDisplay([column, column2, column3]);
        break;
  
      case 4:
        setColumnDisplay([column, column2, column3, column4]);
        break;
  
      case 5:
        setColumnDisplay([column, column2, column3, column4, column5]);
        break;
    }
  }, [columnNum, data2, data, data3, data4, data5]); // data2 -> 처음에 day1 카드들어갈 때 업데이트 / data -> axios할 때 업데이트 / data3-5 -> 제거시 리랜더링
  

  const column = (
        <Box display="flex" sx={{ backgroundColor: 'gray', height:'900px', overflow:'auto', width: w1}}>
            <Droppable droppableId="drop1">
            {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                {data.map((item, index) => (
                    <Draggable key={item.contentId} draggableId={item.contentId} index={index}>
                    {(provided) => (
                        <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        >
                        <CardBox
                            index={index} column={"drop1"} contentId={item.contentId} setKeyword={props.setKeyword} title={item.title} addr1={item.addr1} image={item.image} mapx={item.mapx} mapy={item.mapy} setDelCol={setDelCol} setDelId={setDelId}
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
  );

  const column2 = (
        <Box display="flex" sx={{ backgroundColor: 'lightGray', height:'900px', overflow:'auto', width:w2}}>
            <Droppable droppableId="drop2">
            {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                {data2.map((item, index) => (
                    <Draggable key={item.contentId} draggableId={item.contentId} index={index}>
                    {(provided) => (
                        <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        >
                            <CardBox
                            index={index} column={"drop2"} contentId={item.contentId} setKeyword={props.setKeyword} title={item.title} addr1={item.addr1} image={item.image} mapx={item.mapx} mapy={item.mapy} setDelCol={setDelCol} setDelId={setDelId}
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
  );

  const column3 = (
        <Box display="flex" sx={{ backgroundColor: 'gray', height:'900px', overflow:'auto', width:w3}}>
            <Droppable droppableId="drop3">
            {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                {data3.map((item, index) => (
                    <Draggable key={item.contentId} draggableId={item.contentId} index={index}>
                    {(provided) => (
                        <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        >
                            <CardBox
                            index={index} column={"drop3"} contentId={item.contentId} setKeyword={props.setKeyword} title={item.title} addr1={item.addr1} image={item.image} mapx={item.mapx} mapy={item.mapy} setDelCol={setDelCol} setDelId={setDelId}
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
  );

  const column4 = (
        <Box display="flex" sx={{ backgroundColor: 'lightGray', height:'900px', overflow:'auto', width:w4}}>
            <Droppable droppableId="drop4">
            {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                {data4.map((item, index) => (
                    <Draggable key={item.contentId} draggableId={item.contentId} index={index}>
                    {(provided) => (
                        <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        >
                            <CardBox
                            index={index} column={"drop4"} contentId={item.contentId} setKeyword={props.setKeyword} title={item.title} addr1={item.addr1} image={item.image} mapx={item.mapx} mapy={item.mapy} setDelCol={setDelCol} setDelId={setDelId}
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
  );

  const column5 = (
    <Box display="flex" sx={{ backgroundColor: 'gray', height:'900px', overflow:'auto', width:w5}}>
        <Droppable droppableId="drop5">
        {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
            {data5.map((item, index) => (
                <Draggable key={item.contentId} draggableId={item.contentId} index={index}>
                {(provided) => (
                    <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    >
                        <CardBox
                        index={index} column={"drop5"} contentId={item.contentId} setKeyword={props.setKeyword} title={item.title} addr1={item.addr1} image={item.image} mapx={item.mapx} mapy={item.mapy} setDelCol={setDelCol} setDelId={setDelId}
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
);

  return (
    <div>
      <div style={{marginBottom: '5px', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
        <div style={{display:'flex', flexDirection:'row'}}>
          <SelectSido setDoAxios={setDoAxios} setSido={setSido} />
          {selectSigungu}
        </div>
        <ColumnSet setColumnNum={setColumnNum} columnNum={columnNum} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
            {columnDisplay}
        </DragDropContext>
        
      </div>
    </div>
  );
  
}

function ColumnSet(props) {
  const setColumnNum = props.setColumnNum;
  const columnNum = props.columnNum;

  return(
    <ColumnButtonSet setColumnNum={setColumnNum} columnNum={columnNum}/>
  )
}

function SearchBox(props) {
  const [searchData, setSearchData] = useState("Search Box");
  const [doSearch, setDoSearch] = useState(false);
  const [addr, setAddr] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [placeId, setPlaceId] = useState("");
  const [searchError, setSearchError] = useState(false);
  const [website, setWebsite] = useState("");

  // AIzaSyB9QQva3lfFKOO5zBXfOO66Q2LKJ3E0IzI

  useEffect(()=> {
    axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=${props.keyword}&key=AIzaSyB9QQva3lfFKOO5zBXfOO66Q2LKJ3E0IzI`)
            .then(function(response) {
              console.log("검색결과 : ", response.data.results[0]);
              setAddr(response.data.results[0].formatted_address);
              setPlaceId(response.data.results[0].place_id);
              console.log(placeId);
            })
            .catch(function(error){
              console.log(error);
            })
  }, [props.keyword]);

  useEffect(()=> {
    axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyB9QQva3lfFKOO5zBXfOO66Q2LKJ3E0IzI`)
            .then(function(response) {
              console.log("세부정보 : ", response.data.result);
              setWebsite(!response.data.result.website);

              let YOUR_PHOTO_REFERENCE = response.data.result.photos[0].photo_reference;
              setImageURL(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${YOUR_PHOTO_REFERENCE}&key=AIzaSyB9QQva3lfFKOO5zBXfOO66Q2LKJ3E0IzI`);

            })
            .catch(function(error) {
              console.log(error);
            });
  }, [placeId]);


  return(
    <div>
      <div style={{backgroundColor:'lightGray', width:'400px', height:'900px', marginTop:'60px', padding:'10px', borderRadius:'5%'}}>
        <img src={imageURL} />
        <p>{addr}</p>
        <p>{website}</p>
      </div>
    </div>
  );
}


export default function List() {
  const [keyword, setKeyword] = useState("");

  return (
      <div className="root">
        <div className="upperBar">
          <h1>넌 P해 난 J할게</h1>
        </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <ScrollBox setKeyword={setKeyword} keyword={keyword} />
          <SearchBox setKeyword={setKeyword} keyword={keyword} />
        </div>
      </div>
  );
}
