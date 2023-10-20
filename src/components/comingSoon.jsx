import React from "react";
import Carousel from "better-react-carousel";
import image1 from "../assets/img/carusel/carusel1.jpg";
import image2 from "../assets/img/carusel/carusel2.jpg";
import image3 from "../assets/img/carusel/carusel3.jpg";
import image4 from "../assets/img/carusel/carusel4.jpg";
import image5 from "../assets/img/carusel/carusel5.jpg";
import image6 from "../assets/img/carusel/carusel6.jpg";
import image7 from "../assets/img/carusel/carusel7.jpg";
import image8 from "../assets/img/carusel/carusel8.jpg";
import image9 from "../assets/img/carusel/carusel9.jpg";
import image10 from "../assets/img/carusel/carusel10.jpg";
import image11 from "../assets/img/carusel/carusel11.jpg";
import image12 from "../assets/img/carusel/carusel12.jpg";
import image13 from "../assets/img/carusel/carusel13.jpg";
import image14 from "../assets/img/carusel/carusel14.jpg";
import image15 from "../assets/img/carusel/carusel15.jpg";
import styled from "styled-components";

export default function ComingSoon() {
  return (
    <Container>
        <h1 className="title">Tez kunda qo'shiladigan kurslar...</h1>
      <Carousel cols={4} rows={1} gap={1} loop={true}>
        <Carousel.Item>
          <img src={image1} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image2} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image3} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image4} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image5} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image6} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image7} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image8} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image9} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image10} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image11} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image12} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image13} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image14} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image15} />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

const Container = styled.div`
.title{ 
    color: #fff;
    text-align: center;
    font-size: 46px;
    letter-spacing: 1px;
    font-weight: 600;
}
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
