import React from "react";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Courses from "../components/courses";
import Info from "../components/info";
import ControlledAccordions from "../components/accordion";
import Footer from "../components/footer";
import NewCourse from "../components/newCourse";
import BannerTwo from "../components/bannerTwo";
import CaruselTwo from "../components/caruselTwo";
import Videos from "../components/videos";
import Pricelist from "../components/pricelist";
import ComingSoon from "../components/comingSoon";

import styled from "styled-components";

export default function Mainpage() {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Courses />
      <ComingSoon />
      <CaruselTwo />
      {/* <NewCourse/> */}
      {/* <BannerTwo/> */}
      {/* <CaruselTwo/> */}
      <Videos />
      <Info />
      <Pricelist />
      <ControlledAccordions />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  .demo {
    position: fixed;
    color: black;
    font-size: 14px;
    width: 100%;
    background-color: #ff000065;
    display: flex;
    justify-content: space-between;
    height: 3vh;
  }
  .demo p{
    display: inline;
  }
`;
