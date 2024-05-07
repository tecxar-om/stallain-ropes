import React from "react";
import { Carousel } from "react-bootstrap";

const ChooseUs = () => {
  const chooseUsArray = [
    {
      image: "/choose-us/choose-1.png",
    },
    {
      image: "/choose-us/choose-2.png",
    },
    {
      image: "/choose-us/choose-3.png",
    },
    {
      image: "/choose-us/choose-4.png",
    },
  ];
  return (
    <div className="row d-flex align-items-center">
      <div className="col-lg-6 p-5 text-left">
        <div>
          <h2>Why Choose Us</h2>
          <p>
            Kohinoor rope is a name recognized in domestic & international markets. Operating since
            1985. We have a long record for product excellence, strong R & D, and diligent quality
            control.
          </p>
          <h2>Quality Assurance</h2>
          <p>
            At Kohinoor Ropes, quality and service are infused into every product we make. Every
            decision we make is intended to improve the quality of our products or our customers’
            experience with Kohinoor Ropes. Quality assurance is our top priority.
          </p>
        </div>
      </div>
      <div className="col-lg-6">
        <Carousel interval={2000} className="mt-4">
          {chooseUsArray.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                style={{ width: "100%", height: "auto", maxWidth: "397px", maxHeight: "191px" }}
                src={item.image}
                alt={`Slide ${index}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ChooseUs;
