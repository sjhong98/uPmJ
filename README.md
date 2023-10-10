<img width="800" alt="logo" src="https://github.com/sjhong98/uPmJ/assets/90092013/64915d0e-18fd-4da8-a000-28be5c2776c1">

<br/><br/>

## 목차
1. [프로젝트 개요](#프로젝트개요)<br/>
2. [아이디어 소개](#아이디어소개)<br/>
3. [기술 스택](#기술스택)<br/>
4. [주요 기능](#주요기능)<br/>
1). [카카오 로그인](#카카오로그인)<br/>
2). [여행 그룹 생성 및 참여](#여행그룹생성및참여)<br/>
3). [여행 계획 세우기](#여행계획세우기)<br/>
4). [지도에서 여행 동선 확인](#지도에서여행동선확인)<br/>
5). [여행지 정보 검색](#여행지정보검색)<br/>
6). [새로운 여행지 검색 및 추가](#새로운여행지검색및추가)<br/>
7). [socket.io 실시간 통신](#socket.io)<br/>



<br/>

<a name='프로젝트개요' />

## 1. 프로젝트 개요

<br/><br/>

'넌 P해 난 J해'(이하 UPMJ)는 MBTI가 J인 계획형 인간들이 여행 계획을 쉽고 편하게 세울 수 있도록 만들어진 서비스입니다. <br/>
레고 블록 쌓듯이 여행 계획을 세우고, 지도 상에서 여행 동선을 직접 확인할 수 있습니다! <br/>
물론, 여행은 친구들과 함께해야 제맛이겠죠. 여러분의 친구들과 함께 실시간 계획을 세워보세요!

<br/>

<a name='아이디어소개' />

## 2. 아이디어 소개

UPMJ는 여행을 갈 때마다 계획을 세우는 것이 너무 어렵다는 불편함에서 그 아이디어가 시작되었습니다. <br/>

여행 계획을 세우기 위해서는, 우선 장소 추천을 받기 위해 포탈 사이트에 접속하여 가볼만한곳을 검색해보고, 위치를 파악하기 위해 지도에 검색하고, 이를 핀을 찍어 저장한 뒤, 여행 동선을 메모장에 기록하여 이를 공유합니다. <br/><br/>
이렇게 계획 한번 세우는데 너무 많은 과정이 필요하다보니, 여행가기 전부터 힘이 빠지는 느낌입니다.<br/>

그렇다면 한 곳에서 이러한 일들을 동시에 수행할 수 있다면 어떨까요?<br/>
여행 계획을 함께 쉽고 편하게 세울 수 있다면, 여행의 퀄리티가 높아지는 것 뿐만 아니라, 모든 멤버들의 만족도도 올라갈 것입니다.<br/>

그래서 저희는 여행 계획을 세우는데에 필요한 기능들을 한데 모은 서비스를 개발하게 되었습니다.<br/>

<a name='기술스택' />

## 3. 기술 스택

### Environment
<img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/github actions-F05032?style=for-the-badge&logo=githubactions&logoColor=white">

### Configuration
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### FrontEnd
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/kakao-FFCD00?style=for-the-badge&logo=kakao&logoColor=white"> <img src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white"> <img src="https://img.shields.io/badge/greensock-88CE02?style=for-the-badge&logo=greensock&logoColor=white"> 

### Communication
<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"> 

<a name='주요기능' />

## 4. 주요 기능
<br/>

<a name='카카오로그인' />

### 1) 카카오 소셜로그인
![ezgif com-video-to-gif](https://github.com/sjhong98/uPmJ/assets/90092013/4e4d5d39-cb11-48c1-8ec3-95b2f7acac2b)

<br/><br/><br/>

<a name='여행그룹생성및참여' />

### 2) 여행 그룹 생성 및 참여
![ezgif com-video-to-gif (1)](https://github.com/sjhong98/uPmJ/assets/90092013/290455b5-89fd-40b0-b14e-c9ded2b07e13)

<br/>
새로운 여행을 추가하여 그룹을 생성하거나, 생성된 그룹에 코드를 통해 참여 가능. 

기존 그룹 참여 시, 데이터베이스에서 해당 그룹의 여행 일정 받아오도록 함
<br/><br/><br/>

<a name='여행계획세우기' />

### 3) 여행 계획 세우기
![ezgif com-video-to-gif (2)](https://github.com/sjhong98/uPmJ/assets/90092013/2b76b266-ca24-4a8e-8043-9bb04266daba)

<br/>.
공공데이터 API를 활용하여 지역별 여행지 정보를 카드 형식으로 가져옴. 여행지 카드는 최대 4개까지 추가 가능한 day별 칼럼 상에서 드래그앤드롭 가능. (react-beautiful-dnd library 사용) 이를 통해 여행 계획을 자신이 원하는대로 블록 맞추듯 만들 수 있음.
<br/><br/><br/>

<a name='지도에서여행동선확인' />

### 4) 지도에서 여행 동선 확인
![ezgif com-video-to-gif (3)](https://github.com/sjhong98/uPmJ/assets/90092013/dd191d8e-7fdc-4385-8443-e16ea48ca927)

<br/>
카카오맵 API를 활용하여, 여행지 카드 클릭 시 mapBox에서 여행지의 위치 정보를 표시함. 또한 지도 상에서 day별로 여행지들을 각기 다른 색의 선으로 순서대로 연결하여, 여행 동선을 확인할 수 있도록 함.
<br/><br/><br/>

<a name='여행지정보검색' />

### 5) 여행지 정보 검색
![ezgif com-video-to-gif (4)](https://github.com/sjhong98/uPmJ/assets/90092013/c4b06ff4-c37c-4abb-8491-4f92cebcd2d2)

<br/>
카카오맵 검색 API를 활용하여, 여행지 카드 클릭 시 해당 여행지의 정보를 searchBox에서 띄워줌.
<br/><br/><br/>

<a name='새로운여행지검색및추가' />

### 6) 새로운 여행지 검색 및 추가
![ezgif com-video-to-gif (5)](https://github.com/sjhong98/uPmJ/assets/90092013/aaf0647a-26ef-4d8d-84cf-f168557bbc30)

<br/>
공공데이터 API로 제공되지 않는 장소도 검색을 통해 찾을 수 있으며, 여행지 카드로 만들 수도 있음.
<br/><br/><br/>

<a name='socket.io' />

### 7) socket.io 실시간 통신

### 일정 공유

![실시간공유](https://github.com/sjhong98/uPmJ/assets/90092013/c19d4d2a-7f3b-4724-b9b4-d586d793e12f)

<br/>
socket.io의 room 기능을 이용하여, 그룹 멤버들은 드래그앤드롭을 통해 변경되는 일정 내용을 실시간으로 공유할 수 있음.

![커서공유](https://github.com/sjhong98/uPmJ/assets/90092013/4dc67d8f-08de-4ebd-ae62-3761f57337a7)

또한 멤버들의 커서 위치 정보를 표시하여 상대방이 어떤 활동을 하고 있는지 확인이 가능함.
<br/><br/><br/>

### 채팅

![실시간채팅](https://github.com/sjhong98/uPmJ/assets/90092013/ae77b0da-c03d-4da3-90aa-fee433857536)

<br/>
그룹 멤버들끼리 채팅 기능을 사용할 수 있음.
<br/><br/><br/>













