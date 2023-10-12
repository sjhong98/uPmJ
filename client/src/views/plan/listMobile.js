import axios from 'axios';
import '@styles/plan/listMobile.css';
import logo from '@assets/images/logo.png';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateData2, updateData3, updateData4, updateData5 } from '@redux/actions';

export default function listMobile() {
    const dispatch = useDispatch();
    const data2 = useSelector(state => state.data2);
    const data3 = useSelector(state => state.data3);
    const data4 = useSelector(state => state.data4);
    const data5 = useSelector(state => state.data5);
    const urlParams = new URLSearchParams(window.location.search);
    const tripId = urlParams.get('trip_id');

    useEffect(() => {
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
            day2.unshift({contentId:0, title:'day 1', index:0});
            day3.unshift({contentId:0, title:'day 2', index:0});
            day4.unshift({contentId:0, title:'day 3', index:0});
            day5.unshift({contentId:0, title:'day 4', index:0});
            dispatch(updateData2(day2));
            dispatch(updateData3(day3));
            dispatch(updateData4(day4));
            dispatch(updateData5(day5));
          })
    }, []);

    useEffect(() => {console.log(data2)}, [data2]);

    return (
        <div className="list-mobile">
            <div className='list-mobile-logo-container'>
                <img src={logo} className='list-mobile-logo' />
            </div>
            <div className='list-mobile-content-container'>
                <div className='list-mobile-columns'>
                    { data2.map((item) => (
                        <div className='list-mobile-cards'>
                            <p onClick={() => {
                                if(item.contentId !== 0)
                                    window.open(`https://map.naver.com/p/search/${item.title}`);
                            }}>{item.title}</p>
                        </div>
                     ))}
                </div>
                <div className='list-mobile-columns'>
                    { data3.map((item) => (
                        <div className='list-mobile-cards'>
                            <p onClick={() => {
                                if(item.contentId !== 0)
                                    window.open(`https://map.naver.com/p/search/${item.title}`);
                            }}>{item.title}</p>
                            
                        </div>
                     ))}
                </div>
                <div className='list-mobile-columns'>
                    { data4.map((item) => (
                        <div className='list-mobile-cards'>
                            <p onClick={() => {
                                if(item.contentId !== 0)
                                    window.open(`https://map.naver.com/p/search/${item.title}`);
                            }}>{item.title}</p>
                        </div>
                     ))}
                </div>
                <div className='list-mobile-columns'>
                    { data5.map((item) => (
                        <div className='list-mobile-cards'>
                            <p onClick={() => {
                                if(item.contentId !== 0)
                                    window.open(`https://map.naver.com/p/search/${item.title}`);
                            }}>{item.title}</p>
                        </div>
                     ))}
                </div>
            </div>
        </div>
    )
}