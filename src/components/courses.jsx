import React from "react";
import styled from "styled-components";
import bannerimage from "../assets/img/bannerimage.webp";

import { motion } from "framer-motion";
export default function Courses() {
  return (
    <Container>
      <div className="circle"></div>
      <div className="circle1"></div>
      <div className="title">
        {/* <h3 className="courses">Courses</h3> */}
        <motion.div
          className="allcourses"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          All courses
        </motion.div>
      </div>
      <div className="cards">
        <motion.div className="card" whileHover={{ scale: 1.1 }}>
          <img src={bannerimage} alt="a" />
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
            >
              subscribe
            </motion.button>
          </div>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.1 }}>
          <img src={bannerimage} alt="a" />
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
            >
              subscribe
            </motion.button>
          </div>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.1 }}>
          <img src={bannerimage} alt="a" />
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
            >
              subscribe
            </motion.button>
          </div>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.1 }}>
          <img src={bannerimage} alt="a" />
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
            >
              subscribe
            </motion.button>
          </div>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.1 }}>
          <img src={bannerimage} alt="a" />
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
            >
              subscribe
            </motion.button>
          </div>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.1 }}>
          <img src={bannerimage} alt="a" />
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
  margin-top: 100px;
  height: 120vh;
  width: 100%;
  /* background-color: #fff; */
  /* z-index: -1; */

  /* box-shadow:-1px -16px 140px -27px rgba(255, 255, 255, 0.62); */
  .circle {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    border: 5px dashed #6d6d6d;
    position: absolute;
    top: 1000px;
    left: 100px;
    z-index: -1;
  }
  .circle1 {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    border: 5px dashed #6d6d6d;
    position: absolute;
    top: 1300px;
    left: 800px;
    z-index: -1;
  }
  .card {
    width: 300px;
    height: 370px;
    background-color: #fff;
    border-radius: 12px;
    padding: 10px;
  }
  .cards {
    width: 70%;
    margin: 0 15%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 35px;
  }
  img {
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
    .circle1{
      top: 1300px;
      left: 200px;
    }
    .circle{
      top: 800px;
      left: 0px;
    }
    .card{
      width: 200px;
      height: 250px;
    }
    img{
      width: 200px;
      height: 100px;
      padding: 0;
    }
    .summary p{
      font-size: 12px;
    }
  }
`;
