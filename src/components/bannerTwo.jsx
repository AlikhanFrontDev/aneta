import React from "react";
import styled from "styled-components";
import image from "../assets/img/bannerimage.webp";
import { motion } from "framer-motion";

export default function BannerTwo() {
  return (
    <Container>
      <motion.h1 className="title" whileHover={{ scale: 1.05 }}>
        Pro Digital platformasiga qo'shiling va Hoziroq Barcha Kurslarga ega
        bo'ling!
      </motion.h1>
      <div className="boxes">
        <img src={image} alt="" />
        <div className="box">
          <h1 className="title2">
            Bo'sh va'dalarni emas, balki <span className="red">HAQIQIY KO'NIKMALARNI</span> taqdim etadigan
            Marketing kurslariga sarmoya kiriting.
          </h1>
          <p>Platforma kimlar uchun to'gri keladi?</p>
          <div className="options">Sohaga endi kirganlar uchun</div>
          <div className="options">O'rta darajadagi mutaxassislar uchun</div>
          <div className="options">
            Ko'nikmalarini mustahkamlashni xohlaydigan Professionallar uchun
          </div>
        </div>
      </div>
      <div className="button">Hoziroq boshlang</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: #0b0e13;
  height: 100vh;
  padding-top: 50px;
  .red{
    color: red;
    font-size: 26px;
  }
  .button {
    height: 80px;
    width: 400px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
  }
  .boxes {
    display: flex;
    width: 86%;
    /* background-color: red; */
    margin: 0 7%;
  }
  .box {
    text-align: center;
    padding: 0 20px;
    color: #fff;
  }
  .title2{
    font-size: 26px;
    font-weight: 600;
  }
  .box p {
    font-size: x-large;
    color: #fff;
    margin: 14px 0;
  }
  .options {
    /* text-align: start; */
    background-color: #181b21;
    padding: 20px;
    border-radius: 12px;
    margin: 20px 0;
    color: #999;
    font-size: 22px;
  }
  .title {
    text-align: center;
    color: #fff;
    font-weight: 700;
    padding: 20px 0;
    width: 60%;
  }
  img {
    width: 600px;
    height: 450px;
    object-fit: cover;
    border-radius: 12px;
  }
  @media only screen and (max-width: 768px) {
    height: 150vh;
    .boxes {
    width: 100%;
    flex-direction: column;
    }
    img{
      width: 90%;
      margin: 0 5%;
    }
    .title{
      font-size: 2rem;
      width: 80%;
    }
    .title2{
      margin: 30px 0;
    }
  }
`
