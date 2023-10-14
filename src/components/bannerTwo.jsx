import React from "react";
import styled from "styled-components";
import image from "../assets/img/bannerimage.webp";
import { motion } from "framer-motion";


export default function BannerTwo() {
  return (
    <Container>
      <motion.h1 className="title" whileHover={{ scale: 1.05 }}>YOU WILL GET ACCESS TO</motion.h1>
      <div className="boxes">
        <img src={image} alt="" />
        <div className="box">
          <h1>Step-by-step learning</h1>
          <p>
            You will get access to 100+ video courses and well-structured
            tutorials covering everything from the fundamentals of modern
            business to niche money-making strategies.
          </p>
          <div className="options">
            Easy-to-follow program for financial success
          </div>
          <div className="options">Quickly learn new high income skills</div>
          <div className="options">Hyper advanced learning application</div>
        </div>
      </div>
      <div className="button">Join Now</div>
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
  .button{
    height: 80px;
    width: 400px;
    background-color: #FF3131;
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
  .box p {
    font-size: x-large;
    color: #fff;
    margin: 14px 0;
  }
  .options {
    background-color: #181b21;
    padding: 20px;
    border-radius: 12px;
    margin: 20px 0;
    color: #fff;
    font-size: 22px;
  }
  .title {
    text-align: center;
    color: #fff;
    font-weight: 700;
    padding: 20px 0;
  }
  img {
    width: 600px;
    height: 450px;
    object-fit: cover;
    border-radius: 12px;
  }
`;
