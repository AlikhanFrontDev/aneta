import React, { useState } from "react";
import styled from "styled-components";
import background from "../assets/img/background.jpg";
import { motion } from "framer-motion";
import AuthService from "../AuthLogin";
import jwt_decode from "jwt-decode";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Endpoint from "../endpoint";

export default function LoginPage() {
  // const [fullName, setName] = useState();
  const [username, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [responce, setRes] = useState("");
  // const [phoneNumber, setNumber] = useState();
  const supernavigate = useNavigate();
  const noUserNavigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    const postData = {
      username,
      password,
    };
    console.log(postData);
    axios
      .post(Endpoint + `v1/auth/login`, postData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setRes(res.data);
        if (res) {
          localStorage.setItem("token", JSON.stringify(res.data.item.token));
        }
        const users = JSON.parse(localStorage.getItem("token"));
        const atts = jwt_decode(users);

        console.log(atts);
        const atributs = atts;
        const roleName = atributs;
        console.log(roleName.role);
        const userrole = roleName.isAdmin;

        console.log(userrole);

        if (userrole) {
          supernavigate("/AdminkaProDigitaladmin0202");
        } else {
          noUserNavigate("/courses");
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <img src={background} alt="" className="banimage" />
      {responce ? (
        <div className="message">
          <h1>{responce.message}</h1>
        </div>
      ) : (
        ""
      )}
      <div className="box">
        <h1>Hisobga kirish</h1>
        <form onSubmit={handleLogin}>
          {/* // <input
            type="text"
            placeholder="Ism"
            onChange={(e) => setName(e.target.value)}
          /> */}
          <input
            type="email"
            placeholder="Username"
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <input
            type="text"
            placeholder="Telefon raqam"
            onChange={(e) => setNumber(e.target.value)}
          /> */}
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            Hisobga kirish
          </motion.button>
        </form>
        <br />
        <p>Hisobingiz mavjud emasmi ?</p>
        <Link to={"/register"}>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            Ro'yxatdan o'tish
          </motion.button>
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .message {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #ffffffa6;
    border-radius: 20px;
  }
  .message h1 {
    color: #00000084;
    padding: 10px 30px;
  }
  h1 {
    color: red;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-size: 30px;
    margin-bottom: 10%;
  }
  input {
    padding: 10px 20px;
    border: none;
    background-color: #000000b0;
    color: red;
    margin: 2% 0;
    border-radius: 7px;
  }
  button {
    padding: 10px 20px;
    border: none;
    background-color: #000000b0;
    color: red;
    margin: 2% 0;
    border-radius: 7px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #000000b0;
  .banimage {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
  }
`;
