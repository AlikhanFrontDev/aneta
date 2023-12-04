import React, { useState } from "react";
import styled from "styled-components";
import "../toggle.css";
import axios from "axios";
import Endpoint from "../endpoint";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router";

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
  const supernavigate = useNavigate();

  const [durationPrem, SetDuration] = useState(0);
  const [amount, setPrice] = useState(0);
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [number4, setNumber4] = useState("");
  const [expire1, setExpire1] = useState("");
  const [expire2, setExpire2] = useState("");
  const [responce, setResponse] = useState("");
  const [code, setCode] = useState("");
  const [error, setErrorCode] = useState("");
  const [transactionId, setTransactionId] = useState(0);

  const number = `${number1}${number2}${number3}${number4}`;
  // console.log(concatinatedValues1);
  const expire = `${expire1}${expire2}`;
  // console.log(concatinatedValues2);

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
        console.log(res)
        setErrorCode(res.data)
        if (res) {
          localStorage.setItem(
            "token",
            JSON.stringify(res.data.item.tokenDto.token)
          );
        }
        const users = JSON.parse(localStorage.getItem("token"));
        const atts = jwt_decode(users);

        console.log(atts);
        const atributs = atts;
        const roleName = atributs;
        console.log(roleName.role);
        const userrole = roleName.isPremium;

        console.log(userrole);

        if (userrole) {
          supernavigate("/courses");
        } else {
          console.log("fail");
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(transactionId);
  const cancelHandler = (() =>{
    toggleModal1()
    window.location.reload()
  })
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
              <>
                {responce.success ? (
                  <div className="form1">
                    <form className="codeForm" onSubmit={submitHandler1}>
                      {responce.success ? (
                        <div className="message1 height">
                          <h1>{responce.item.message}</h1>
                        </div>
                      ) : (
                        ""
                      )}
                      { ! error.success ? (
                        <div className="message1 height">
                          <h1>{error.message}</h1>
                        </div>
                      ) : (
                        ""
                      )}
                      <input
                        type="number"
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Code XXXX"
                      />
                      <button>Tasdiqlash</button>
                    </form>
                  </div>
                ) : (
                  <div className="form">
                    <form className="cardForm" onSubmit={submitHandler}>
                      {responce ? (
                        <div className="message">
                          <h1>{responce.message}</h1>
                        </div>
                      ) : (
                        ""
                      )}
                      <p className="name">Karta raqamingizni kiriting</p>
                      <div className="number">
                        <input
                          type="text"
                          onChange={(e) => setNumber1(e.target.value)}
                          placeholder="xxxx"
                          maxLength={4}
                        />
                        <input
                          type="text"
                          onChange={(e) => setNumber2(e.target.value)}
                          placeholder="xxxx"
                          maxLength={4}
                        />
                        <input
                          type="text"
                          onChange={(e) => setNumber3(e.target.value)}
                          placeholder="xxxx"
                          maxLength={4}
                        />
                        <input
                          type="text"
                          onChange={(e) => setNumber4(e.target.value)}
                          placeholder="xxxx"
                          maxLength={4}
                        />
                      </div>
                      <p className="name margin">Amal qilish muddati</p>
                      <div className="number">
                        <input
                          type="text"
                          onChange={(e) => setExpire1(e.target.value)}
                          placeholder="xx"
                          maxLength={2}
                        />
                        <input
                          type="text"
                          onChange={(e) => setExpire2(e.target.value)}
                          placeholder="xx"
                          maxLength={2}
                        />
                      </div>
                      <div className="buttons">
                        <button>Yuborish</button>
                        <button onClick={cancelHandler}>Bekor qilish</button>
                      </div>
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
  .name {
    color: #fff;
    margin: 0;
    letter-spacing: 1px;
  }
  .number {
    display: flex;
  }
  .number input {
    width: 25%;
  }
  .margin {
    margin-top: 20px;
  }
  .message {
    background-color: #ffffffa6;
    width: 100%;
    margin-bottom: 10px;
    /* top: 99px;
    right: 0;
    right: 50%;
    left: 30%;
    position: absolute; */
  }
  .message1 {
    /* margin-top: 100px; */
    background-color: #000000a6;
    width: 100%;

    /* margin-bottom: 10px; */
  }
  .message h1 {
    text-align: center;
    font-size: 1rem;
    color: #222;
    padding: 10px 30px;
  }
  .message1 h1 {
    font-size: 16px;
    color: #fff;
    padding: 10px 30px;
  }
  .form {
    width: 40%;
    margin: 10% 30%;
    /* margin-top: 50px; */
    background-color: #000000c2;
    height: 60vh;
    padding-left: 100px;
    padding-right: 100px;
  }
  .cardForm {
    height: 90%;
    padding: 20% 0;
    /* height: fit-content; */
    display: flex;
    flex-direction: column;
  }
  .codeForm{
    /* padding-top: 1px; */
  }
  .form1 {
    width: 40%;
    margin: 10% 30%;
    /* margin-top: 50px; */
    background-color: #000000c2;
    height: 40vh;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    align-items: center;
  }

  input {
    padding: 10px 20px;
    border: none;
    background-color: #000000b0;
    color: red;
    margin: 2% 0;
    border-radius: 7px;
  }
  .buttons {
    width: 100%;
  }
  button {
    width: 50%;
    padding: 10px 20px;
    border: none;
    background-color: #000000b0;
    color: red;
    margin: 2% 0;
    border-radius: 7px;
  }
  .button {
    background-color: #ffffff47;
    padding: 10px 14px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
  }
  .button p {
    margin: 0;
    color: #000;
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
    .modal-content1{
      margin: 50% auto;
      /* background-color: red; */
    }
    .form{
      width: 100%;
      margin: 0;
      
    }
    .form1{
      width: 100%;
      margin: 0;
      
    }
    .number{
      /* flex-direction: column; */
    }
    .number input{
      width: 50%;
    }

    .form {
      padding: 0;
    }
    .cardForm{
      margin: 0 auto;
      width: 90%;
    }
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
