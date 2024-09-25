import React, { useEffect } from 'react';
import Header from '../../common/Header';
import './Gps.css'; // 필요한 CSS 파일을 별도로 관리합니다.
import Footer from '../../common/Footer';
import qqq from '../../assets/footerImg/img_sub_quick_charge.gif'
import www from '../../assets/footerImg/img_sub_quick_floor.gif'
import eee from '../../assets/footerImg/img_sub_quick_map.gif'
import rrr from '../../assets/footerImg/img_sub_quick_time.gif'
import ddd from '../../assets/footerImg/img_sub_quick_top.jpg'
import { Link } from 'react-router-dom';

const Gps = () => {

  useEffect(() => {
    const quickMenu = document.getElementById('quick_menu');
    const quickTop = 202;
    const quickLeft = 535;
    const quickSpeed = 1000;

    const adjustQuickMenuPosition = () => {
      quickMenu.style.left = `${document.body.clientWidth / 2 + quickLeft}px`;
    };

    quickMenu.style.top = `${quickTop}px`;
    adjustQuickMenuPosition();
    quickMenu.style.display = '';

    window.addEventListener('resize', adjustQuickMenuPosition);

    window.addEventListener('scroll', () => {
      quickMenu.style.transition = `top ${quickSpeed}ms ease`;
      quickMenu.style.top = `${window.scrollY + quickTop}px`;
    });

    return () => {
      window.removeEventListener('resize', adjustQuickMenuPosition);
    };
  }, []);

  return (
    <>
    <Header/>
    <div id="wrap">
      <div className="conWrap">
        <div className="submenu">
          <div id="subNav">
            <h2 className="subTitle">회사 소개</h2>
            <ul>
              <li><a href="../company/message.html">인사말</a></li>
              <li><a href="../aboard/list.html?a_tname=aboard_list_notice">공지사항</a></li>
              <li><a href="../company/floor.html">층별안내</a></li>
              <li><a href="../company/map.html" className="on">오시는 길</a></li>
            </ul>
          </div>
        </div>

        <div id="contents">
          <h1 className="title">오시는 길</h1>
          <div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.228750558698!2d127.09906559999999!3d37.501289099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5bcfa8d4707%3A0x611382afd9f04ec7!2z7ISc7Jq47Yq567OE7IS87ZWY6rWQIDI0NC0z!5e0!3m2!1sko!2skr!4v1692266927144!5m2!1sko!2skr" 
              width="825" height="460" frameBorder="0" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          
          <div className="mapBx">
            <ul>
              <li className="mapAdd">주소</li>
              <li>서울특별시 송파구 석촌동 244-3</li>
            </ul>
            <ul>
              <li className="mapTel">연락처</li>
              <li>Tel :02-1599-7401</li>
            </ul>
            <ul>
              <li className="mapBus">버스</li>
              <li>
                <p><strong>일반버스</strong></p>
                <p>156, 401, 414, 414-1, 521, 618, 650, 805, 808, 814, 937, 980, 동구3, 팔공1, 가창1, 북구3, 순환2-1</p>
                <p className="pdTop15"><strong>좌석버스</strong></p>
                <p>708, 급행1</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="quick_menu" style={{ position: 'absolute', top: '202px', left: '1486.5px' }}>
        {/* <img src={ddd} alt="Quick Menu Top" style={{width:"104px",height:"44px"}} /> */}
        <div className="subQuickBx">
          <ul>
            <li><Link href="../guide/charge.html"><img src={qqq} alt="Charge"  style={{width:"60px", height:"58px"}}/></Link></li>
            <li><Link href="../guide/time.html"><img src={www} alt="Time"  style={{width:"60px", height:"58px"}}/></Link></li>
            <li><Link to={"/test"}><img src={eee} alt="Floor Guide"  style={{width:"60px", height:"58px"}}/></Link></li>
            <li><Link href="../company/map.html"><img src={rrr} alt="Map"  style={{width:"60px", height:"58px"}}/></Link></li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Gps;

