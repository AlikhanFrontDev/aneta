import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Endpoint from "../endpoint";
import axios from "axios";
import GuestNan from "../components/guestnav";
import Footer from "../components/footer";
import Accordion from "@mui/material/Accordion";

import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Fayllar() {
  //   get data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const fetchData = async () => {
      try {
        const response = await axios.get(Endpoint + "v1/sourceFile/allTopic", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(response.data.item);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // const [expanded, setExpanded] = React.useState(false);

  // const handleChange1 = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };
  return (
    <>
      <Container>
        <GuestNan />
        {loading ? (
          <p>Loading data...</p>
        ) : data ? (
          <>
            <div className="cards">
              {data.map((topic) => (
                <Accordion
                  className="top"
                  // expanded={expanded === `panel1${topic.id}`}
                  // onChange={handleChange1(`panel1${topic.id}`)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel1bh-content${topic.id}`}
                    id={`panel${topic.id}bh-header`}
                  >
                    <Typography
                      sx={{ width: "100%", flexShrink: 0 }}
                      className="summary"
                    >
                      {topic.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ padding: 0 }}>
                    {topic.sourceFiles.map((item) => (
                      <ul className="lessonName" key={item.id}>
                        <a
                          className="id"
                          href={`https://prodgtlservice.uz/api/file/download/${item.fileId}`}
                        >
                          {item.description}
                        </a>
                      </ul>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </>
        ) : (
          <p>No data available.</p>
        )}
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
min-height: 100vh;
  .link {
    color: #fff;
    text-decoration: none;
  }
  background-color: #0b0e13;
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
    margin: 30px 5%;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-between; */
    /* row-gap: 20px; */
  }
  .cardImage {
    width: 100%;
    height: 280px;
    object-fit: contain;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
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
  .red {
    color: red;
    font-weight: 900;
    font-size: 2.5rem;
  }
  @media only screen and (max-width: 768px) {
    .cards {
      margin-top: 20px;
      flex-direction: column;
      flex-wrap: nowrap;
    }
    .title {
      width: 90%;
      margin: 0 5%;
    }
    .pretitle {
      font-size: 1.5rem;
    }
    .courses {
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
    .summary h1 {
      font-size: 2.3rem;
    }
    .summary p {
      font-size: 0.8rem;
    }
    .pretitle span {
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
  /*  */
  @media screen and (max-width: 1200px) {
    .card {
      width: 48%; /* Adjust card width for smaller screens */
      height: auto; /* Allow height to adjust based on content */
    }
  }

  @media screen and (max-width: 768px) {
    .card {
      width: 100%;
      margin: 0 auto;
      height: 400px; /* Show cards in a single column on smaller screens */
    }
  }

  @media screen and (max-width: 600px) {
    .cards {
      margin-top: 20px auto;
      width: 90%;
      justify-content: center; /* Center-align cards */
    }
    .card {
      width: 85vw;
      margin: 0 auto;
      height: 400px;
    }
    .title {
      width: 90%;
      margin: 0 auto;
      padding: 20px 0;
    }

    .courses {
      font-size: 2rem;
      width: 95%; /* Decrease font size for smaller screens */
    }

    .pretitle {
      font-size: 1rem; /* Decrease font size for smaller screens */
      margin: 20px 0; /* Adjust margin for smaller screens */
    }
    .summary h1 {
      font-size: 1.7rem;
    }
  }
`;
