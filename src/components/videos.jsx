import React from "react";
import styled from "styled-components";

export default function Videos() {
  return (
    <Container>
      <h1 className="title">READY TO ESCAPE? <span>JOIN NOW</span></h1>
      <p className="summary">
        Our modern, practical approach to teaching has led to tens of thousands
        of our students generating money from anywhere in the world.
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
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
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
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
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
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
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
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
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
    color: #FF3131;
    font-size: 50px;
  }
  .summary{
    text-align: center;
    color: #fff;
    font-size: 25px;
    width: 70%;
    margin: 30px 15%;

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
`;
