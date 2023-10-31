import React, {useState} from "react";
import styled from "styled-components";
import background from "../assets/img/background.jpg";
import { motion } from "framer-motion";
import AuthService from "../AuthLogin";
import jwt_decode from "jwt-decode";

import { useNavigate } from "react-router-dom";


export default function LoginPage() {
  // const [fullName, setName] = useState();
  const [username, setSurname] = useState("");
  const [password, setPassword] = useState("");
  // const [phoneNumber, setNumber] = useState();
  const supernavigate = useNavigate();
  const noUserNavigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await AuthService.login( username, password).then(() => {
        const users = JSON.parse(localStorage.getItem("token"));
        const atts = jwt_decode(users);
        // console.log(atts)
        const atributs = atts;
        const roleName = atributs;
        // console.log(roleName.role)
        const userrole = roleName.sub;
        const role = userrole;
       
        console.log(role)
        
        if (role === "admin_0882") {
          supernavigate("/AdminkaProDigitaladmin0202");
        } else {
          noUserNavigate("/loginPage");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <img src={background} alt="" className="banimage" />
      <div className="box">
        <h1>Ro'yxatdan o'tish</h1>
        <form onSubmit={handleLogin}>
          {/* // <input
            type="text"
            placeholder="Ism"
            onChange={(e) => setName(e.target.value)}
          /> */}
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
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
