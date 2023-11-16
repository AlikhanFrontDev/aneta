import React, { useState, useEffect } from "react";
import styled from "styled-components";
import yandex from "../assets/img/Yandex.jpg";
import { motion } from "framer-motion";
import Registereform from "./registereform";
import { Link } from "react-router-dom";
import Endpoint from "../endpoint";
import axios from "axios";

export default function Courses() {
  //   get data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //  const token = JSON.parse(localStorage.getItem("token"));
    const fetchData = async () => {
      try {
        const response = await axios.get(Endpoint + "v1/course/all", {
          //  headers: { Authorization: `Bearer ${token}` },
        });
        setData(response.data.item);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    //  const tokenn = setInterval(fetchData, 1000); // Every 5 seconds?
    //  fetchData(); // Initial request
    //  return () => {
    //    // Don't forget to cleanup the interval when this effect is cleaned up.
    //    clearInterval(tokenn);
    //  };
  }, []);
  return (
    <Container>
      {/* <Wave/> */}
      <div className="title">
        <motion.h3 className="courses" whileHover={{ scale: 1.05 }}>
          "Men NIMALARNI o'rgana olaman"
        </motion.h3>
        <motion.h2 className="pretitle" whileHover={{ scale: 1.05 }}>
          Ushbu kurslar sizni Raqamli Marketingda <span className="red pretitle">USTUNLIK</span> qila olishingiz uchun
          <span className="red pretitle"> Amaliy Ko'nikmalar</span> bilan ta'minlaydi !
        </motion.h2>
      </div>
      {loading ? (
        <p>Loading data...</p>
      ) : data ? (
        <>
          <div className="cards">
            {data.map((item) => (
              <motion.div className="card" whileHover={{ scale: 1.05 }}>
                <img
                  src={`${Endpoint}photo/show/${item.coverPhotoId}`}
                  alt="a"
                  className="cardImage"
                />
                <div className="summary">
                  <h1>{item.courseName}</h1>
                  <p>{item.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link className="link" to={`/videPage/${item.id}`}>
                      Boshlash
                    </Link>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        <p>No data available.</p>
      )}
    </Container>
  );
}

const Container = styled.div`

  .link {
    color: #fff;
    text-decoration: none;
  }
  background-color: #181b21;
  width: 100%;
  padding-bottom: 50px;
  .card {
    width: 32%;
    height: 450px;
    background-color: #000000;
    border-radius: 12px;
    padding: 10px;
  }
  .cards {
    width: 90%;
    margin: 0 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 20px;
  }
  .cardImage {
    width: 100%;
    height: 280px;
    object-fit: contain;
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
    color: #fff;
  }
  .summary h1 {
    font-size: 18px;
    margin: 5px;
    color: red;
    font-weight: 500;
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
    font-weight: 800;
    font-size: 3rem;
    /* margin: 3rem 0; */
    color: #fff;
    text-align: center;
    margin: 20px;
  }
  .title {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 120px;
    width: 70%;
    margin: 0 15%;
    padding: 40px 0;
    align-items: center;
    /* background-color: red; */
    color: #fff;
  }
  .pretitle {
    /* background-color: black; */
    font-size: 2rem;
    text-align: center;
    margin: 40px 0;
    color: #fff;
  }
  .allcourses {
    background-color: #11101d;
    color: #fff;
    border-radius: 12px;
    padding: 15px;
    margin: 30px 0;
  }
  .allcourses:hover {
    background-color: #6d6d6d;
    color: #11101d;
    cursor: pointer;
  }
  .red{
  color: red ;
  font-weight: 900;
  font-size: 2.5rem ;
}
  @media only screen and (max-width: 768px) {
    .cards{
      flex-direction: column;
    flex-wrap: nowrap;
    }
    .title{
      width: 90%;
      margin: 0 5%;
    }
    .pretitle{
      font-size: 1.5rem;
    }
    .courses{
      margin: 0;
      width: 80%;
      font-size: 45px;
    }
    margin: 0;
    /* background-color: red; */
    width: 100%;
    .card {
      width: 90vw;
      margin: 0 5%;
      /* height: 250px; */
    }
    img {
      width: 200px;
      height: 100px;
      padding: 0;
    }
    .summary h1{
      font-size: 2.3rem;
    }
    .summary p {
      font-size: 0.8rem;
    }
    .pretitle span{
      font-size: 1.5rem;
    }
  }
  .startButton {
    margin: 20px 0;
    /* background-color: red; */
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .start {
    height: 100px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    /* border: 1px solid red; */
    background-color: #11101d;
    color: #fff;
  }

`;
