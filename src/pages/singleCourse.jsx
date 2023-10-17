import React from "react";
import Navbar from "../components/navbar";
import styled from "styled-components";
import CourseBanner from "../components/courseBanner";
import Footer from "../components/footer";

export default function SingleCourse() {
  return (
    <Container>
      <Navbar />
      <CourseBanner/>
      <Footer/>
    </Container>
  );
}

const Container = styled.div`
    min-height: 180vh;
`
