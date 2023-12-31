import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Pricelist() {
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
          <Link className="button" to={"/register"}>
            <p>Sotib olish</p>
          </Link>
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
          <Link className="button" to={"/register"}>
            <p>Sotib olish</p>
          </Link>
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
          <Link className="button" to={"/register"}>
            <p>Sotib olish</p>
          </Link>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 120vh;
  background-color: #000;
  /* .mode{
    padding: 10px;
  } */
  a{
    text-decoration: none;
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
