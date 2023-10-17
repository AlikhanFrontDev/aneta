import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import bannerimage from "../assets/img/bannerimage.webp";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CourseList from "../components/courseList";

export default function CoursesPage() {
  return (
    <div>
      <Navbar />
      <Container>
        <h1 className="header">READY TO ESCAPE? JOIN NOW</h1>
        <p className="paragraf">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum libero
          sapiente amet asperiores. Recusandae assumenda omnis doloremque
          facilis laudantium a explicabo id? Perferendis rem dolor quam,
          sapiente amet asperiores. Recusandae assumenda omnis doloremque
          facilis laudantium a explicabo id? Perferendis rem dolor quam,
          incidunt tenetur exercitationem amet.
        </p>
        <div className="button">
          Join now
        </div>
      </Container>
      <CourseList/>
      <Footer/>
    </div>
  );
}

const Container = styled.div`
  height: 120vh;
  background-color: #0b0e13bc;
  /* background-color: red; */
  .button{
    padding: 50px;
    background-color: #FF3131;
    width: 20%;
    margin: 40px 40%;
    text-align: center;
    border-radius: 12px;
    cursor: pointer;
  }
  .paragraf{
    color: #fff;
    font-size: 22px;
    text-align: center;
  }
  .header {
    color: #fff;
    text-align: center;
    font-size: 45px;
    padding: 200px 0 150px 0;
    font-weight: 700;
    letter-spacing: 2px;
  }
  .card {
    width: 300px;
    height: 370px;
    background-color: #fff;
    border-radius: 12px;
    padding: 10px;
  }
  .cards {
    width: 70%;
    /* margin: 200px 15%; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 35px;
  }
  .cardImage {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }
  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 10px; */
  }
  .summary p {
    text-align: center;
  }
  .summary h1 {
    font-size: 18px;
    margin: 5px;
    color: #11101d;
  }
  button {
    padding: 0 10px;
    margin: 10px;
    width: 100px;
    height: 30px;
    border-radius: 12px;
    border: none;
    background-color: #11101d;
    color: #fff;
    cursor: pointer;
  }
  button:hover {
    background-color: #6d6d6d;
    color: #11101d;
  }
  .courses {
    font-size: 3rem;
    margin: 3rem 0;
    color: #11101d;
    text-align: center;
  }
  .title {
    display: flex;
    justify-content: flex-end;
    width: 70%;
    margin: 0 15%;
    align-items: center;
  }
`;
