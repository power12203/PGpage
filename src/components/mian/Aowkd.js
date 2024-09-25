import React from 'react';
import www from '../../assets/footerImg/icon_quick_charge.gif'
import fff from '../../assets/footerImg/icon_quick_floor.gif'
import qqq from '../../assets/footerImg/icon_quick_map.gif'
import eee from '../../assets/footerImg/icon_quick_time.gif'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import test from '../../testIamg/제목-없음-2.png'



const TestUl = styled.ul`
    display: flex;
    list-style: none;
`
const TestImg = styled.img`
    width: 60px;
    height: 100px;
`

const Aowkd = () => {
    return (
        <div >
            <TestUl>
                <li><Link><TestImg src={www}/></Link></li>
                <li><Link><TestImg src={fff}/></Link></li>
                <li><Link to={"/test"}><TestImg src={qqq}/></Link></li>
                <li><Link><TestImg src={eee}/></Link></li>
            </TestUl>
            <Link>
            <img src={test} style={{width:"350px",height:"250px"}}/>
            </Link>
        </div>
    );
};

export default Aowkd;