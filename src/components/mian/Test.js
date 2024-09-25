import React from 'react';
import NoticeBoard from './NoticeBoard ';
import Header from '../../common/Header';
import { Link } from 'react-router-dom';
import qosj from '../../assets/footerImg/(1000pixel)NC-8000P대문용-1.jpg'
import styled from 'styled-components';
import Aowkd from './Aowkd';

const TsetDIV = styled.div`
 width: 60%;
 margin: auto;
 height: 500px;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
`
const Test = () => {
  const notices = [
    "영업시간 변경 안내: 9:00 AM - 8:00 PM",
    "여름 세일 진행 중! 최대 50% 할인",
    "신제품 입고: 새로운 가을 컬렉션을 만나보세요!",
  ];

  return (
    <>
    <TsetDIV>
      <div>
      <NoticeBoard notices={notices} />
      </div>
      <div style={{margin:"10px"}}>
      <Link to={"https://jncinvescon.modoo.at/?pc=1"}>
        <img src={qosj} alt='asd'style={{height:"400px",width:"400px"}}/>
      </Link>
      </div>
      <div>
        <Aowkd/>
      </div>
    </TsetDIV>
    </>
  );
};

export default Test;
