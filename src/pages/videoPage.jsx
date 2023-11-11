import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomTabPanel from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import layer from "../assets/img/layer.png";
import GuestNan from "../components/guestnav";
import Endpoint from "../endpoint";
import axios from "axios";

export default function VideoPage() {
  // get data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const fetchData = async () => {
      try {
        const response = await axios.get(Endpoint + "v1/course/one/36", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setData(response.data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        // Set loading to false whether the request succeeds or fails
        setLoading(false);
      }
    };

    fetchData();
    // const tokenn = setInterval(fetchData, 1000); // Every 5 seconds?
    // fetchData(); // Initial request
    // return () => {
    //   // Don't forget to cleanup the interval when this effect is cleaned up.
    //   clearInterval(tokenn);
    // };
  }, []);

  const [lesson, setLessonData] = useState([]);
  const [loading1, setLoading1] = useState(true);

  const lessonGetHandler = (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    axios
      .get(Endpoint + `v1/lesson/one/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setLoading1(false);
        setLessonData(response.data);
        console.log(lesson.item.name);
      })
      .catch((error) => {
        console.error("Error fetching tab data:", error);
      });
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChange1 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    // <div className="container">
    <Container>
      <div className="nav">
        <GuestNan />
      </div>
      <img src={layer} alt="" className="layer" />
      <div className="screen">
        {loading ? (
          <p>Loading data...</p>
        ) : data ? (
          <>
            {data ? (
              <div key={data.id}>
                <div className="accordion">
                  <h1 className="courseName">{data.courseName}</h1>
                  {data.item.topicDtoList.map((topic) => (
                    <Accordion
                      className="top"
                      expanded={expanded === `panel1${topic.id}`}
                      onChange={handleChange1(`panel1${topic.id}`)}
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
                        {topic.lessonsList.map((item) => (
                          <ul key={item.id}>
                            <li
                              value={item.id}
                              onClick={() => lessonGetHandler(item.id)}
                            >
                              {item.name}
                            </li>
                          </ul>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
                {loading1 ? (
                  <p>Loading data...</p>
                ) : lesson ? (
                  <div className="box">
                    {!lesson.item.guessUser ? (
                      <p>ro'yxatdan o'ting</p>
                    ): !lesson.item.premium ? (
                      <p>kursni sotib oling</p>
                    ) : (
                      <video className="video" src={`https://prodgtlservice.uz/api/v2/video/stream/${lesson.item.videoId}`}controls></video>
                    ) }
                    <p>{lesson.item.name}</p>
                  </div>
                ) : (
                  <div className="box">
                    <p>no data</p>
                  </div>
                )}
              </div>
            ) : (
              <p>No data available.</p>
            )}
          </>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </Container>
    // </div>
  );
}

const Container = styled.div`
  .video {
    height: 80vh;
    width: 100%;
    background-color: black;
  }
  .layer {
    position: fixed;
    z-index: -1;
    height: 1250px;
    padding: -550px;
    width: 100vw;
    margin: 0;
    object-fit: cover;
    background-color: #444;
  }
  /* background-color: #777;
  background-image: url(${layer});
  background-size: contain; */
  height: 120vh;
  /* background-color: red; */
  .box {
    background-color: green;
    height: 200px;
    width: 70%;
    position: absolute;
    left: 25%;
    top: 15%;
    z-index: 2;
    /* border-radius: 12px; */
  }
  .nav {
    z-index: 3;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }
  .accordion {
    z-index: 1;
    background-color: #000;
    color: #fff;
    height: 80vh;
    margin: 20px;
    width: 300px;
    text-align: center;
    border-radius: 10px;
    overflow-y: scroll;
    /* overflow-y: hidden; */
    overflow-x: hidden;
    position: fixed;
    top: 100px;
  }
  .accordion::-webkit-scrollbar-track {
    border: 1px solid #000;
    padding: 2px 0;
    background-color: #404040;
  }

  .accordion::-webkit-scrollbar {
    width: 5px;
  }

  .accordion::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: red;
    border: 1px solid #000;
  }
  .screen {
    display: flex;
  }
  .top {
    width: 300px;
    background-color: #000;
    border-bottom: 1px solid red;
  }
  .courseName {
    color: #fff;
    font-weight: 700;
    margin: 10px 0;
  }
  .description {
    background-color: #ffffff86;
    border-radius: 20px;
    color: #181b21;
    font-weight: 600;
    padding: 50px 0;
    width: 95%;
    padding: 20px;
  }
  .text {
    width: 100%;
    min-height: 100%;
    /* overflow-y: scroll; */
    overflow-x: hidden;
    /* background-color: #181b21; */
  }
  .courceVideo {
    /* width: 95%; */
    height: 70vh;
    border-radius: 20px;
  }
  /* background-color: green; */
  /* height: 100px; */
  /* width: 100%; */
  /* .teb{
    color: red;
    background-color: #000;
  } */
  .active {
    color: red;
  }
`;
