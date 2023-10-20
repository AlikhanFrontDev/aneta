import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import { motion } from "framer-motion";
import "../toggle.css";

import background from "../assets/img/background.jpg";

export default function Navbar() {
  return (
    <Nav>
      <div>
        <motion.div whileTap={{ scale: 0.95 }} className="logoContainer">
          <img src={logo} alt="Logo" className="logo" />
        </motion.div>
      </div>
      <ul className="ul">
        <motion.li
          className="li"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          All courses
        </motion.li>
        <motion.li
          className="li"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          About
        </motion.li>
        <motion.li
          className="li"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          // onClick={toggleModal}
        >
          Sign in
        </motion.li>
        <motion.li
          className="li"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign up
        </motion.li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  height: 100px;
  position: static;
  top: 0;
  background-color: #000000b0;
  display: flex;
  justify-content: space-between;
  padding: 0 8%;
  align-items: center;
  width: 100%;
  z-index: 1;
  .ul {
    display: flex;
    width: 350px;
    height: 70px;
    /* background-color: red; */
    justify-content: space-between;
    align-items: center;
    list-style: circle;
  }
  .ul li {
    cursor: pointer;
    /* background-color: red; */
    color: #fff;
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
