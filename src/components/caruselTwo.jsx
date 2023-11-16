import React from "react";
import Carousel from "better-react-carousel";
import image from "../assets/img/chat.jpg";
import styled from "styled-components";

export default function CaruselTwo() {
  return (
    <Container>
      <Carousel cols={4} rows={1} gap={5} loop={true} containerClassName="carusel">
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
  @media screen and (max-width: 768px) {

    img {
      width: 90vw; /* Adjust image width for mobile */
      max-width: 300px; /* Set a maximum width */
      margin: 0 auto; /* Center the image */
    }

    /* Adjust the number of columns for mobile */
    /* Setting 'cols' to 1 will display only one column on mobile devices */
    .carusel {
      display: grid !important;
      grid-template-columns: 1fr !important;
    }
  }
`;
