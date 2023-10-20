import React, { useState } from "react";
import styled from "styled-components";
import bannerimage from "../assets/img/bannerimage.webp";
import yandex from "../assets/img/Yandex.jpg";
import smm from "../assets/img/smm.jpg";
import google from "../assets/img/Google.jpg";
import yandexx from "../assets/img/Yandexx.jpg";
import smmm from "../assets/img/smmm.jpg";
import googlee from "../assets/img/Googlee.jpg";

import { motion } from "framer-motion";
import Registereform from "./registereform";
import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <Container>
      {/* <Wave/> */}
      <div className="title">
        <motion.h3 className="courses" whileHover={{ scale: 1.05 }}>
          "Men NIMALARNI o'rgana olaman"
        </motion.h3>
        <motion.h2 className="pretitle" whileHover={{ scale: 1.05 }}>
          Ushbu kurslar sizni Raqamli Marketingda USTUNLIK qila olishingiz uchun
          Amaliy Ko'nikmalar bilan ta'minlaydi !
        </motion.h2>
      </div>
      <div className="cards">
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <img src={yandex} alt="a" className="cardImage" />
          <div className="summary">
            <h1>Yandex Direct</h1>
            <p>
              O'rta Osiyo davlatlarida 61.04% bozor ulushiga ega Yandexning
              Monetizatsiya tizimida reklama kompaniyalarini yarating !
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              // onClick={toggleModal}
            >
              <Link to={"/videPage"}>subscribe</Link>
            </motion.button>
          </div>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <img src={smm} alt="a" className="cardImage" />
          <div className="summary">
            <h1>Smm</h1>
            <p>
              SMM "STEREOTIP"lariga yechim ! Ijtimoiy Media Marketingni
              boshlang'ich darajadan bosqichma-bosqich o'rganing !
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              // onClick={toggleModal}
            >
              subscribe
            </motion.button>
          </div>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <img src={google} alt="a" className="cardImage" />
          <div className="summary">
            <h1>Google Ads</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              aspernatur ullam expedita tempora quod porro magni odio error,
              doloribus iure!
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              // onClick={toggleModal}
            >
              subscribe
            </motion.button>
          </div>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <img src={yandexx} alt="a" className="cardImage" />
          <div className="summary">
            <h1>Yandex Direct</h1>
            <p>
              O'rta Osiyo davlatlarida 61.04% bozor ulushiga ega Yandexning
              Monetizatsiya tizimida reklama kompaniyalarini yarating !
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              // onClick={toggleModal}
            >
              subscribe
            </motion.button>
          </div>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <img src={smmm} alt="a" className="cardImage" />
          <div className="summary">
            <h1>SMM</h1>
            <p>
              SMM "STEREOTIP"lariga yechim ! Ijtimoiy Media Marketingni
              boshlang'ich darajadan bosqichma-bosqich o'rganing !
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              // onClick={toggleModal}
            >
              subscribe
            </motion.button>
          </div>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <img src={googlee} alt="a" className="cardImage" />
          <div className="summary">
            <h1>Google Ads</h1>
            <p>
              Mahsulot Mijozni emas, balki Mijoz Mahsulotni qidiradigan
              Googlening Eng Katta Monetizatsiya tizimida reklama
              kompaniyalarini yarating !
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #181b21;
  width: 100%;
  padding-bottom: 50px;
  .card {
    width: 32%;
    height: 450px;
    background-color: #000000;
    border-radius: 12px;
    padding: 10px;
  }
  .cards {
    width: 90%;
    margin: 0 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }
  .cardImage {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }
  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 10px; */
  }
  .summary p {
    text-align: center;
    color: #fff;
  }
  .summary h1 {
    font-size: 18px;
    margin: 5px;
    color: red;
    font-weight: 500;
  }
  button {
    padding: 0 10px;
    margin: 10px;
    width: 100px;
    height: 30px;
    border-radius: 12px;
    border: none;
    background-color: #11101d;
    color: #fff;
    cursor: pointer;
  }
  button:hover {
    background-color: #6d6d6d;
    color: #11101d;
  }
  .courses {
    font-weight: 800;
    font-size: 3rem;
    /* margin: 3rem 0; */
    color: #fff;
    text-align: center;
    margin: 20px;
  }
  .title {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 120px;
    width: 70%;
    margin: 0 15%;
    padding: 40px 0;
    align-items: center;
    /* background-color: red; */
    color: #fff;
  }
  .pretitle {
    /* background-color: black; */
    font-size: 2rem;
    text-align: center;
    margin: 40px 0;
    color: #fff;
  }
  .allcourses {
    background-color: #11101d;
    color: #fff;
    border-radius: 12px;
    padding: 15px;
    margin: 30px 0;
  }
  .allcourses:hover {
    background-color: #6d6d6d;
    color: #11101d;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    margin: 0;
    /* background-color: red; */
    width: 100%;
    .circle1 {
      top: 1300px;
      left: 200px;
    }
    .circle {
      top: 800px;
      left: 0px;
    }
    .card {
      width: 200px;
      height: 250px;
    }
    img {
      width: 200px;
      height: 100px;
      padding: 0;
    }
    .summary p {
      font-size: 12px;
    }
  }
  .startButton {
    margin: 20px 0;
    /* background-color: red; */
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .start {
    height: 100px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    /* border: 1px solid red; */
    background-color: #11101d;
    color: #fff;
  }
`;
