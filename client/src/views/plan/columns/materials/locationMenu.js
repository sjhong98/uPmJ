import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function LocationMenu(props) {
  const location = props.location;

  const handleChange = (event) => {
    props.setSigungu(event.target.value);
    props.setDoAxios(true);
  };

  const menuMap = (location) => {
    if(location === 'seoul')
      return (
        <Select
          labelId="시군구"
          id="sigungu"
          value={props.sigungu}
          label="시도"
          onChange={handleChange}
        >
            <MenuItem value={23}>종로</MenuItem>
            <MenuItem value={13}>마포</MenuItem>
            <MenuItem value={21}>용산</MenuItem>
            <MenuItem value={20}>영등포</MenuItem>
            <MenuItem value={1}>강남</MenuItem>
            <MenuItem value={15}>서초</MenuItem>
            <MenuItem value={2}>강동</MenuItem>
            <MenuItem value={3}>강북</MenuItem>
            <MenuItem value={4}>강서</MenuItem>
            <MenuItem value={5}>관악</MenuItem>
            <MenuItem value={6}>광진</MenuItem>
            <MenuItem value={7}>구로</MenuItem>
            <MenuItem value={8}>금천</MenuItem>
            <MenuItem value={9}>노원</MenuItem>
            <MenuItem value={10}>도봉</MenuItem>
            <MenuItem value={11}>동대문</MenuItem>
            <MenuItem value={12}>동작</MenuItem>
            <MenuItem value={14}>서대문</MenuItem>
            <MenuItem value={16}>성동</MenuItem>
            <MenuItem value={17}>성북</MenuItem>
            <MenuItem value={18}>송파</MenuItem>
            <MenuItem value={19}>양천</MenuItem>
            <MenuItem value={22}>은평</MenuItem>
            </Select>
        )

      else if(location === 'busan')
        return (
          <Select
            labelId="시군구"
            id="sigungu"
            value={props.sigungu}
            label="시도"
            onChange={handleChange}
          >
            <MenuItem value={16}>해운대</MenuItem>
            <MenuItem value={3}>기장</MenuItem>    
            <MenuItem value={14}>영도</MenuItem>      
            <MenuItem value={1}>강서</MenuItem>
            <MenuItem value={2}>금정</MenuItem>
            <MenuItem value={4}>남구</MenuItem>
            <MenuItem value={5}>동구</MenuItem>
            <MenuItem value={6}>동래</MenuItem>
            <MenuItem value={7}>부산진</MenuItem>
            <MenuItem value={8}>북구</MenuItem>
            <MenuItem value={9}>사상</MenuItem>
            <MenuItem value={10}>사하</MenuItem>
            <MenuItem value={11}>서구</MenuItem>
            <MenuItem value={12}>수영</MenuItem>
            <MenuItem value={13}>연제</MenuItem>
            <MenuItem value={15}>중구</MenuItem>
          </Select>
        )
        else if(location === 'chungbuk')
        return (
          <Select
            labelId="시군구"
            id="sigungu"
            value={props.sigungu}
            label="시도"
            onChange={handleChange}
          >
            <MenuItem value={1}>괴산</MenuItem>
            <MenuItem value={2}>단양</MenuItem>
            <MenuItem value={3}>보은</MenuItem>
            <MenuItem value={4}>영동</MenuItem>
            <MenuItem value={5}>옥천</MenuItem>
            <MenuItem value={6}>음성</MenuItem>
            <MenuItem value={7}>제천</MenuItem>
            <MenuItem value={8}>진천</MenuItem>
            <MenuItem value={9}>청원</MenuItem>
            <MenuItem value={10}>청주</MenuItem>
            <MenuItem value={11}>충주</MenuItem>
            <MenuItem value={12}>증평</MenuItem>

          </Select>
        )
        else if(location === 'chungnam')
        return (
          <Select
            labelId="시군구"
            id="sigungu"
            value={props.sigungu}
            label="시도"
            onChange={handleChange}
          >
            <MenuItem value={1}>공주</MenuItem>
            <MenuItem value={2}>금산</MenuItem>
            <MenuItem value={3}>논산</MenuItem>
            <MenuItem value={4}>당진</MenuItem>
            <MenuItem value={5}>보령</MenuItem>
            <MenuItem value={6}>부여</MenuItem>
            <MenuItem value={7}>서산</MenuItem>
            <MenuItem value={8}>서천</MenuItem>
            <MenuItem value={9}>아산</MenuItem>
            <MenuItem value={10}>예산</MenuItem>
            <MenuItem value={11}>천안</MenuItem>
            <MenuItem value={12}>청양</MenuItem>
            <MenuItem value={13}>태안</MenuItem>
            <MenuItem value={14}>홍성</MenuItem>
            <MenuItem value={15}>계룡</MenuItem>

          </Select>

        )
        else if(location === 'daegu')
        return (
          <Select
            labelId="시군구"
            id="sigungu"
            value={props.sigungu}
            label="시도"
            onChange={handleChange}
          >
            <MenuItem value={1}>남구</MenuItem>
            <MenuItem value={2}>달서</MenuItem>
            <MenuItem value={3}>달성</MenuItem>
            <MenuItem value={4}>동구</MenuItem>
            <MenuItem value={5}>북구</MenuItem>
            <MenuItem value={6}>서구</MenuItem>
            <MenuItem value={7}>수성</MenuItem>
            <MenuItem value={8}>중구</MenuItem>
          </Select>
        )
        else if(location === 'daegeon')
        return (
          <Select
            labelId="시군구"
            id="sigungu"
            value={props.sigungu}
            label="시도"
            onChange={handleChange}
          >
            <MenuItem value={1}>대덕</MenuItem>
            <MenuItem value={2}>동구</MenuItem>
            <MenuItem value={3}>서구</MenuItem>
            <MenuItem value={4}>유성</MenuItem>
            <MenuItem value={5}>중구</MenuItem>
          </Select>

        )
        else if(location === 'gangwon')
        return (
          <Select
            labelId="시군구"
            id="sigungu"
            value={props.sigungu}
            label="시도"
            onChange={handleChange}
          >
            <MenuItem value={1}>강릉</MenuItem>
            <MenuItem value={2}>고성</MenuItem>
            <MenuItem value={3}>동해</MenuItem>
            <MenuItem value={4}>삼척</MenuItem>
            <MenuItem value={5}>속초</MenuItem>
            <MenuItem value={6}>양구</MenuItem>
            <MenuItem value={7}>양양</MenuItem>
            <MenuItem value={8}>영월</MenuItem>
            <MenuItem value={9}>원주</MenuItem>
            <MenuItem value={10}>인제</MenuItem>
            <MenuItem value={11}>정선</MenuItem>
            <MenuItem value={12}>철원</MenuItem>
            <MenuItem value={13}>춘천</MenuItem>
            <MenuItem value={14}>태백</MenuItem>
            <MenuItem value={15}>평창</MenuItem>
            <MenuItem value={16}>홍천</MenuItem>
            <MenuItem value={17}>화천</MenuItem>
            <MenuItem value={18}>횡성</MenuItem>
          </Select>

        )
        else if(location === 'gwangju')
        return (
          <Select
            labelId="시군구"
            id="sigungu"
            value={props.sigungu}
            label="시도"
            onChange={handleChange}
          >
            <MenuItem value={1}>광산</MenuItem>
            <MenuItem value={2}>남구</MenuItem>
            <MenuItem value={3}>동구</MenuItem>
            <MenuItem value={4}>북구</MenuItem>
            <MenuItem value={5}>서구</MenuItem>
          </Select>
        )
        else if(location === 'gyeonggi')
        return (
          <Select
            labelId="시군구"
            id="sigungu"
            value={props.sigungu}
            label="시도"
            onChange={handleChange}
          >
            <MenuItem value={1}>가평</MenuItem>
            <MenuItem value={2}>고양</MenuItem>
            <MenuItem value={3}>과천</MenuItem>
            <MenuItem value={4}>광명</MenuItem>
            <MenuItem value={5}>광주</MenuItem>
            <MenuItem value={6}>구리</MenuItem>
            <MenuItem value={7}>군포</MenuItem>
            <MenuItem value={8}>김포</MenuItem>
            <MenuItem value={9}>남양주</MenuItem>
            <MenuItem value={10}>동두천</MenuItem>
            <MenuItem value={11}>부천</MenuItem>
            <MenuItem value={12}>성남</MenuItem>
            <MenuItem value={13}>수원</MenuItem>
            <MenuItem value={14}>시흥</MenuItem>
            <MenuItem value={15}>안산</MenuItem>
            <MenuItem value={16}>안성</MenuItem>
            <MenuItem value={17}>안양</MenuItem>
            <MenuItem value={18}>양주</MenuItem>
            <MenuItem value={19}>양평</MenuItem>
            <MenuItem value={20}>여주</MenuItem>
            <MenuItem value={21}>연천</MenuItem>
            <MenuItem value={22}>오산</MenuItem>
            <MenuItem value={23}>용인</MenuItem>
            <MenuItem value={24}>의왕</MenuItem>
            <MenuItem value={25}>의정부</MenuItem>
            <MenuItem value={26}>이천</MenuItem>
            <MenuItem value={27}>파주</MenuItem>
            <MenuItem value={28}>평택</MenuItem>
            <MenuItem value={29}>포천</MenuItem>
            <MenuItem value={30}>하남</MenuItem>
            <MenuItem value={31}>화성</MenuItem>
          </Select>

        )
        else if(location === 'incheon')
        return (
          <Select
            labelId="시군구"
            id="sigungu"
            value={props.sigungu}
            label="시도"
            onChange={handleChange}
          >
            <MenuItem value={1}>강화</MenuItem>
            <MenuItem value={2}>계양</MenuItem>
            <MenuItem value={3}>미추홀</MenuItem>
            <MenuItem value={4}>남동</MenuItem>
            <MenuItem value={5}>동구</MenuItem>
            <MenuItem value={6}>부평</MenuItem>
            <MenuItem value={7}>서구</MenuItem>
            <MenuItem value={8}>연수</MenuItem>
            <MenuItem value={9}>옹진</MenuItem>
            <MenuItem value={10}>중구</MenuItem>
          </Select>

        )
        else if(location === 'jeonbuk')
        return (
          <Select
            labelId="시군구"
            id="sigungu"
            value={props.sigungu}
            label="시도"
            onChange={handleChange}
          >
            <MenuItem value={1}>고창</MenuItem>
            <MenuItem value={2}>군산</MenuItem>
            <MenuItem value={3}>김제</MenuItem>
            <MenuItem value={4}>남원</MenuItem>
            <MenuItem value={5}>무주</MenuItem>
            <MenuItem value={6}>부안</MenuItem>
            <MenuItem value={7}>순창</MenuItem>
            <MenuItem value={8}>완주</MenuItem>
            <MenuItem value={9}>익산</MenuItem>
            <MenuItem value={10}>임실</MenuItem>
            <MenuItem value={11}>장수</MenuItem>
            <MenuItem value={12}>전수</MenuItem>
            <MenuItem value={13}>정읍</MenuItem>
            <MenuItem value={14}>진안</MenuItem>
          </Select>

        )
        else if(location === 'busan')
        return (
          <Select
            labelId="시군구"
            id="sigungu"
            value={props.sigungu}
            label="시도"
            onChange={handleChange}
          >
            <MenuItem value={1}>강진</MenuItem>
            <MenuItem value={2}>고흥</MenuItem>
            <MenuItem value={3}>곡성</MenuItem>
            <MenuItem value={4}>광양</MenuItem>
            <MenuItem value={5}>구례</MenuItem>
            <MenuItem value={6}>나주</MenuItem>
            <MenuItem value={7}>담양</MenuItem>
            <MenuItem value={8}>목포</MenuItem>
            <MenuItem value={9}>무안</MenuItem>
            <MenuItem value={10}>보성</MenuItem>
            <MenuItem value={11}>순천</MenuItem>
            <MenuItem value={12}>신안</MenuItem>
            <MenuItem value={13}>여수</MenuItem>
            <MenuItem value={14}>영광</MenuItem>
            <MenuItem value={15}>영암</MenuItem>
            <MenuItem value={16}>완도</MenuItem>
            <MenuItem value={17}>장성</MenuItem>
            <MenuItem value={18}>장흥</MenuItem>
            <MenuItem value={19}>진도</MenuItem>
            <MenuItem value={20}>함평</MenuItem>
            <MenuItem value={21}>해남</MenuItem>
            <MenuItem value={22}>화순</MenuItem>
          </Select>

        )
        else if(location === 'kyeongbuk')
        return (
          <Select
            labelId="시군구"
            id="sigungu"
            value={props.sigungu}
            label="시도"
            onChange={handleChange}
          >
            <MenuItem value={2}>경주</MenuItem>
            <MenuItem value={11}>안동</MenuItem>
            <MenuItem value={17}>울릉</MenuItem>
            <MenuItem value={23}>포항</MenuItem>
            <MenuItem value={1}>경산</MenuItem>
            <MenuItem value={3}>고령</MenuItem>
            <MenuItem value={4}>구미</MenuItem>
            <MenuItem value={5}>군위</MenuItem>
            <MenuItem value={6}>김천</MenuItem>
            <MenuItem value={7}>문경</MenuItem>
            <MenuItem value={8}>봉화</MenuItem>
            <MenuItem value={9}>상주</MenuItem>
            <MenuItem value={10}>성주</MenuItem>
            <MenuItem value={12}>영덕</MenuItem>
            <MenuItem value={13}>영양</MenuItem>
            <MenuItem value={14}>영주</MenuItem>
            <MenuItem value={15}>영천</MenuItem>
            <MenuItem value={16}>예천</MenuItem>
            <MenuItem value={18}>울진</MenuItem>
            <MenuItem value={19}>의성</MenuItem>
            <MenuItem value={20}>청도</MenuItem>
            <MenuItem value={21}>청송</MenuItem>
            <MenuItem value={22}>칠곡</MenuItem>
          </Select>
          )
        else if(location === 'kyeongnam')
        return (
          <Select
            labelId="시군구"
            id="sigungu"
            value={props.sigungu}
            label="시도"
            onChange={handleChange}
          >
            <MenuItem value={15}>통영</MenuItem>
            <MenuItem value={16}>하동</MenuItem>
            <MenuItem value={1}>거제</MenuItem>
            <MenuItem value={5}>남해</MenuItem>
            <MenuItem value={2}>거창</MenuItem>
            <MenuItem value={3}>고성</MenuItem>
            <MenuItem value={4}>김해</MenuItem>
            <MenuItem value={6}>마산</MenuItem>
            <MenuItem value={7}>밀양</MenuItem>
            <MenuItem value={8}>사천</MenuItem>
            <MenuItem value={9}>산청</MenuItem>
            <MenuItem value={10}>양산</MenuItem>
            <MenuItem value={11}>의령</MenuItem>
            <MenuItem value={12}>진주</MenuItem>
            <MenuItem value={13}>진해</MenuItem>
            <MenuItem value={14}>창녕</MenuItem>
            <MenuItem value={17}>함안</MenuItem>
            <MenuItem value={18}>함양</MenuItem>
            <MenuItem value={19}>합천</MenuItem>
          </Select>

        )
        else if(location === 'sejong')
        return (
          <Select
            labelId="시군구"
            id="sigungu"
            value={props.sigungu}
            label="시도"
            onChange={handleChange}
          >
            <MenuItem value={1}>세종</MenuItem>
          </Select>

        )
        else if(location === 'ulsan')
        return (
          <Select
            labelId="시군구"
            id="sigungu"
            value={props.sigungu}
            label="시도"
            onChange={handleChange}
          >
            <MenuItem value={1}>중구</MenuItem>
            <MenuItem value={2}>남구</MenuItem>
            <MenuItem value={3}>동구</MenuItem>
            <MenuItem value={4}>북구</MenuItem>
            <MenuItem value={5}>울주</MenuItem>
          </Select>

        )
        else  
        return (
          <Select
          labelId="시군구"
          id="sigungu"
          value={props.sigungu}
          label="시도"
          onChange={handleChange}
        >
          <MenuItem value={1}>시군구</MenuItem>
        </Select>
        )
      
  };

  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="sido">시군구</InputLabel>
        {menuMap(location)}
      </FormControl>
    </Box>
  );
}

