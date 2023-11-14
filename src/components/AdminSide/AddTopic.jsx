import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "../../toggle.css";
import styled from "styled-components";
import Endpoint from "../../endpoint";
import axios from "axios";

export default function AddTopic() {
  const [courseName, setCourseName] = useState("");
  const [name, setName] = useState("");
  const [empty, setEmpty] = useState("");
  const [kursId, setKursID] = useState("");
  const [topicId, topicID] = useState("");
  const [messages, setMassage] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    const postData = {
      empty,
    };
    console.log(postData);
    axios
      .post(Endpoint + `v1/topic/create/${kursId}?name=${name}`, postData, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((res) => {
        console.log(res.data.message);
        setMassage(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // =========================================================================================
  const submitHandler2 = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    const postData = {
      topicId,
      name,
    };
    console.log(postData);
    axios
      .post(Endpoint + `v1/lesson/create`, postData, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // =========================================================================================
  const deleteRequestHandler = async (id) => {
    const emptyData = {
      empty,
    };
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.delete(
      Endpoint + `v1/topic/delete/${id}`,

      {
        headers: { Authorization: `Bearer ${token}` },
      },
      emptyData
    );
    console.log(token);

    // if (response.data.id) {
    //   setMessage(response.data.id);
    // }
    // window.location.reload(false);
  };
  // ===========================================================================================
  const [modal1, setModal1] = useState(false);
  if (modal1) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const toggleModal1 = () => {
    setModal1(!modal1);
  };
  // =========================================================================================
  const [modal2, setModal2] = useState(false);
  if (modal2) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const toggleModal2 = () => {
    setModal2(!modal2);
  };

  //   get data
  const [data, setData] = useState([]);
  // const [topicDtoList, setTopicDtoList] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const fetchData = async () => {
      try {
        const response = await axios.get(
          Endpoint + "v1/course/all-with-topics",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setData(response.data.item);

        const { item } = response.data;
        // const topicList = item[0].topicDtoList;
        // setTopicDtoList(topicList);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        // Set loading to false whether the request succeeds or fails
        setLoading(false);
      }
    };
    fetchData();
    const tokenn = setInterval(fetchData, 1000); // Every 5 seconds?
    fetchData(); // Initial request
    return () => {
      // Don't forget to cleanup the interval when this effect is cleaned up.
      clearInterval(tokenn);
    };
  }, []);

  // console.log(topic);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // ====================================================================================

  const topicDtoMap = data.reduce((acc, item) => {
    acc[item.id] = item.topicDtoList;
    return acc;
  }, {});

  return (
    <Container>
      <div onClick={toggleModal1}>
        <h4 className="addButton">+</h4>
      </div>
      <div className="tableHeader">
        <table>
          <tr className="tableTitle"></tr>
          {loading ? (
            <p>Loading data...</p>
          ) : data ? (
            <>
              {data.map((item) => (
                <Accordion
                  key={item.id}
                  // onClick={() => RequestHandler(data.id)}
                  className="top1"
                  expanded={expanded === `panel${item.id}`}
                  onChange={handleChange(`panel${item.id}`)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    // className="top"
                  >
                    <Typography
                      sx={{ width: "33%", flexShrink: 0 }}
                      className="summary"
                    >
                      <div className="id">{item.id}</div>
                      {item.courseName}
                    </Typography>
                  </AccordionSummary>
                  {topicDtoMap[item.id].map((topic) => (
                    <AccordionDetails key={topic.id}>
                      <div className="detailes">
                        <div className="id">{topic.id}</div>
                        <div className="name">{topic.name}</div>
                        <td className="addVideo" onClick={toggleModal2}>
                          <p onClick={() => topicID(topic.id)}>Add Lesson</p>
                        </td>
                        <td className="delete">
                          <p onClick={() => deleteRequestHandler(topic.id)}>
                            delete
                          </p>
                        </td>
                        <td className="edit">
                          <p>Edit</p>
                        </td>
                      </div>
                    </AccordionDetails>
                  ))}
                </Accordion>
                // <tr key={data.id} value={data.id}>
                //   <td>{data.id}</td>
                //   <td>{data.courseName}</td>
                // </tr>
              ))}
            </>
          ) : (
            <p>No data available.</p>
          )}
        </table>
      </div>
      {modal1 && (
        <div>
          <div className="modal1">
            <div onClick={toggleModal1} className="overlay1"></div>
            <div className="modal-content1">
              <h1>{messages}</h1>
              <div className="form">
                <div className="x" onClick={toggleModal1}>
                  X
                </div>
                <form onSubmit={submitHandler}>
                  {loading ? (
                    <p>Loading data...</p>
                  ) : data ? (
                    <>
                      <select onChange={(e) => setKursID(e.target.value)}>
                        <option selected="selected">Kursni tanlang</option>
                        {data.map((data) => (
                          <option value={data.id}>{data.courseName}</option>
                        ))}
                      </select>
                    </>
                  ) : (
                    <p>No data available.</p>
                  )}
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Modul name"
                  />
                  <button>Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {modal2 && (
        <div>
          <div className="modal1">
            <div onClick={toggleModal2} className="overlay1"></div>
            <div className="modal-content1">
              <div className="form">
                <div className="x" onClick={toggleModal2}>X</div>
                <form onSubmit={submitHandler2}>
                  {topicId} - id dagi Modul uchun mavzu qo'shish
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="mavzu"
                  />
                  <button>Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`

  .x {
    text-align: end;
    cursor: pointer;
  }
  select {
    padding: 10px 20px;
    border: none;
    background-color: #000000b0;
    color: red;
    margin: 2% 0;
    border-radius: 7px;
  }
  .addVideo {
    background-color: #000;
    width: 200px;
  }
  .addVideo p {
    padding: 10px;
    background-color: blue;
    color: #fff;
    margin: 0 10px;
    border-radius: 12px;
    cursor: pointer;
  }
  .top1 {
    background-color: black;
    /* z-index: -2; */
  }
  .detailes {
    /* z-index: -1; */
    width: 60vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .name {
    width: 70%;
  }
  .edit {
    background-color: #000;
  }
  .edit p {
    padding: 10px;
    background-color: orange;
    color: #fff;
    margin: 0 10px;
    border-radius: 12px;
    cursor: pointer;
  }

  .delete {
    background-color: #000;
  }
  .delete p {
    padding: 10px;
    background-color: red;
    color: #fff;
    margin: 0 10px;
    border-radius: 12px;
    cursor: pointer;
  }
  .tableHeader {
    width: 100vw;
  }

  img {
    height: 100px;
    background-color: red;
    width: 100%;
    padding: auto;
    object-fit: cover;
  }
  .form {
    width: 40%;
    margin: 10% 30%;
    background-color: #0000008f;
    height: 50vh;
    padding: 100px;
  }
  form {
    display: flex;
    flex-direction: column;
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
  .addButton {
    cursor: pointer;
    background-color: #000;
    color: #fff;
    height: 50px;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
  }
  th {
    background-color: black;
    color: #fff;
    padding: 20px 0;
    width: 33%;
    margin: 100px 0;
    text-align: center;
  }
  .id {
    width: 5%;
    display: inline;
    margin: 0 20px;
  }
  td {
    text-align: center;
    background-color: #00000077;
    border-bottom: 1px solid #ffffff44;
    color: green;
    height: 70px;
  }
`;
