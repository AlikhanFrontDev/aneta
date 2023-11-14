import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import { motion } from "framer-motion";
import "../toggle.css";

import background from "../assets/img/background.jpg";
import jwt_decode from "jwt-decode";

export default function GuestNan() {
  const [data, setData] = useState(null);

  const users = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    const getUserInfo = (() => {
      if (users) {
        const atts = jwt_decode(users);
        // console.log(atts);
        const atributs = atts;
        const roleName = atributs;
        // console.log(roleName.role);
        const userrole = setData(roleName.isAdmin);
      }else{
        console.log("no token")
      }
    })
    getUserInfo();
}, []);
  return (
    <Nav>
      <div>
        <motion.div whileTap={{ scale: 0.95 }} className="logoContainer">
          <img src={logo} alt="Logo" className="logo" />
        </motion.div>
      </div>
      {data ? (
        <ul className="links">
          <li>Foydali linklar</li>
          <li>Foydali fayllar</li>
        </ul>
      ) : (
        ""
      )}
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
  .links {
    display: flex;
    list-style: none;
    width: 400px;
    justify-content: space-around;
  }
  .links li {
    color: #fff;
    cursor: pointer;
  }
  .logo {
    height: 150px;
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
