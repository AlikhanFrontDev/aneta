import React from "react";
import styled from "styled-components";

export default function Pricelist() {
  return (
    <Container>
      <h1 className="title">THE CHOICE IS YOURS</h1>
      <div className="boxes">
        <div className="box">
          <h1 className="center mode">Standart</h1>
          {/* <p className="center">You need to act now.</p> */}
          <p className="center price"><span className="discount">$147</span> $49.99</p>
          <ul>
            <li>Simple-step-by-step tutorials</li>
            <li>19 wealth creation methods</li>
            <li>Access to millionaire mentors</li>
            <li>Community chat groups</li>
            <li>No experience needed</li>
            <li className="line">Custom made learning application</li>
            <li className="line">Cancel anytime, risk-free</li>
            <li className="line">$49.99/month forever</li>
          </ul>
        </div>
        <div className="box">
          <h1 className="center mode">Standart</h1>
          {/* <p className="center">You need to act now.</p> */}
          <p className="center price"><span className="discount">$147</span> $49.99</p>
          <ul>
            <li>Simple-step-by-step tutorials</li>
            <li>19 wealth creation methods</li>
            <li>Access to millionaire mentors</li>
            <li>Community chat groups</li>
            <li>No experience needed</li>
            <li className="line">Custom made learning application</li>
            <li className="line">Cancel anytime, risk-free</li>
            <li className="line">$49.99/month forever</li>
          </ul>
        </div>
        <div className="box">
          <h1 className="center mode">Standart</h1>
          {/* <p className="center">You need to act now.</p> */}
          <p className="center price"><span className="discount">$147</span> $49.99</p>
          <ul>
            <li>Simple-step-by-step tutorials</li>
            <li>19 wealth creation methods</li>
            <li>Access to millionaire mentors</li>
            <li>Community chat groups</li>
            <li>No experience needed</li>
            <li className="line">Custom made learning application</li>
            <li className="line">Cancel anytime, risk-free</li>
            <li className="line">$49.99/month forever</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: #000;
  /* .mode{
    padding: 10px;
  } */
  .title{
    padding: 50px;
    color: #0b0e13;
    font-weight: 800;
    font-size: 44px;
    text-align: center;
  }
  .boxes{
    display: flex;
    justify-content: space-evenly;
  }
  .box {
    background-color: #0b0e13;
    height: 70vh;
    width: 400px;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .center{
    text-align: center;
    /* padding: 10px; */
    color: #fff;
    font-weight: 700;
  }
  .price{
    font-size: 36px;
  }
  .discount{
    text-decoration: line-through;
    color: #FF3131;
  }
  ul{
    list-style: circle;
  }
  li{
    padding: 5px;
    color: #fff;
    font-size: 20px;
  }
  .line{
    text-decoration: line-through;
    color: #FF3131;
  }
`;
