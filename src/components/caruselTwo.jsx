import React from "react";
import Carousel from "better-react-carousel";
import image from "../assets/img/chat.jpg";
import styled from "styled-components";

export default function CaruselTwo() {
  return (
    <Container>
      <Carousel cols={4} rows={1} gap={5} loop={true}>
        <Carousel.Item>
          <img src={image} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image} />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: #0b0e13;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  img {
    /* object-fit: cover; */
    width: 350px;
    border-radius: 10px;
  }
`;
