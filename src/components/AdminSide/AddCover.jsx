import React, { useEffect, useState } from "react";

import "../../toggle.css";
import styled from "styled-components";
import Endpoint from "../../endpoint";
import axios from "axios";

export default function CoverAdd() {
  const [courseName, setCourseName] = useState("");

  const [file, setSelectedFile] = useState(null);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onUpload = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      // Replace 'your-upload-api-endpoint' with the actual API endpoint to upload the file.
      axios.post(Endpoint + `v1/course/add-cover/${courseName}`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        console.log('File uploaded successfully:', response.data);
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
    }
  };
//   -----------------------------------------------------------------

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
//   const handleFileSelect = (event) => {
//     setSelectedFile(event.target.files[0])
//   }
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
            <th>Description</th>
          </tr>
          {loading ? (
            <p>Loading data...</p>
          ) : data ? (
            <>
              {data.map((data) => (
                <tr key={data.id} value={data.id}>
                  <td>{data.id}</td>
                  <img src={`https://prodgtlservice.uz/api/photo/show/${data.coverPhotoId}`}/>
                  <td>{data.courseName}</td>
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
                <form 
                // onSubmit={submitHandler}
                >
                  <input
                    type="file" onChange={onFileChange}
                    placeholder="Course name"
                  />
                  {loading ? (
                    <p>Loading data...</p>
                  ) : data ? (
                    <>
                      <select onChange={(e) => setCourseName(e.target.value)}>
                        <option selected="selected">Kursni tanlang</option>
                        {data.map((data) => (
                          <option value={data.id}>{data.courseName}</option>
                        ))}
                      </select>
                    </>
                  ) : (
                    <p>No data available.</p>
                  )}
                  <button onClick={onUpload}>Save</button>
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
  img{
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
    height: 70px;
    color: green;
  }
`;
