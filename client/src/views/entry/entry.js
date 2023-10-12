import React, {useState, useEffect, useRef} from 'react';
import logo from '../../assets/images/logo.png';
import entry4Img from '../../assets/images/entry4.png';
import entry5Img from '../../assets/images/entry5.png'; 
import TripList from './tripList.js';
import { TripName, TripDesc, TripCode, ShowGroupCode } from './entryField.js';
import { Create, Join, Create2 } from './entryButton.js';
import { setTripCardClicked } from '../../redux/actions.js';
import { useSelector, useDispatch } from 'react-redux';

import '@styles/entry/entry.css';

function CreateGroupInput() {
    return (
        <div>
            <TripName />
            <div style={{height:'3vh'}} />
            <TripDesc />
            <div style={{height:'3vh'}} />
            <Create />
        </div>
    )
}

function CreateGroupRandomNumber() {

    return (
        <div>
            <ShowGroupCode />
            <Create2 />
        </div>
    )
}


function Entry() {
    const [entryCreate, setEntryCreate] = useState(false);
    const [entryJoin, setEntryJoin] = useState(false);
    const dispatch = useDispatch();
    const entry4Ref = useRef(null);
    const entry5Ref = useRef(null);
    const entry2Ref = useRef(null);
    const entry4_1Ref = useRef(null);
    const entry5_1Ref = useRef(null);
    const entry4_3Ref = useRef(null);
    const entry5_3Ref = useRef(null);
    const entry4_4Ref = useRef(null);
    const entry5_4Ref = useRef(null);
    const entryLoadingRef = useRef(null);
    const createdGroup = useSelector((state) => state.createdGroup);
    const name = sessionStorage.getItem("name");
    const tripCardClicked = useSelector((state) => state.tripCardClicked);

    function handleClick() {       // '새로운 여행 떠나기' 에니메이션
        entry4Ref.current.classList.add('entry-lr');
        entry5Ref.current.classList.add('entry-rl');
        entry2Ref.current.classList.add('entry-tb');
        entry4_1Ref.current.classList.add('entry-lr2');
        entry5_1Ref.current.classList.add('entry-rl2');
    }

    function handleClickCreate() { // '여행 호스트 되기' 에니메이션
        entry4_3Ref.current.classList.add('entry-create');
        setTimeout(() => {
            setEntryCreate(true);
        }, 1000)
    }

    function handleClickJoin() {   // '초대 코드로 참여' 에니메이션
        entry5_3Ref.current.classList.add('entry-join');
        setTimeout(() => {
            setEntryJoin(true);
        }, 1000)
    }

    useEffect(() => {              // 여행 선택 시
        if(tripCardClicked === true)
            entryLoadingRef.current.classList.add('entry-loading-animation');
            dispatch(setTripCardClicked(false));
    }, [tripCardClicked])

    return (
        <div className='entry'>
            <div className='entry_loading' ref={entryLoadingRef} />
            <div className='upperBar'>
                <img className='entryLogo' src={logo} />
            </div>

            <div className='entry1'>
                <div className='entry2' ref={entry2Ref}>
                    <p className='entry3'>{name} 님이 참여 중인 여행</p>
                        <TripList />
                    <p className='entry6' onClick={handleClick} >새로운 여행 떠나기</p>
                </div>

                <div className='entry4' ref={entry4Ref} onClick={handleClickCreate} > 
                    <img className='entry4Img' src={entry4Img} />
                    <p className='entry4-2'>여행 호스트 되기</p>

                </div>

                <div className='entry3-1'>
                    <div className='entry4-1' ref={entry4_1Ref} />
                    <div className='entry5-1' ref={entry5_1Ref} />
                </div>

                
                <div className='entry5' ref={entry5Ref} onClick={handleClickJoin}>
                    <img className='entry5Img' src={entry5Img} />
                    <p className='entry5-2'>초대 코드로 참여</p>
                </div>

                <div className='entry3-1'>
                    <div className='entry4-3' ref={entry4_3Ref} />
                    {entryCreate && <div className='entry4-4' ref={entry4_4Ref}>
                        <div className='entry4-5'>
                            <p style={{fontSize:'5vh'}}>여행 시작하기</p>
                            { createdGroup ? <CreateGroupRandomNumber /> : <CreateGroupInput /> }
                                    
                            
                        </div>
                    </div>}

                    <div className='entry5-3' ref={entry5_3Ref} />
                    {entryJoin && <div className='entry5-4' ref={entry5_4Ref}>

                        <div className='entry5-5'>
                            <p style={{fontSize:'5vh'}}>여행 참여하기</p>
                            <div>
                                <TripCode />
                                <div style={{height:'3vh'}} />
                                <Join />
                            </div>
                            
                        </div>
                    </div>}

                </div>
                
            </div>
            
        </div>
    )
}



export default Entry;