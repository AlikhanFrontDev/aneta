import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import bannerimage from "../assets/img/bannerimage.webp";

export default function Profilemenu() {
  return (
    <Container>
      <div className="user">
        <h1>Jake Jonson</h1>
        <motion.button
          className="pay"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          // onClick={toggleModal}
        >
          To'lov qilish
        </motion.button>
      </div>
      <h1 className="title">Access for courses until 15.10.2023</h1>
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
              // onClick={toggleModal}
              className="pay fix"
            >
              Go to course
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
              // onClick={toggleModal}
              className="pay fix"
            >
              Go to course
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
              // onClick={toggleModal}
              className="pay fix"
            >
              Go to course
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
              // onClick={toggleModal}
              className="pay fix"
            >
              Go to course
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
              // onClick={toggleModal}
              className="pay fix"
            >
              Go to course
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
              // onClick={toggleModal}
              className="pay fix"
            >
              Go to course
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
              // onClick={toggleModal}
              className="pay fix"
            >
              Go to course
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
              // onClick={toggleModal}
              className="pay fix"
            >
              Go to course
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
              // onClick={toggleModal}
              className="pay fix"
            >
              Go to course
            </motion.button>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
const Container = styled.div`
.title{
    text-align: center;
    font-size: 30px;
    color: #fff;
}
  min-height: 200vh;
  .user {
    /* background-color: red; */
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .pay {
    padding: 10px;
    margin: 0 50px;
    /* width: 100px; */
    /* height: 30px; */
    border-radius: 12px;
    border: none;
    background-color: #11101d;
    color: #fff;
    cursor: pointer;
  }
  .pay:hover {
    background-color: #6d6d6d;
    color: #11101d;
  }
  .card {
    width: 300px;
    height: 370px;
    background-color: #fff;
    border-radius: 12px;
    padding: 10px;
    cursor: pointer;
  }
  .cards {
    width: 70%;
    margin: 100px 15%;
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
  .fix{
    margin: 10px;
  }
`;
