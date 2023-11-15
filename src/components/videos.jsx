import React from "react";
import styled from "styled-components";

export default function Videos() {
  return (
    <Container>
      <h1 className="title">
        {" "}
        <span>TAN OLINISHNI</span> istaysizmi? Yechim -
        <span> Pro Digital !</span>
      </h1>
      <p className="summary">
        Muvaffaqiyatli Yo'lingizni Pro Digital o'quvchilari kabi yarating !{" "}
        <span>O'Z MATRITSANGIZNI BUZIB CHIQING !</span>
      </p>
      <div className="boxes">
        <div className="box">
          <div className="text">
            <h1>4 OYDA 20+ LOYIHALAR</h1>
            <h2>Javohir Agzamov</h2>
            <p>
              Ushbu videoda shogirdim Javohirning targetdagi muvaffaqiyat
              yo'lini ko'rishingiz mumkin. Sohaga kirishi, ilk loyihalarga
              qanday natijalar ko'rsatilinganligi va 40.000$lik loyiha haqida
              suhbatlashdik.
            </p>
          </div>
          <div className="video">
            {/* <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/eKFTKizrLGM?=1&mute=1"
            ></iframe> */}
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #0b0e13;
  min-height: 100vh;
  padding: 20px 0;
  span {
    color: red;
    font-size: 50px;
  }
  .summary {
    text-align: center;
    color: #fff;
    font-size: 25px;
    width: 70%;
    margin: 30px 15%;
  }
  .summary span {
    font-size: 25px;
  }
  .title {
    font-weight: 700;
    font-size: 50px;
    text-align: center;
    padding: 20px;
    color: #fff;
    margin: 20px;
  }
  .boxes {
  }
  .box {
    background-color: #181b21;
    color: #fff;
    display: flex;
    align-items: center;
    /* row-gap: 20px; */
    width: 90%;
    margin: 20px 5%;
    border-radius: 12px;
    /* height: 400px; */
    padding: 20px;
  }
  .text {
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    height: 350px;
    padding: 20px;
    color: #fff;
    justify-content: space-evenly;
  }
  iframe {
    height: 360px;
    width: 700px;
    margin: 0;
    border-radius: 12px;
  }

  @media only screen and (max-width: 768px) {
    video {
      width: 100%;
    }
  }
`;
