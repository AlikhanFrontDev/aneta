import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MyCarousel from "./carusel";
import background from "../assets/img/background.jpg";
import imageOne from "../assets/img/bannerCaruse/b1.jpg";
import imageTwo from "../assets/img/bannerCaruse/b2.jpg";
import imageThree from "../assets/img/bannerCaruse/Google.jpg";

export default function Banner() {
  const items = [
    {
      src: `${imageOne}`,
      alt: "Image 1",
    },
    {
      src: `${imageTwo}`,
      alt: "Image 2",
    },
    {
      src: `${imageThree}`,
      alt: "Image 3",
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
          <h1 className="theme">
            <span>PRO DIGITAL</span> COURSE
          </h1>
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
  .banimage {
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
    font-size: 4rem;
    color: #fff;
    font-weight: 700;
    /* letter-spacing: px; */
  }
  .theme span {
    color: #fff;
    background: rgb(255, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(255, 0, 0, 1) 0%,
      rgba(255, 0, 0, 0.40388655462184875) 59%,
      rgba(255, 0, 0, 0) 90%,
      rgba(255, 255, 255, 0) 100%
    );
    font-size: 4rem;
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
  @media only screen and (max-width: 992px) {
    height: 40vh;
    .image {
      /* height: 500px; */
      width: 100%;
      object-fit: contain;
    }
    .container {
      width: 90%;
    }
    .summary {
      margin-top: 20px;
      font-size: 30px;
      text-align: center;
    }
    .banner {
      flex-direction: column;
      /* margin: 0; */
      /* padding: 0; */
      height: 20vh;
      justify-content: space-between;
    }
    .theme {
      font-size: 40px;
      text-align: center;
      margin-top: 20px;
      font-size: 2rem;
    }
    .theme span{
      font-size: 45px;
    }
    .banimage {
      height: 100vh;
      object-fit: cover;
      width: 100%;
    }
    .img {
      width: 100%;
      /* height: 00px; */
    }
    .image {
      /* width: 100%; */
      height: 300px;
      width: 90%;
      margin: 0 5%;
    }
  }
  @media screen and (max-width: 768px) {
    .content {
      padding: 10px;
    }

    .textContainer {
      padding: 10px;
    }
  }
`;
