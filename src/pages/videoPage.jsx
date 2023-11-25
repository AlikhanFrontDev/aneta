import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import layer from "../assets/img/layer.png";
import GuestNan from "../components/guestnav";
import Endpoint from "../endpoint";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function disableRightClick(event) {
  event.preventDefault();
}

export default function VideoPage() {
  useEffect(() => {
    // Attach event listener to disable right-click on the entire document
    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const { idd } = useParams();
  // get data
  const [lesson, setLessonData] = useState([]);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const fetchData = async () => {
      try {
        const response = await axios.get(Endpoint + `v1/course/one/${idd}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setData(response.data);
        console.log(data.item.freeLessonId);
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
  const [expanded, setExpanded] = React.useState(true);

  const handleChange1 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : true);
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
              <div className="contayner" key={data.item.id}>
                <div className="accordion">
                  <h1 className="courseName">{data.item.courseName}</h1>
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
                        <Typography sx={{ width: "100%" }} className="summary">
                          {topic.name}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails style={{ padding: 0 }}>
                        {topic.lessonsList.map((item) => (
                          <ul className="lessonName" key={item.id}>
                            <li
                              value={item.id}
                              onClick={() => lessonGetHandler(item.id)}
                            >
                              - {item.name}
                            </li>
                          </ul>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
                {/*  */}
                {!data.item.isAuthorized ? (
                  <>
                    <div className="lock color hidden">
                      <h1 className="title">
                        Kursdan foydalanish uchun hisobga kiring
                      </h1>
                      <Link className="button" to={"/loginPage"}>
                        Kirish
                      </Link>
                    </div>
                  </>
                ) : !data.item.premium ? (
                  <>
                    <div className="lock color">
                      <h1 className="title">
                        Kursni boshlash uchun obuna bo'ling
                      </h1>
                      <Link className="button" to={"/loginPage"}>
                        Hoziroq obuna bo'lish
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className="lock color hidden">
                    <video
                      className="video"
                      src={`https://prodgtlservice.uz/api/v2/video/stream/${data.item.freeLessonId}`}
                      controls
                    ></video>
                  </div>
                )}
                {/*  */}
                {loading1 ? (
                  <p>Loading data...</p>
                ) : lesson ? (
                  <div>
                    {!lesson.item.isAuthorized ? (
                      <>
                        <div className="lock color">
                          <h1 className="title">
                            Kursdan foydalanish uchun hisobga kiring
                          </h1>
                          <Link className="button" to={"/loginPage"}>
                          Kirish
                          </Link>
                        </div>
                      </>
                    ) : !lesson.item.premium ? (
                      <>
                        <div className="lock color">
                          <h1 className="title">
                            Kursni boshlash uchun obuna bo'ling
                          </h1>
                          <Link className="button" to={"/loginPage"}>
                            Hoziroq obuna bo'lish
                          </Link>
                        </div>
                      </>
                    ) : (
                      <div className="lock color">
                        <video
                          className="video"
                          src={`https://prodgtlservice.uz/api/v2/video/stream/${lesson.item.videoId}`}
                          controls
                          controlsList="nodownload"
                        ></video>
                      </div>
                    )}
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
  .title{
    width: 100%;
    text-align: center;
  }
  .summary {
    text-align: start;
    width: 100%;
    color: #fff;
    font-size: 14px;
    width: 100%;
  }
  .lessonName {
    list-style: none;
    width: 90%;
    margin: 0 5%;
    border-radius: 10px;
    padding-left: 10px;
  }
  .lessonName li {
    text-align: center;
    padding: 5px 0;
    cursor: pointer;
    color: #ffffff9e;
    font-size: 14px;
    text-align: start;
  }
  .color {
    background-color: #fff !important;
  }
  .button {
    padding: 10px 25px;
    background-color: #000;
    color: #fff;
    border-radius: 12px;
    margin-top: 20px;
    cursor: pointer;
  }
  .icon {
    color: #fff;
    height: 200px;
  }
  .lock {
    background-color: #ffffff5a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    color: #000;
    width: 72%;
    position: absolute;
    border-radius: 12px;
    left: 400px;
    top: 17%;
  }
  .video {
    border-radius: 10px;
    height: 80vh;
    width: 100%;
    background-color: black;
    /* pointer-events: none; */
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
  height: 100vh;
  /* background-color: red; */
  .box {
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
    width: 350px;
    text-align: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
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
    width: 350px;
    background-color: #000;
    border-bottom: 1px solid #88888826;
  }
  .courseName {
    color: #ffffff;
    font-weight: 700;
    font-size: 1.5rem;
    margin: 15px 0;
  }

  .text {
    width: 100%;
    min-height: 100%;
    /* overflow-y: scroll; */
    overflow-x: hidden;
    /* background-color: #181b21; */
  }
  @media screen and (max-width: 800px) {
    .top {
      width: 100%;
    }
    .courseName {
      display: none;
    }
    .video {
      position: fixed;
      left: 0;
      right: 0;
      width: 100vw;
      height: 40vh;
      border-radius: 0;
    }
    .lock {
      width: 100%;
      height: 40vh;
    }
    .accordion {
      position: fixed;
      left: 0;
      right: 0;
      width: 100vw;
      margin: 0;
      border-radius: 0;
      background-color: #000;
      height: 98vh;
    }
    .hidden {
      display: none;
    }
    .accordion {
      position: initial;
      z-index: 0;
      display: block;
    }
    .contayner {
      display: flex;
      flex-direction: column-reverse;
    }
    .lock {
      position: inherit;
    }
  }
  @media screen and (max-width: 600px) {
    .top {
      width: 100%;
    }
    .courseName {
      display: none;
    }
    .video {
      border-radius: 0;

      position: fixed;
      left: 0;
      right: 0;
      width: 100vw;
      height: 40vh;
    }
    .lock {
      width: 100%;
      height: 40vh;
    }
    .accordion {
      position: fixed;
      left: 0;
      right: 0;
      width: 100vw;
      margin: 0;
      border-radius: 0;
    }
    .hidden {
      display: none;
    }
    .accordion {
      position: initial;
      z-index: 0;
      display: block;
    }
    .contayner {
      display: flex;
      flex-direction: column-reverse;
    }
    .lock {
      position: inherit;
    }
  }
  @media screen and (max-width: 376px) {
    .top {
      width: 100%;
    }
    .courseName {
      display: none;
    }
    .video {
      border-radius: 0;

      position: fixed;
      left: 0;
      right: 0;
      width: 100vw;
      height: 40vh;
    }
    .lock {
      width: 100%;
      height: 40vh;
    }
    .accordion {
      position: fixed;
      left: 0;
      right: 0;
      width: 100vw;
      margin: 0;
      border-radius: 0;
    }
    .hidden {
      display: none;
    }
    .accordion {
      position: initial;
      z-index: 0;
      display: block;
    }
    .contayner {
      display: flex;
      flex-direction: column-reverse;
    }
    .lock {
      position: inherit;
    }
  }
`;
