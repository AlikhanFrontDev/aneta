import React from "react";
import Carousel from "better-react-carousel";
import image1 from "../assets/img/screen1.jpg";
import image2 from "../assets/img/screen2.jpg";
import image3 from "../assets/img/screen3.jpg";
import image4 from "../assets/img/screen4.jpg";
import image5 from "../assets/img/screen5.jpg";
import image6 from "../assets/img/screen6.jpg";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function CaruselTwo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll
    responsive: [
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <div className="carusel">
        <h2 className="title">Muvaffaqiyatli o'quvchilar.</h2>
        <Slider {...settings}>
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image3} alt="" />
          </div>
          <div>
            <img src={image4} alt="" />
          </div>
          <div>
            <img src={image5} alt="" />
          </div>
          <div>
            <img src={image6} alt="" />
          </div>
          
          {/* Add more slides as needed */}
        </Slider>
      </div>
    </Container>
  );
}

const Container = styled.div`
height: 120vh;
.title{
  color: #fff;
  text-align: center;
  margin: 50px 0;
  font-size: xx-large;
}
.carusel{
  width: 90%;
margin: 0 5%;
}

background-color: red;
  background-color: #0b0e13;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  img {
    /* object-fit: cover; */
    width: 300px;
    border-radius: 10px;
  }
  @media screen and (max-width: 1200px) {
    height: 50vh;
  }

  @media screen and (max-width: 768px) {
    height: 50vh;
    height: 120vh;
      img {
        width: 100%;
        /* object-fit: contain; */
        /* height: 400px; */
        border-radius: 10px;
      }
      .carusel{
        width: 87%;
        margin: 0 auto;
      }

  }

  @media screen and (max-width: 600px) {
    height: 120vh;
      img {
        object-fit: contain;
        width: 100%;
        
        border-radius: 10px;
      }
      .carusel{
        width: 87%;
        margin: 0 auto;
      }

  }
  @media screen and (max-width: 376px) {
      height: 120vh;
      width: 100vw;
      .carusel{
        width: 87%;
        margin: 0 auto;
      }
      img {
        object-fit: contain;
        height: 500px;
        width: 100%;
        border-radius: 10px;
      }
    }
`;
