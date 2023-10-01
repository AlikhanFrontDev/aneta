import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

export default function Info() {
  return (
    <Container>
      <div className="container">
        <h3 className="title">Har Oy Yangi Darslar Qo’shib Boriladi!</h3>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            officiis fugit dolor voluptatem itaque perspiciatis dolore soluta
            quia aperiam eveniet.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            officiis fugit dolor voluptatem itaque perspiciatis dolore soluta
            quia aperiam eveniet.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            officiis fugit dolor voluptatem itaque perspiciatis dolore soluta
            quia aperiam eveniet.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            officiis fugit dolor voluptatem itaque perspiciatis dolore soluta
            quia aperiam eveniet.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            officiis fugit dolor voluptatem itaque perspiciatis dolore soluta
            quia aperiam eveniet.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            officiis fugit dolor voluptatem itaque perspiciatis dolore soluta
            quia aperiam eveniet.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            officiis fugit dolor voluptatem itaque perspiciatis dolore soluta
            quia aperiam eveniet.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            officiis fugit dolor voluptatem itaque perspiciatis dolore soluta
            quia aperiam eveniet.
          </li>
        </ul>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 90vh;
  /* background-color: red; */
  .container {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 15%;
  }
  .title {
    margin: 30px 0;
    font-size: 3rem;
    color: #fff;
  }
  li{
    margin: 20px 0;
    font-size: 20px;
  }
`;
