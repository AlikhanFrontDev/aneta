import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function NewCourse() {
  return (
    <Container>
      <motion.div className="boxs" whileHover={{ scale: 1.05 }}>
        <motion.div className="box title">
          <div className="icon">
            <p>S</p>
          </div>
          <h1 className="soon">New skils</h1>
        </motion.div>
        <div className="box ">
          <h2 className="summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            vel repudiandae fugit dolore suscipit natus ipsam explicabo
            accusantium sed facere!
          </h2>
        </div>
        <div className="box">
          <div className="item">
            <p>Fitness</p>
            <p>New Campus</p>
          </div>
          <div className="item">
            <p>Artificial Intelligence</p>
            <p>Integrated in all Campuses</p>
          </div>
        </div>
        <div className="box">
          <p className="new">Coming Soon: Social Media Marketing</p>
        </div>
        <motion.div className="box logo" whileHover={{ scale: 1.05 }}>
          <img src={logo} alt="" />
        </motion.div>
      </motion.div>
      <motion.div
        className="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Join the Real world
      </motion.div>
    </Container>
  );
}

const Container = styled.div`
  /* margin-top: 25px; */
  padding-top: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background-color: #181b21;
  .new {
    color: #181b21;
    font-size: 20px;
    font-weight: 600;
    text-decoration: underline;
  }
  .item p {
    color: #ff3131;
    font-size: 20px;
    font-weight: 600;
  }
  .button {
    height: 80px;
    width: 400px;
    background-color: #ff3131;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin: 100px 0;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
  }
  .logo {
    background-color: #0b0e13;
    /* width: 200px; */
    height: 150px;
    width: 50%;
    margin: 0 25%;
    border-radius: 12px;
  }
  .logo img {
    width: 200px;
  }
  .boxs {
    height: 670px;
    width: 60%;
    background-color: #fff;
    border-radius: 12px;
  }
  .box {
    color: #181b21;
    display: flex;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
  }
  .title {
    width: 50%;
    /* background-color: red; */
    margin: 0 25%;
  }
  .soon {
    color: #181b21;
    font-size: 50px;
    font-weight: 700;
    text-decoration: underline;
  }
  .icon {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #181b21;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon p {
    color: #fff;
    font-size: 6rem;
  }
`;
