import React, {useState} from "react";
import styled from "styled-components";
import background from "../assets/img/background.jpg";
import { motion } from "framer-motion";
import AuthService from "../AuthLogin";
import jwt_decode from "jwt-decode";


import { useNavigate } from "react-router-dom";
import Endpoint from "../endpoint";
import axios from "axios";


export default function RegisterPage() {
  const supernavigate = useNavigate();
  // const [fullName, setName] = useState();
  const [username, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const [responce, setRes] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    const postData = {
        username,
        password,
        fullName,
        phoneNumber,
    };
    console.log(postData);
    axios
      .post(Endpoint + `v1/auth/register`, postData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setRes(res.data)
        // supernavigate("/courses");
        console.log(responce.success);
        
        if (responce.success) {
          supernavigate("/loginPage");
        } else {
          console.log("fail")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <img src={background} alt="" className="banimage" />

     { responce ?  (<div className="message"><h1>{responce.message}</h1></div>) : ("") }
      <div className="box">
        <h1>Ro'yxatdan o'tish</h1>
        <form onSubmit={submitHandler}>
          {/* // <input
            type="text"
            placeholder="Ism"
            onChange={(e) => setName(e.target.value)}
          /> */}
            <input
            required
              type="text"
              placeholder="Ism va Familiya"
              onChange={(e) => setFullName(e.target.value)}
            />
          <input
          required
            type="email"
            placeholder="Email kiriting"
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
          required
            type="password"
            placeholder="Parol kiriting"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
          required
            type="number"
            placeholder="Telefon raqam kiriting"
            onChange={(e) => setNumber(e.target.value)}
          />
          {/* <input
            type="text"
            placeholder="Telefon raqam"
            onChange={(e) => setNumber(e.target.value)}
          /> */}
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            Yuborish
          </motion.button>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
    .message{
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
