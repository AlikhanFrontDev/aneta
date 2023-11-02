import React from "react";
import styled from "styled-components";

export default function Videos() {
  return (
    <Container>
      <h1 className="title"> <span>TAN OLINISHNI</span> istaysizmi? Yechim -<span> Pro Digital !</span></h1>
      <p className="summary">
      Muvaffaqiyatli Yo'lingizni Pro Digital o'quvchilari kabi yarating ! <span>O'Z MATRITSANGIZNI BUZIB CHIQING !</span> 
      </p>
      <div className="boxes">
        <div className="box">
          <div className="text">
            <h1>Business Mastery</h1>
            <h2>New revenue:$200k/month</h2>
            <p>
              Nox had $3,000 to his name when he joined The Real World... He now
              generates $200,000/month as a business consultant Nox had $3,000
              to his name when he joined The Real World... He now generates
              $200,000/month as a business consultant
            </p>
          </div>
          <div className="video">
            <video
              // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              controls
            />
          </div>
        </div>
        <div className="box">
          <div className="text">
            <h1>Business Mastery</h1>
            <h2>New revenue:$200k/month</h2>
            <p>
              Nox had $3,000 to his name when he joined The Real World... He now
              generates $200,000/month as a business consultant Nox had $3,000
              to his name when he joined The Real World... He now generates
              $200,000/month as a business consultant
            </p>
          </div>
          <div className="video">
            <video
              // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              controls
            />
          </div>
        </div>
        <div className="box">
          <div className="text">
            <h1>Business Mastery</h1>
            <h2>New revenue:$200k/month</h2>
            <p>
              Nox had $3,000 to his name when he joined The Real World... He now
              generates $200,000/month as a business consultant Nox had $3,000
              to his name when he joined The Real World... He now generates
              $200,000/month as a business consultant
            </p>
          </div>
          <div className="video">
            <video
              // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              controls
            />
          </div>
        </div>
        <div className="box">
          <div className="text">
            <h1>Business Mastery</h1>
            <h2>New revenue:$200k/month</h2>
            <p>
              Nox had $3,000 to his name when he joined The Real World... He now
              generates $200,000/month as a business consultant Nox had $3,000
              to his name when he joined The Real World... He now generates
              $200,000/month as a business consultant
            </p>
          </div>
          <div className="video">
            <video
              // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              controls
            />
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
  span{
    color: red;
    font-size: 50px;
  }
  .summary{
    text-align: center;
    color: #fff;
    font-size: 25px;
    width: 70%;
    margin: 30px 15%;
  }
  .summary span{
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
  video {
    height: 360px;
    margin: 0;
    border-radius: 12px;
  }

  @media only screen and (max-width: 767px) {
  video {
    width: 100%;
  }
}
`;
