import React, { useState } from "react";
import styled from "styled-components";
import bannerimage from "../assets/img/bannerimage.webp";
import { motion } from "framer-motion";
import Registereform from "./registereform";
export default function Courses() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <Container>
      {/* <Wave/> */}
      <div className="title">
        <motion.h3 className="courses" whileHover={{ scale: 1.05 }}>
          WHAT YOU WILL LEARN
        </motion.h3>
        {/* <motion.div
          className="allcourses"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          All courses
        </motion.div> */}
        <motion.h2
          className="pretitle"
          whileHover={{ scale: 1.05 }}
        >
          When a new technology revolutionises an industry, THE REAL WORLD will
          be the first and only place to teach you how to profit from it.
        </motion.h2>
      </div>
      <div className="cards">
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
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
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
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
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
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
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
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
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
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
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
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
      {modal && (
        <div>
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>
                <Registereform />
              </h2>
            </div>
          </div>
        </div>
      )}
      {/* <div className="startButton">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="start"
        >
          <p>Join to the course</p>
        </motion.div>
      </div> */}
    </Container>
  );
}

const Container = styled.div`
  background-color: #181b21;
  /* margin-top: 100px; */
  /* min-height: 150vh; */
  width: 100%;
  /* background-color: #fff; */
  /* z-index: -1; */

  /* box-shadow:-1px -16px 140px -27px rgba(255, 255, 255, 0.62); */
  .circle {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    border: 5px dashed #6d6d6d56;
    position: absolute;
    top: 600px;
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
    width: 670px;
    height: 450px;
    background-color: #fff;
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
    width: 650px;
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
