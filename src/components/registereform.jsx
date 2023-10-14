import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Registereform() {
  return (
    <Container>
      <motion.div
        className="container"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <form>
          <input type="text" placeholder="ask something" />
          <input type="text" placeholder="ask something" />
          <input type="text" placeholder="ask something" />
          <input type="text" placeholder="ask something" />
        </form>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          send
        </motion.button>
        <p className="privacy">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae id
          dolorem magnam ab, recusandae eveniet. Necessitatibus, nesciunt iure
          amet tenetur iusto iste repellendus exercitationem aperiam ipsam
          reprehenderit recusandae assumenda impedit, illo itaque? Autem
          molestiae omnis beatae ab? Est, quidem molestias?
        </p>
      </motion.div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 800px;
  .container {
    min-width: 600px;
    min-height: 600px;
    background-image: linear-gradient(
      144.39deg,
      #ffffff -278.56%,
      #6d6d6d -78.47%,
      #11101d 91.61%
    );
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  form {
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  form input {
    margin: 20px;
    height: 40px;
    width: 400px;
    padding: 15px;
    border: none;
    border-radius: 12px;
    color: #000;
  }
  button {
    margin: 50px;
    width: 200px;
    height: 50px;
    border-radius: 12px;
    border: none;
    background-color: #11101d;
    color: #fff;
  }
  button:hover {
    background-color: #6d6d6d;
    color: #11101d;
  }
  .privacy{
    padding: 0 20px;
  }
`;
