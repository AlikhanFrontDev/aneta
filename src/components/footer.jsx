import styled from "@emotion/styled";
import React from "react";

export default function Footer() {
  return (
    <Container>
      <div className="infos">
        <ul>
          <li>BARCHA HUQUQLAR HIMOYALANGAN!</li>
          <li>MCHJ «REVX AGENCY» STIR: 308 818 335. Guvohnoma raqami: 1032191. </li>
          <li>Email: info@prodigitalcourse.org</li>
        </ul>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #0b0e13;
  width: 100%;
  height: 40vh;
  .infos {
    /* background-color: red; */
    text-align: center;
    padding: 60px auto;
  }
  .infos ul {
    list-style: none;
  }
  .infos li {
    color: #fff;
    font-size: 26px;
    text-decoration: underline;
    cursor: pointer;
  }


  @media screen and (max-width: 800px) {
    .infos ul{
      padding-top: 50px;
    }
    .infos li{
      font-size: 20px;
      width: 90%;
      margin: 0 auto 30px auto;
    }
  }

  @media screen and (max-width: 600px) {
    .infos ul{
      padding-top: 50px;
    }
    .infos li{
      font-size: 20px;
      width: 90%;
      margin: 0 auto 30px auto;

    }
  }
  @media screen and (max-width: 376px) {
    .infos ul{
      padding-top: 50px;
    }
    .infos li{
      font-size: 20px;
      width: 90%;
      margin: 0 auto 30px auto;

    }
  }
`;
