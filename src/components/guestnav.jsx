import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import { motion } from "framer-motion";
import "../toggle.css";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function GuestNan() {
  const [data, setData] = useState(null);
  const [userName, setName] = useState(null);
  const logOutNavigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    const getUserInfo = () => {
      if (users) {
        const atts = jwt_decode(users);
        // console.log(atts);
        const atributs = atts;
        const roleName = atributs;
        console.log(roleName);
        const userrole = setData(roleName.isPremium);
        const username = setName(roleName.username);
      } else {
        console.log("no token");
      }
    };
    getUserInfo();
  }, []);
  const logOutHandler = () => {
    localStorage.removeItem("token");
    logOutNavigate("/");
  };
  return (
    <Nav>
      <Link to={"/"}>
        <motion.div whileTap={{ scale: 0.95 }} className="logoContainer">
          <img src={logo} alt="Logo" className="logo" />
        </motion.div>
      </Link>
      {data ? (
        <>
          <div className="flex">
            <div className="log">
              <p>{userName}</p>
              <p className="logout" onClick={logOutHandler}>
                Chiqish
              </p>
            </div>
            <ul className="links">
              <Link className="link" to={"/links"}>
                Foydali linklar
              </Link>
              <Link className="link" to={"/files"}>
                Foydali fayllar
              </Link>
            </ul>
          </div>
        </>
      ) : (
        ""
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  .log {
    display: flex;
    justify-content: space-between;
    width: 300px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .logout {
    color: red;
    cursor: pointer;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
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
  .flex {
    width: 320px;
    /* background-color: red; */
  }
  .links {
    margin: 0;
    display: flex;
    list-style: none;
    width: 100%;
    /* justify-content: space-between; */
    padding: 0;
    gap: 20px;
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
    .log{
      flex-direction: column-reverse;
      padding: 0;
      margin: 0;
      width: 100%;
      justify-content: flex-start;
      align-items: start;

    }
    .log p {
      margin: 0;
    }
    .logout{
      margin: 0;
    }
    .logo {
      object-fit: cover;
    }
    .link {
      font-size: 0.8rem;
    }
    .flex {
      width: 50%;
    }
    .links {
      padding: 0;
      width: 100%;
      justify-content: space-between;
      display: flex;
    }
  }
`;
