import React, { useState, useEffect } from "react";

import "../../toggle.css";
import styled from "styled-components";
import Endpoint from "../../endpoint";
import axios from "axios";

export default function User() {
  const [query, setQuery] = useState("");
  const [userId, UserId] = useState("");

  // user add ===================================================
  const [fullName, setName] = useState("");
  const [username, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    const postData = {
      fullName,
      username,
      password,
      phoneNumber,
    };
    console.log(postData);
    axios
      .post(Endpoint + "v1/auth/register", postData, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //   add premium ===================================================
  const [duration, setDuration] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const submitHandler1 = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    const postData = {
      duration,
      userId,
    };
    console.log(postData);
    axios
      .post(Endpoint + "v1/subscription/add-subscription", postData, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
//   update duration
  const submitHandler3 = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    const postData = {
      duration,
      userId,
    };
    console.log(postData);
    axios
      .post(Endpoint + "v1/subscription/renew-subscription", postData, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitHandler4 = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    const postData = {
      title,
      userId,
      body
    };
    console.log(postData);
    axios
      .post(Endpoint + "v1/email/send-message", postData, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //   get data ===================================================
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const fetchData = async () => {
      try {
        const response = await axios.get(Endpoint + "v1/users/all-user", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setData(response.data.item);
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
  // toggle 1
  const [modal1, setModal1] = useState(false);
  if (modal1) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const toggleModal1 = () => {
    setModal1(!modal1);
  };
  const [modal2, setModal2] = useState(false);
  if (modal2) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const toggleModal2 = () => {
    setModal2(!modal2);
  };
  const [modal3, setModal3] = useState(false);
  if (modal3) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const toggleModal3 = () => {
    setModal3(!modal3);
  };
  const [modal4, setModal4] = useState(false);
  if (modal3) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const toggleModal4 = () => {
    setModal4(!modal4);
  };
  //   ================================================================
  return (
    <Container>
      <div className="add" onClick={toggleModal1}>
        Add User
      </div>
      <input
        type="search"
        placeholder="search"
        className="search"
        onChange={(event) => setQuery(event.target.value)}
      />
      <table>
        <thead>
          <th>id</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Add Pro</th>
          <th>Update Pro</th>
          <th>Massage</th>
        </thead>
        {loading ? (
          <p>Loading data...</p>
        ) : data ? (
          <>
            {data
              .filter((post) => {
                if (query === "") {
                  return post;
                } else if (
                  post.fullName.toLowerCase().includes(query.toLowerCase())
                ) {
                  return post;
                } else if (
                  post.phoneNumber.toLowerCase().includes(query.toLowerCase())
                ) {
                  return post;
                }
              })
              .map((data) => (
                <tr key={data.id} value={data.id}>
                  <td>{data.id}</td>
                  <td>{data.fullName}</td>
                  <td>{data.phoneNumber}</td>
                  <td>{data.username}</td>
                  {!data.premium ? (
                    <td onClick={toggleModal2}>
                      <p
                        className="button blue"
                        onClick={() => UserId(data.id)}
                      >
                        Add
                      </p>
                    </td>
                  ) : (
                    <td>
                    <p
                      className="button disabled"
                      onClick={() => UserId(data.id)}
                    >
                      Pro
                    </p>
                  </td>
                  )}
                  <td onClick={toggleModal3}>
                    <p 
                    className="button orenge" 
                    onClick={() => UserId(data.id)}
                    >Update</p>
                  </td>
                  <td onClick={toggleModal4}>
                    <p 
                    className="button yellow"
                    onClick={() => UserId(data.id)}
                    >Massage</p>
                  </td>
                </tr>
              ))}
          </>
        ) : (
          <p>No data available.</p>
        )}
      </table>
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
                    placeholder="Ism"
                  />
                  <input
                    type="Email"
                    onChange={(e) => setSurname(e.target.value)}
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="parol"
                  />
                  <input
                    type="number"
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="phone number"
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
          <div className="modal2">
            <div onClick={toggleModal2} className="overlay2"></div>
            <div className="modal-content2">
              <div className="form">
                <h1>Add</h1>
                <form onSubmit={submitHandler1}>
                  <input
                    type="number"
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Duration"
                  />
                  <button>Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {modal3 && (
        <div>
          <div className="modal1">
            <div onClick={toggleModal3} className="overlay1"></div>
            <div className="modal-content1">
              <div className="form">
                <h1>Update</h1>
                <form onSubmit={submitHandler3}>
                  <input
                    type="number"
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Duration"
                  />
                  <button>Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {modal4 && (
        <div>
          <div className="modal1">
            <div onClick={toggleModal4} className="overlay1"></div>
            <div className="modal-content1">
              <div className="form">
                <h1>Update</h1>
                <form onSubmit={submitHandler4}>
                  <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Body"
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
.disabled{
    background-color: #999;
    cursor: default !important;
}
  .form {
    width: 40%;
    margin: 10% 30%;
    background-color: #0000008f;
    height: 60vh;
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
  .add {
    background-color: #000;
    color: #fff;
    padding: 10px 30px;
    width: 150px;
    text-align: center;
    margin-bottom: 20px;
    border-radius: 12px;
    cursor: pointer;
  }
  .blue {
    background-color: blue;
  }
  .orenge {
    background-color: orange;
  }
  .yellow {
    background-color: yellow;
    color: #000 !important;
  }
  .button {
    border-radius: 12px;
    cursor: pointer;
    padding: 10px 20px;
    color: #fff;
  }
  th {
    background-color: black;
    padding: 20px;
  }
  td {
    padding: 20px;
    /* border-bottom: 1px solid red; */
    color: #fff;
    background-color: #333;
  }
`;
