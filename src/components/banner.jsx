import React, { useState } from "react";
import styled from "styled-components";
import imgBanner from "../assets/img/banner.png";
import bannerimage from "../assets/img/bannerimage.webp";
import { motion } from "framer-motion";
import Registereform from "./registereform";
import "../toggle.css";

export default function Banner() {
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
    <Baanner>
      <div className="banner">
        <motion.div
          className="container"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="theme">Digital Marketing</h1>
          <h1 className="moto">Social Media Marketing</h1>
          <h1 className="moto2">Matvatsa ;)</h1>
          <h3 className="summary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
            provident!
          </h3>
          <motion.button
            className="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleModal}
          >
            Get started
          </motion.button>
        </motion.div>
        <motion.div
          className="img"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.img
            src={imgBanner}
            alt=""
            className="image"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          />
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
    </Baanner>
  );
}

const Baanner = styled.div`
  background-color: linear-gradient(
    144.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%
  );
  
  /* background-image: url(${bannerimage}); */
  width: 100%;
  height: 90vh;
  .banner {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    height: 87vh;
    /* background-color: red; */
  }
  .summary {
    /* font-size: 2rem; */
    letter-spacing: 1px;
    color: #fff;
    font-weight: 100;
  }
  .img {
    width: 600px;
    height: 600px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 5px dashed #6d6d6d;
    border-radius: 50%;
  }
  .img:hover {
    border-color: #ffffff;
  }
  .image {
    width: 550px;
    /* rotate: 180deg; */
    /* margin-left: 50px; */
    /* background-color: red; */
  }
  .container {
    /* background-color: red; */
    width: 40%;
    display: flex;
    flex-direction: column;
    /* align-items: center;  */
    justify-content: center;
    padding: 20px;
  }
  .theme {
    font-size: 3rem;
    color: #6d6d6d;
  }
  .moto {
    font-size: 3rem;
    color: #ffffff;
  }
  .moto2 {
    font-size: 3rem;
    color: #11101d;
    text-decoration: line-through;
  }
  .button {
    height: 40px;
    width: 50%;
    padding: 10px;
    margin-top: 20px;
    border: none;
    border-radius: 12px;
    background-color: #11101d;
    color: #ffffff;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    height: 60vh;
    .img{
      width: 300px;
      height: 300px
    }
    .image{
      width: 300px;
    }
    .banner{
      height: 65vh;
    }
  }
`;
