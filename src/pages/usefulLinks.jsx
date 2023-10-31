import React from "react";
import styled from "styled-components";
import background from "../assets/img/background.jpg";
import Navbar from "../components/navbar";
import GuestNan from "../components/guestnav";

export default function UsefulLinks() {
  return (
    <Container>
        <GuestNan/>
      <img src={background} alt="" className="banimage" />
      
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #000000b0;
  .banimage {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
  }
`;
