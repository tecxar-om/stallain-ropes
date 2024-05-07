import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Service = () => {
  const serviceArray = [
    {
      image: "/service/service1.png",
      text: "SHIPPING AND MARINE",
    },
    {
      image: "/service/service2.png",
      text: "SAFETY & MOUNTAINEERING",
    },
    {
      image: "/service/service3.png",
      text: "SPORTS NETS",
    },
    {
      image: "/service/service4.png",
      text: "INDUSTRIAL MARINE",
    },
    {
      image: "/service/service5.png",
      text: "FISHING AND AQUACULTURE NETS",
    },
    {
      image: "/service/service6.png",
      text: "YACHTS AND LEISURE MARINE",
    },
  ];

  return (
    <>
      <div className="p-5 d-flex flex-wrap justify-content-center">
        {serviceArray.map((item, index) => (
          <Card
            key={index}
            style={{ width: "12rem", height: "14rem", backgroundColor: "#006BB5", margin: "10px" }}
            className="d-flex flex-column align-items-center p-2 card-style"
          >
            <Card.Img variant="top" src={item.image} style={{ width: "100px", height: "100px" }} />
            <Card.Body>
              <Card.Title className="button-class">{item.text}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="p-4">
        <h3>40 Years Of Servicing The High-Quality Cordage, Nets & Rope Industry</h3>
        <p className="px-5 mt-4">
          Spread across 5 continents & Powered by Proprietary R&D Infrastructure, Kohinoor Rope is a
          name recognized in domestic & international markets. Operating since 1985. We have a long
          record of product excellence strong R & D, and diligent quality control
        </p>
        <Button className="button-class" variant="info">
          Know more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="ml-2 bi bi-arrow-right"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </Button>
      </div>
    </>
  );
};

export default Service;
