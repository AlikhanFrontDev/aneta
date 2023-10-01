import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

export default function Title() {
  return (
    <Container>
      <motion.div
        className="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Subscribe
      </motion.div>
      <h1>Tez so'raladigan savollar</h1>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .button {
    background-color: #11101d;
    color: #fff;
    border-radius: 12px;
    padding: 30px;
    width: 200px;
    margin-bottom: 100px;
    cursor: pointer;
  }
  .button:hover {
    background-color: #6d6d6d;
    color: #11101d;
  }
  h1{
    margin: 20px;
    color: #fff;
    font-size: 30px;
  }
`;
