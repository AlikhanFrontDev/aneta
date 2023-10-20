import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import { motion } from "framer-motion";
import "../toggle.css";

import background from "../assets/img/background.jpg";

export default function GuestNan() {
  return (
    <Nav>
      <div>
        <motion.div whileTap={{ scale: 0.95 }} className="logoContainer">
          <img src={logo} alt="Logo" className="logo" />
        </motion.div>
      </div>
        <motion.h1
          className="user"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Platformaga kirish
        </motion.h1>
    </Nav>
  );
}

const Nav = styled.nav`
  height: 100px;
  position: static;
  top: 0;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  padding: 0 2%;
  align-items: center;
  width: 100%;
  z-index: 1;
  .user{
    color: #fff;
    background-color: red;
    /* height: 50px; */
    width: 300px;
    padding: 10px;
    text-align: center;
    font-size: 25px;
    border-radius: 12px;
}
  .logo {
    height: 270px;
  }
  .logoContainer {
    /* background-image: linear-gradient(
      144.39deg,
      #8D99AE -278.56%,
      #EDF2F4 -78.47%,
      #000000 91.61%
    ); */
  }

  @media only screen and (max-width: 768px) {
    justify-content: space-around;
    /* background-color: red; */
    width: 100%;
    padding: 0;
    li {
      font-size: 11px;
    }
    ul {
      width: 100px;
    }
  }
`;
