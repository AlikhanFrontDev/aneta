import React, {useState} from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import { motion } from "framer-motion";
import "../toggle.css"
import SingIn from "./singIn";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function Navbar() {
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
    <Nav>
      <div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="logoContainer"
        >
          <img src={logo} alt="Logo" className="logo" />
        </motion.div>
      </div>
      <ul className="ul">
        <motion.li
          className="li"
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          All courses
        </motion.li>
        <motion.li
          className="li"
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          About
        </motion.li>
        <motion.li
          className="li"
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          // onClick={toggleModal}
        >
          Sign in
        </motion.li>
        <motion.li
          className="li"
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign up
        </motion.li>
      </ul>
      {modal && (
        <div>
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>
                <SingIn/>
              </h2>
            </div>
          </div>
        </div>
      )}
    </Nav>
  );
}

const Nav = styled.div`
  height: 100px;
  background-color: #0b0e13;
  display: flex;
  justify-content: space-between;
  padding: 0 8%;
  align-items: center;
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
    border-radius: 50%;
    border: 5px dashed #edf2f4;
    height: 300px;
    width: 300px;
    display: flex;
    align-items: center;
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
