import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

const CaresoulsComponent = () => {
  const caresoulArray = [
    {
      image: "/caresouls/slider-1.jpeg",
      head: "",
      text: "",
    },
    {
      image: "/caresouls/slider-2.jpeg",
      head: "",
      text: "",
    },
    {
      image: "/caresouls/slider-3.jpeg",
      head: "",
      text: "",
    },
    {
      image: "/caresouls/slider-4.jpeg",
      head: "",
      text: "",
    },
  ];

  return (
    <>
      <Carousel interval={2000} fade>
        {caresoulArray.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 carousel-image" src={item.image} alt="First slide" />
            <Carousel.Caption>
              <h3>{item.head}</h3>
              <p>{item.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default CaresoulsComponent;
