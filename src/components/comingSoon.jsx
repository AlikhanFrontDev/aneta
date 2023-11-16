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
      <Carousel cols={4} rows={1} gap={4} loop={true}>
        <Carousel.Item>
          <div className="box">
            <img className="image" src={image1} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="box">
            <img className="image" src={image1} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="box">
            <img className="image" src={image1} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="box">
            <img className="image" src={image1} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="box">
            <img className="image" src={image1} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="box">
            <img className="image" src={image1} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="box">
            <img className="image" src={image1} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="box">
            <img className="image" src={image1} />
          </div>
        </Carousel.Item>
        
      </Carousel>
    </Container>
  );
}

const Container = styled.div`
  .box {
    padding: 50px 0;
  }
  .image{
    /* box-shadow: 0px 19px 41px -22px rgba(255, 0, 4, 1); */
  
  }
  .title {
    color: #fff;
    text-align: center;
    font-size: 46px;
    letter-spacing: 1px;
    font-weight: 600;
  }
  height: 110vh;
  background-color: #0b0e13;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  img {
    /* object-fit: cover; */
    width: 350px;
    border-radius: 10px;
  }
  @media only screen and (max-width: 992px) {
    justify-content: center;
    height: 50vh;

    /* background-color: red; */
    .title{
      font-size: 1.5rem;
    }
    .image{
      height: 90vh;
      /* width: 60vw; */
      /* box-shadow: 0px 19px 41px -22px rgba(255, 0, 4, 1); */
      object-fit: contain;
      /* width: 500px; */
    }
    .box{
      /* height: 100vh; */
      /* width: 90vw; */
      padding: 0;
    }
  }
  @media screen and (max-width: 768px) {
    height: 50vh;
    justify-content: center;

    .title {
      font-size: 2rem;
      margin-bottom: 10px; /* Reduce the margin */
    }

    .box {
      padding: 5px 0; /* Reduce the padding */
    }

    .image {
      max-width: 80%;
      height: auto;
      border-radius: 8px;
    }
  }

  @media screen and (max-width: 480px) {
    justify-content: center;
    height: 50vh;

    .title {
      font-size: 1.5rem;
      margin-bottom: 5px; /* Further reduce the margin */
    }

    .box {
      padding: 3px 0; /* Further reduce the padding */
    }

    .image {
      max-width: 100%;
      border-radius: 5px;
    }
  }
`;
