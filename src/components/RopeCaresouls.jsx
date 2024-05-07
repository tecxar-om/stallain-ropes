import React from "react";
import { Carousel } from "react-bootstrap";

const RopeCaresouls = () => {
  const ropeCaresouls = [
    {
      image: "/rope/rope1.webp",
    },
    {
      image: "/rope/rope2.jpeg",
    },
  ];

  return (
    <>
      <Carousel interval={1000} className="rope-caresouls custom-caresoul mt-4" fade>
        {ropeCaresouls.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 carousel-image" src={item.image} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default RopeCaresouls;
