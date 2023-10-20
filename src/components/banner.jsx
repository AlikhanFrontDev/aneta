import React, { useState } from "react";
import styled from "styled-components";
import imgBanner from "../assets/img/banner.png";
import bannerimage from "../assets/img/bannerimage.webp";
import { motion } from "framer-motion";
import Registereform from "./registereform";
import "../toggle.css";
import MyCarousel from "./carusel";
import background from "../assets/img/background.jpg";

export default function Banner() {
  const items = [
    {
      src: `${bannerimage}`,
      alt: "Image 1",
      caption: "First Slide",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Oditprovident",
    },
    {
      src: `${bannerimage}`,
      alt: "Image 2",
      caption: "Second Slide",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Oditprovident",
    },
    {
      src: `${bannerimage}`,
      alt: "Image 3",
      caption: "Third Slide",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Oditprovident",
    },
  ];
  return (
    <Baanner>
      <img src={background} alt="" className="banimage" />
      <div className="banner">
        <motion.div
          className="container"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="theme">PRO DIGITAL COURSE</h1>
          {/* <h1 className="moto">Social Media Marketing</h1> */}
          {/* <h1 className="moto2">Matvatsa ;</h1> */}
          <h3 className="summary">
            Bu platforma sizning Raqamli Marketing ehtiyojlaringiz uchun Doimiy
            yechimni taqdim qiladi. SMMdan tortib Raqamli Marketing
            boshqaruvigacha !
          </h3>
        </motion.div>
        <motion.div
          className="img"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <MyCarousel
            items={items}
            // src={imgBanner}
            alt=""
            className="image"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>
      </div>
    </Baanner>
  );
}

const Baanner = styled.div`
  background-color: #000000b0;
  /* background-color: red; */
  /* background-image: url(${background}); */
  /* opacity: 0.5; */
  width: 100%;
  height: 90vh;
  .banimage{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
  }
  .banner {
    display: flex;
    width: 90%;
    margin: 0 5%;
    justify-content: space-evenly;
    align-items: center;
    height: 87vh;
    /* background-color: red; */
  }
  .summary {
    /* font-size: 2rem; */
    letter-spacing: 1px;
    color: #fff;
    font-weight: 100;
  }
  .img {
    width: 600px;
    /* height: 600px; */
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .img:hover {
    border-color: #ffffff;
  }
  .image {
    width: 650px;
    border-radius: 12px;
    height: 450px;
    /* background-color: red; */
  }
  .container {
    /* background-color: red; */
    width: 50%;
    display: flex;
    flex-direction: column;
    /* align-items: center;  */
    justify-content: center;
    padding: 20px;
  }
  .theme {
    font-size: 3rem;
    color: #fff;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  .moto {
    font-size: 3rem;
    color: #ffffff;
  }
  .moto2 {
    font-size: 3rem;
    color: #11101d;
    text-decoration: line-through;
  }
  .button {
    height: 40px;
    width: 50%;
    padding: 10px;
    margin-top: 20px;
    border: none;
    border-radius: 12px;
    background-color: #11101d;
    color: #ffffff;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    height: 60vh;
    .img {
      width: 300px;
      height: 300px;
    }
    .image {
      width: 300px;
    }
    .banner {
      height: 65vh;
    }
  }
`;
