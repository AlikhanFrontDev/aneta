import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import bannerimage from "../assets/img/bannerimage.webp";
import Navbar from "../components/navbar";

export default function CoursesPage() {
  return (
    <Container>
      <Navbar />
      <div className="circle"></div>
      <div className="circle1"></div>
      <div className="cards">
        <motion.div className="card" whileHover={{ scale: 1.1 }}>
          <img src={bannerimage} alt="a" className="cardImage" />
          <div className="summary">
            <h1>Matvatsa trening</h1>
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
      </div>
    </Container>
  );
}

const Container = styled.div`
  min-height: 200vh;
  .card {
    width: 300px;
    height: 370px;
    background-color: #fff;
    border-radius: 12px;
    padding: 10px;
  }
  .cards {
    width: 70%;
    margin: 200px 15%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 35px;
  }
  .cardImage {
    width: 300px;
    height: 200px;
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
  }
  .summary h1 {
    font-size: 18px;
    margin: 5px;
    color: #11101d;
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
    font-size: 3rem;
    margin: 3rem 0;
    color: #11101d;
    text-align: center;
  }
  .title {
    display: flex;
    justify-content: flex-end;
    width: 70%;
    margin: 0 15%;
    align-items: center;
  }
`;
