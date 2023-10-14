import styled from "@emotion/styled";
import React from "react";

export default function Footer() {
  return (
    <Container>
      <div className="infos">
        <ul>
          <li>Affiliate link</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Support: support@jointherealworld.com</li>
        </ul>
      </div>
      <div className="container">
        <div className="box">
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            voluptate dicta explicabo nulla quos pariatur! Iure voluptate optio
            et obcaecati.
          </p>
        </div>
        <div className="box">
          <h1>Lorem ipsum dolor sit.</h1>
          <p>Tel: +23232323</p>
          <p>adress: 7395yuf</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            neque excepturi, non provident numquam iusto?
          </p>
        </div>
        <div className="box">
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            voluptate dicta explicabo nulla quos pariatur! Iure voluptate optio
            et obcaecati.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            voluptate dicta explicabo nulla quos pariatur! Iure voluptate optio
            et obcaecati.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            voluptate dicta explicabo nulla quos pariatur! Iure voluptate optio
            et obcaecati.
          </p>
        </div>
        <div className="box">
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            voluptate dicta explicabo nulla quos pariatur! Iure voluptate optio
            et obcaecati.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            voluptate dicta explicabo nulla quos pariatur! Iure voluptate optio
            et obcaecati.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            voluptate dicta explicabo nulla quos pariatur! Iure voluptate optio
            et obcaecati.
          </p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #0b0e13;
  width: 100%;
  height: 100vh;
  .infos {
    /* background-color: red; */
    text-align: center;
    padding: 60px 0;
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
  .container {
    display: flex;
    width: 90%;
    margin: 0 5%;
  }
  p {
    margin: 10px 0;
  }
  .box {
    margin: 5px;
  }
  h1 {
    color: #fff;
    font-size: 20px;
  }
`;
