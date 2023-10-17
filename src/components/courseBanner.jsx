import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import image from "../assets/img/bannerimage.webp";
import "../toggle.css";
import Registereform from "./registereform";
import ControlledAccordions from "./accordion";
import SingleCoueseAccordion from "./singleCourseAccordion";

export default function CourseBanner() {
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
      <h1 className="title">Matvatsa kursi</h1>
      <div className="containerMain box">
        <ul className="rules">
          <li>Video darslarni ko’rib borish</li>
          <li>Amaliy mashqlar</li>
          <li>Mentorlar bilan ishlash</li>
          <li>3 oylik qo'llab quvvatlash</li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            perferendis nihil dolorum sequi nulla.
          </li>
        </ul>
        <img src={image} alt="a" className="image" />
      </div>
      <h1 className="title themes">O'rganiladigan mavzular</h1>
      {/* <div className="container">
        <ul className="list">
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
        </ul>
      </div> */}
      <div>
        <SingleCoueseAccordion />
      </div>
      {/* <motion.button
        className="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleModal}
      >
        Get started
      </motion.button> */}
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
    </Container>
  );
}
const Container = styled.div`
  background-color: #0b0e13bc;
  min-height: 100vh;
  /* text-align: center; */
  padding-top: 150px;
  .title {
    font-size: 44px;
    text-align: center;
    color: #fff;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .themes {
    padding-top: 150px;
  }
  .image {
    width: 40%;
    height: 390px;
    /* margin: 60px; */
    border-radius: 12px;
    object-fit: cover;
  }
  .containerMain {
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    margin: 0 5%;
  }
  li {
    margin: 10px 0;
  }
  .list {
    margin-top: 80px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
  }
  .list li {
    list-style: decimal;
  }
  .theme {
    margin: 10px;
    font-size: 20px;
  }

  .box {
    height: 60vh;
  }
  .rules {
    margin: 60px;
    /* list-style: none; */
  }
  .rules li {
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .button {
    height: 40px;
    width: 300px;
    padding: 10px;
    border: none;
    border-radius: 12px;
    background-color: #11101d;
    color: #ffffff;
    cursor: pointer;
    margin: 100px 200px;
  }
  .modal-content {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: ; */
    padding: 20px;
  }
`;
