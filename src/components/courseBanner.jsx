import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import image from "../assets/img/bannerimage.webp";

export default function CourseBanner() {
  return (
    <Container>
      <h1 className="title">Matvatsa kursi</h1>
      <div className="container box">
        <ul className="rules">
          <li>Video darslarni ko’rib borish</li>
          <li>Amaliy mashqlar</li>
          <li>Mentorlar bilan ishlash</li>
          <li>3 oylik qo'llab quvvatlash</li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            perferendis nihil dolorum sequi nulla.
          </li>
        </ul>
        <img src={image} alt="a" className="image" />
      </div>
      <h1 className="title">O'rganiladigan mavzular</h1>
      <div className="container">
        <ul className="list">
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="theme">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
        </ul>
      </div>
    </Container>
  );
}
const Container = styled.div`
  /* background-color: red; */
  height: 100px;
  /* text-align: center; */
  margin-top: 150px;
  .title {
    font-size: 30px;
    text-align: center;
    color: #fff;
  }
  .image {
    width: 40%;
    margin: 60px;
    border-radius: 12px;
  }
  .container {
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    margin: 0 10%;
  }
  li {
    margin: 10px 0;
  }
  .list {
    margin-top: 80px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
  }
  .list li {
    list-style: decimal;
  }
  .theme {
    margin: 10px;
    font-size: 20px;
  }

  .box{
    height: 60vh;
  }
  .rules{
    margin: 60px;
  }
`;
