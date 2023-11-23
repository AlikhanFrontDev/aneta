import React, { useState } from "react";
import styled from "styled-components";
import "../toggle.css";
import axios from "axios";
import Endpoint from "../endpoint";

export default function PaymentPage() {
  const [modal1, setModal1] = useState(false);
  if (modal1) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const toggleModal1 = () => {
    setModal1(!modal1);
  };
  //   ===============================================================================

  const [durationPrem, SetDuration] = useState(0);
  const [amount, setPrice] = useState(0);
  const [number, setNumber] = useState("");
  const [expire, setExpire] = useState("");
  const [responce, setResponse] = useState("");
  const [code, setCode] = useState("");
  const [transactionId, setTransactionId] = useState(0);
  const submitHandler = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    const postData = {
      number,
      expire,
      durationPrem,
      amount,
    };
    console.log(postData);
    axios
      .post(Endpoint + "v1/payment/get-verify-code", postData, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((res) => {
        // if (res.item.message) {

        // } else {

        // }
        setResponse(res.data);
        setTransactionId(res.data.item.transactionId);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const submitHandler1 = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    const postData = {
        transactionId,
        code,
    };
    console.log(postData);
    axios
      .post(Endpoint + "v1/payment/verify-to-buy", postData, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((res) => {
        // if (res.item.message) {

        // } else {

        // }
      })
      .catch((err) => {
        console.log(err);
      });
  };
    console.log(transactionId);

  return (
    <Container>
      <h1 className="title">
        Tanlov faqat va faqat <span className="red">O'ZINGIZ</span> ga bog'liq !
      </h1>
      <div className="boxes">
        <div className="box">
          <h1 className="center mode">SHORT TERM</h1>
          {/* <p className="center">You need to act now.</p> */}
          <p className="center price">
            <span className="discount">0% chegirma</span>147.000
          </p>
          <ul>
            <li>1 OYLIK OBUNA</li>
            <li>O'ZLASHTIRISH KO'RSATKICHI 25% </li>
            <li>BARCHA KURSLARGA YO'LLANMA</li>
            <li>ERKIN GRAFIKDA O'QISH</li>
            <li>COMMUNITY CHAT</li>
            <li>FOYDALI LINKLAR</li>
            <li>QO'LLANMALAR</li>

            <li className="line">YANGI KURSLARGA BEPUL YO'LLANMA</li>
            <li className="line"> KUTUBXONA</li>
            {/* <li className="line">$49.99/month forever</li> */}
          </ul>
          <div
            className="button"
            onClick={() => {
              SetDuration(1);
              setPrice(147000 * 100);
            }}
          >
            <p onClick={toggleModal1}>Sotib olish</p>
          </div>
        </div>
        <div className="box">
          <h1 className="center mode">MEDIUM TERM</h1>
          {/* <p className="center">You need to act now.</p> */}
          <p className="center price">
            <span className="discount">10% chegirma</span>397.000
          </p>
          <ul>
            <li>3 OYLIK OBUNA</li>
            <li>O'ZLASHTIRISH KO'RSATKICHI 50% </li>
            <li>BARCHA KURSLARGA YO'LLANMA</li>
            <li>ERKIN GRAFIKDA O'QISH</li>
            <li>COMMUNITY CHAT</li>
            <li>FOYDALI LINKLAR</li>
            <li>QO'LLANMALAR</li>
            <li>YANGI KURSLARGA BEPUL YO'LLANMA</li>
            <li className="line"> KUTUBXONA</li>
            {/* <li className="line">Cancel anytime, risk-free</li>
            <li className="line">$49.99/month forever</li> */}
          </ul>
          <div
            className="button"
            onClick={() => {
              SetDuration(2);
              setPrice(397000 * 100);
            }}
          >
            <p onClick={toggleModal1}>Sotib olish</p>
          </div>
        </div>
        <div className="box">
          <h1 className="center mode">LONG TERM</h1>
          {/* <p className="center">You need to act now.</p> */}
          <p className="center price">
            <span className="discount">25% chegirma</span>662.000
          </p>
          <ul>
            <li>6 OYLIK OBUNA</li>
            <li>O'ZLASHTIRISH KO'RSATKICHI 75% </li>
            <li>BARCHA KURSLARGA YO'LLANMA</li>
            <li>ERKIN GRAFIKDA O'QISH</li>
            <li>COMMUNITY CHAT</li>
            <li>FOYDALI LINKLAR</li>
            <li>QO'LLANMALAR</li>
            <li>YANGI KURSLARGA BEPUL YO'LLANMA</li>

            <li> KUTUBXONA</li>
            {/* <li className="line">Custom made learning application</li>
            <li className="line">Cancel anytime, risk-free</li>
            <li className="line">$49.99/month forever</li> */}
          </ul>

          <div
            className="button"
            onClick={() => {
              SetDuration(6);
              setPrice(662000 * 100);
            }}
          >
            <p onClick={toggleModal1}>Sotib olish</p>
          </div>
        </div>
      </div>
      {modal1 && (
        <div>
          <div className="modal1">
            <div onClick={toggleModal1} className="overlay1"></div>
            <div className="modal-content1">
              {responce ? (
                <div className="message">
                  <h1>{responce.message}</h1>
                </div>
              ) : (
                ""
              )}
              {responce.success ? (
                <div className="message1">
                  <h1>{responce.item.message}</h1>
                </div>
              ) : (
                ""
              )}
              <>
                {responce.success ? (
                  <div className="form">
                    <form onSubmit={submitHandler1}>
                      <textarea
                        type="number"
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Code XXXX"
                      />
                      <button>Save</button>
                    </form>
                  </div>
                ) : (
                  <div className="form">
                    <form onSubmit={submitHandler}>
                      <input
                        type="text"
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Number"
                      />
                      <input
                        type="text"
                        onChange={(e) => setExpire(e.target.value)}
                        placeholder="Expire"
                      />
                      <button>Save</button>
                    </form>
                  </div>
                )}
              </>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 120vh;
  background-color: #000;
  .message {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #ffffffa6;
    border-radius: 20px;
  }
  .message1 {
    position: absolute;
    top: 100px;
    right: 10px;
    background-color: #ffffffa6;
    border-radius: 20px;
  }
  .message h1 {
    color: #00000084;
    padding: 10px 30px;
  }
  .message1 h1 {
    color: #00000084;
    padding: 10px 30px;
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
  .button {
    background-color: #ffffff98;
    padding: 10px 14px;
    border-radius: 10px;
    color: #fff;
  }
  /* .mode{
    padding: 10px;
  } */
  .red {
    color: red;
    font-size: 50px;
  }
  .title {
    padding: 50px;
    color: #fff;
    font-weight: 800;
    font-size: 44px;
    text-align: center;
  }
  .boxes {
    display: flex;
    justify-content: space-evenly;
  }
  .box {
    background-color: #0b0e13;
    height: 90vh;
    width: 400px;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .center {
    text-align: center;
    /* padding: 10px; */
    color: #fff;
    font-weight: 700;
  }
  .price {
    font-size: 36px;
  }
  .discount {
    /* text-decoration: line-through; */
    color: #ff3131;
  }
  ul {
    list-style: circle;
  }
  li {
    padding: 5px;
    color: #fff;
    font-size: 20px;
  }
  .line {
    text-decoration: line-through;
    color: #ff3131;
  }
  @media screen and (max-width: 992px) {
    height: fit-content;
    .title .red {
      font-size: 30px;
      padding: 30px 0;
    }
    height: 135vh;
    .boxes {
      /* margin-top: 300px; */
      display: flex;
      flex-direction: column;
      column-gap: 30px;
      background-color: #000;
      /* height: 200vh; */
    }
    .box {
      height: fit-content;

      width: 80%;
      margin: 20px auto;
    }
    .mode {
      font-size: 26px;
    }
    li {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 600px) {
    height: fit-content;
    .title .red {
      font-size: 30px;
      padding: 30px 0;
    }
    /* height: 135vh; */
    .boxes {
      /* margin-top: 300px; */
      display: flex;
      flex-direction: column;
      column-gap: 30px;
      background-color: #000;
      /* height: 200vh; */
    }
    .box {
      height: fit-content;

      width: 80%;
      margin: 20px auto;
    }
    .mode {
      font-size: 26px;
    }
    li {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 376px) {
    height: fit-content;
    .title .red {
      font-size: 30px;
      padding: 30px 0;
    }
    /* height: 135vh; */
    .boxes {
      /* margin-top: 300px; */
      display: flex;
      flex-direction: column;
      column-gap: 30px;
      background-color: #000;
      /* height: 200vh; */
    }
    .box {
      height: fit-content;
      width: 80%;
      margin: 20px auto;
    }
    .mode {
      font-size: 26px;
    }
    li {
      font-size: 18px;
    }
  }
`;
