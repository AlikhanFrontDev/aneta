import styled from "@emotion/styled";
import React from "react";

export default function Footer() {
  return (
    <Container>
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
          <p>
            Tel: +23232323
          </p>
          <p>
            adress: 7395yuf
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias neque excepturi, non provident numquam iusto?
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
  /* background-color: red; */
  width: 100%;
  height: 40vh;
  margin-top: 100px ;
  .container{
    display: flex;
    width: 90%;
    margin: 0 5%;
  }
  p{
    margin: 10px 0;
  }
  .box{
    margin: 5px;
  }
  h1{
    color: #fff;
    font-size: 20px;
  }
`;
