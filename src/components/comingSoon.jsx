import React, { useEffect, useState } from "react";
import Carousel from "better-react-carousel";
import image from "../assets/img/chat.jpg";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Endpoint from "../endpoint";
import axios from "axios";

export default function ComingSoon() {
  //   get data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Endpoint + "corusel/all");

        setData(response.data.item);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        // Set loading to false whether the request succeeds or fails
        setLoading(false);
      }
    };
    fetchData();
  }, []);
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
          slidesToShow: 3,
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
        <h2 className="title">Tez kunda ...</h2>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div className="box">
              <img
                key={index}
                src={`https://prodgtlservice.uz/api/photo/show/${item.photoId}`}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .box {
    display: flex;
  }
  .title {
    color: #fff;
    text-align: center;
    margin: 50px 0;
    font-size: xx-large;
  }
  .carusel {
    width: 90%;
    margin: 0 5%;
  }
  width: 100%;
  background-color: red;
  height: fit-content;
  background-color: #0b0e13;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    /* object-fit: cover; */
    width: 300px;
    border-radius: 10px;
  }
  @media screen and (max-width: 1200px) {
    height: 50vh;
  }

  @media screen and (max-width: 768px) {
    height: fit-content;

    width: 100vw;
    img {
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
    height: fit-content;

      width: 100vw;
      img {
        /* object-fit: contain; */
        /* height: 400px; */
        border-radius: 10px;
        width: 100%;
      }
      .carusel{
        width: 87%;
        margin: 0 auto;
      }
    }
    @media screen and (max-width: 376px) {
      height: 100vh;
      width: 100vw;
      .carusel{
        width: 87%;
        margin: 0 auto;
      }
      img {
        object-fit: contain;
        height: 600px;
        width: 100%;
        border-radius: 10px;
      }
    }
`
