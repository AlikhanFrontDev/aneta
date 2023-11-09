import React, { useEffect, useState } from "react";

import "../../toggle.css";
import styled from "styled-components";
import Endpoint from "../../endpoint";
import axios from "axios";
export default function AddCarusel() {
  //   get data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const fetchData = async () => {
      try {
        const response = await axios.get(Endpoint + "corusel/all", {
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
  // ================================================================================
  const [file, setSelectedFile] = useState(null);
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const onUpload = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      // Replace 'your-upload-api-endpoint' with the actual API endpoint to upload the file.
      axios
        .post(Endpoint + `corusel/create`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("File uploaded successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    }
  };
  // delete

  const [empty, setEmpty] = useState("");
  const deleteRequestHandler = async (id) => {
    const emptyData = {
      empty,
    };
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.delete(
      Endpoint + `corusel/delete/${id}`,

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

  return (
    <Container>
      <div onClick={toggleModal1} className="addButton">
        +
      </div>
      <div className="images">
        {loading ? (
          <p>Loading data...</p>
        ) : data ? (
          <>
            {data.map((data) => (
              <div className="image">
                <img
                  src={`https://prodgtlservice.uz/api/photo/show/${data.photoId}`}
                  alt=""
                />
                <div
                  onClick={() => deleteRequestHandler(data.id)}
                  className="delete"
                >
                  Delete
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>No data available.</p>
        )}
      </div>
      {modal1 && (
        <div>
          <div className="modal1">
            <div onClick={toggleModal1} className="overlay1"></div>
            <div className="modal-content1">
              <div className="form">
                <form>
                  <input type="file" onChange={onFileChange} />
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
    background-color: #000;
    color: #fff;
    height: 50px;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
  }
`;
