import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

const MyCarousel = ({ items }) => {
  return (
    <Container>
      <Carousel variant="dark">
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="image" src={item.src} alt={item.alt} />
            <Carousel.Caption className="caption">
              <h3>{item.caption}</h3>
              <p>{item.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
    /* z-index: -1; */
    .image{
        height: 400px;
        width: 650px;
        border-radius: 12px;
        object-fit: cover;
    }
    .caption{
        color: #11101d;
    }
`

export default MyCarousel;
