import React, { useEffect, useState } from "react";

import "../../toggle.css";
import styled from "styled-components";
import Endpoint from "../../endpoint";
import axios from "axios";

export default function CourseAdd() {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    const postData = {
      courseName,
      description,
    };
    console.log(postData);
    axios
      .post(Endpoint + "v1/course/create", postData, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [modal1, setModal1] = useState(false);
  if (modal1) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const toggleModal1 = () => {
    setModal1(!modal1);
  };

  //   get data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const fetchData = async () => {
      try {
        const response = await axios.get(Endpoint + "v1/course/all", {
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

  console.log(data.item);

  const [empty, setEmptyData] = useState("");

  // delete hendler
  const deleteRequestHandler = async (id) => {
    const emptyData = {
      empty,
    };
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.delete(
      Endpoint + `v1/course/delete/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
      emptyData,
    );
    // window.location.reload(false);

    }
    // ======================================================================
    // publish Hendler
    const [empty1, setEmptyData1] = useState("");
    const publishHandler = async (id) => {
      const emptyData = {
        empty1,
      };
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.put(
        Endpoint + `v1/course/publish/${id}`,
        emptyData,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
    // window.location.reload(false);

    };
    // if (response.data.id) {
    //   setMessage(response.data.id);
    // }
    // window.location.reload(false);

  return (
    <Container>
      <div onClick={toggleModal1}>
        <h4 className="addButton">+</h4>
      </div>
      <div className="tableHeader">
        <table>
          <tr className="tableTitle">
            <th className="id">ID</th>
            <th>Name</th>
            <th>Cover</th>
            <th>Status</th>
            <th className="id">Delete</th>
            <th className="id">Edit</th>
            <th className="id">Publish</th>
          </tr>
          {loading ? (
            <p>Loading data...</p>
          ) : data ? (
            <>
              {data.map((data) => (
                <tr key={data.id} value={data.id}>
                  <td>{data.id}</td>
                  <td>{data.courseName}</td>
                  <img
                    src={`https://prodgtlservice.uz/api/photo/show/${data.coverPhotoId}`}
                  />
                  {!data.published ? (
                    <td>not published</td>
                  ) : (
                    <td>published</td>
                  )}
                  <td className="delete">
                    <p onClick={() => deleteRequestHandler(data.id)}>delete</p>
                  </td>
                  <td className="edit">
                    <p>Edit</p>
                  </td>
                  <td
                    className="publish"
                    onClick={() => publishHandler(data.id)}
                  >
                    {!data.published ? (
                      <p>publish</p>
                    ) : (
                      <p className="unpublish">unpublish</p>
                    )}
                  </td>
                </tr>
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
              <div className="form">
                <form onSubmit={submitHandler}>
                  <input
                    type="text"
                    onChange={(e) => setCourseName(e.target.value)}
                    placeholder="Course name"
                  />
                  <input
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
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
  .publish {
    background-color: #000;
  }
  .publish p {
    padding: 10px;
    background-color: yellow;
    color: #000;
    margin: 0 10px;
    border-radius: 12px;
    cursor: pointer;
  }
  .unpublish {
    background-color: pink !important;
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
  }
  td {
    text-align: center;
    background-color: #00000077;
    border-bottom: 1px solid #ffffff44;
    color: green;
    max-height: 70px;
  }
`;
