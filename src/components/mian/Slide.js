import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
const Slidebox = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px auto;
  margin-top: 5px;
  .slick-dots {
    color: white;
    position: absolute;
    bottom: 30px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 10px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: "•";
    text-align: center;
    opacity: 0.5;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: black;
  }
  .slick-prev,
  .slick-next {
    position: absolute; /* 버튼을 절대 위치로 설정 */
    top: 50%; /* 세로로 가운데 정렬 */
    transform: translateY(-50%); /* 세로 정렬을 위해 Y 축으로 이동 */
    background: none; /* 배경 제거 */
    border: none; /* 테두리 제거 */
    cursor: pointer; /* 마우스 커서 포인터로 변경 */
    z-index: 1000; /* z-index 설정 */
    width: 40px; /* 버튼 너비 조정 */
    height: 40px; /* 버튼 높이 조정 */
  }

  .slick-prev {
    left: 100px; /* 왼쪽 버튼 위치 조정 */
  }

  .slick-next {
    right: 100px; /* 오른쪽 버튼 위치 조정 */
  }

  .slick-prev:before,
  .slick-next:before {
    position: relative;
    font-family: "slick";
    line-height: 1;
    font-size: 60px;
    /* opacity: 0; */
    transition: opacity 0.5s linear;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev:hover:before,
  .slick-next:hover:before {
    opacity: 1;
    color: white;
  }
`;

const images = require.context("../../testIamg", false, /\.(png|jpe?g|svg)$/);
const keys = images.keys(); // filename

const imgList = keys.map((key) => images(key));
// console.log(imgList);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000, // Adjust as needed
};
const Img = styled.img`
  width: 100%;
  height: 479px;
  /* border: 1px solid #000; */
  display: block;
  margin-left: 0;
`;
const Slide = () => {
  return (
    <Slidebox className="main side">
      <Slider {...settings}>
        {imgList.map((img) => (
          <div>
            <Img src={img} alt="" />
          </div>
        ))}
      </Slider>
    </Slidebox>
  );
};

export default Slide;
