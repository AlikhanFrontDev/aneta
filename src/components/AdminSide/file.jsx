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
export default function File() {
  // post topic
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    const postData = {
      empty,
    };
    console.log(postData);
    axios
      .post(Endpoint + `v1/sourceFile/createTopic/?name=${name}`, postData, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // add file =======================
  const [topicId, setID] = useState("");
  const [description, setDescription] = useState("");

  const [file, setSelectedFile] = useState(null);
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const submitHandler2 = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      axios
        .post(
          Endpoint + `v1/sourceFile/add-attachment/${topicId}/${description}`,
          formData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )

        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
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
    const tokenn = setInterval(fetchData, 1000); // Every 5 seconds?
    fetchData(); // Initial request
    return () => {
      // Don't forget to cleanup the interval when this effect is cleaned up.
      clearInterval(tokenn);
    };
  }, []);

  // ===================================================Toggle

  const [modal1, setModal1] = useState(false);
  if (modal1) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const toggleModal1 = () => {
    setModal1(!modal1);
  };

  // delete

  const [empty, setEmpty] = useState("");
  const deleteRequestHandler = async (id) => {
    const emptyData = {
      empty,
    };
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.delete(
      Endpoint + `v1/sourceFile/deleteTopic/${id}`,

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
  // delete 2
  const [fileId, setId] = useState("");
  const deleteRequestHandler2 = async (id, fileid) => {
    const emptyData = {
      empty,
    };
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.delete(
      Endpoint + `v1/sourceFile/delete-file/delete/${fileid}/${id}`,

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

  //   ================================================
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const sourceFilesMap = data.reduce((acc, item) => {
    acc[item.id] = item.sourceFiles;
    return acc;
  }, {});

  const [modal2, setModal2] = useState(false);
  if (modal2) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const toggleModal2 = () => {
    setModal2(!modal2);
  };
  return (
    <Container>
      <div onClick={toggleModal1} className="addButton">
        +
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
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{ width: "33%", flexShrink: 0 }}
                      className="summary"
                    >
                      <div className="buttons">
                        <div onClick={toggleModal2}>
                          <p
                            onClick={() => setID(item.id)}
                            className="addButton"
                          >
                            add file
                          </p>
                        </div>
                        <div onClick={() => deleteRequestHandler(item.id)}>
                          <p className="delete">delete</p>
                        </div>
                      </div>
                    </Typography>
                  </AccordionSummary>
                  {sourceFilesMap[item.id].map((topic) => (
                    <AccordionDetails key={topic.id}>
                      <div className="detailes">
                        <a
                          className="id"
                          href={`https://prodgtlservice.uz/api/file/download/${topic.fileId}`}
                        >
                          file
                        </a>
                        <div className="name">{topic.description}</div>
                        <div
                          className="buttons"
                        >
                          <p
                            className="delete"
                            onClick={() => deleteRequestHandler2(topic.id, item.id)}
                          >
                            delete
                          </p>
                        </div>
                      </div>
                    </AccordionDetails>
                  ))}
                </Accordion>
              ))}
            </>
          ) : (
            <p>No data available.</p>
          )}
        </table>
      </div>
      {modal2 && (
        <div>
          <div className="modal2">
            <div onClick={toggleModal2} className="overlay2"></div>
            <div className="modal-content1">
              <div className="form">
                <form onSubmit={submitHandler2}>
                  {topicId} - id dagi Modul uchun file qo'shish
                  <input
                    type="file"
                    onChange={onFileChange}
                    placeholder="Course name"
                  />
                  <input
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="description"
                  />
                  <button>Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {modal1 && (
        <div>
          <div className="modal1">
            <div onClick={toggleModal1} className="overlay1"></div>
            <div className="modal-content1">
              <div className="form">
                <form onSubmit={submitHandler}>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="name"
                  />
                  <button>Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        // onChange={onFileChange}
      )}
    </Container>
  );
}

const Container = styled.div`
  .buttons {
    display: flex;
    justify-content: space-between;
    width: 200px;
  }
  .name {
    width: 70%;
  }
  .id {
    width: 5%;
    display: inline;
    margin: 0 20px;
  }
  .tableHeader {
    width: 100vw;
  }
  .top1 {
    background-color: #333;
    width: 60vw;
  }
  .detailes {
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  .images {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .image {
    margin-top: 20px;
    background-color: black;
    height: 500px;
    width: 220px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  img {
    object-fit: cover;
    height: 400px;
    width: 200px;
    border-radius: 12px;
    background-color: red;
  }
  .delete {
    cursor: pointer;
    background-color: red;
    color: #fff;
    height: 50px;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
  }
  .addButton {
    cursor: pointer;
    background-color: #222;
    color: #fff;
    height: 50px;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
  }
`;
