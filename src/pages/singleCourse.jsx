import React from "react";
import Navbar from "../components/navbar";
import styled from "styled-components";
import CourseBanner from "../components/courseBanner";

export default function SingleCourse() {
  return (
    <Container>
      <Navbar />
      <CourseBanner/>
    </Container>
  );
}

const Container = styled.div`
    min-height: 180vh;
`
