import React from "react";
import { Card } from "react-bootstrap";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterCard = ({ image, title, count, subTitle, isLast }) => {
  const [ref, inView] = useInView();

  return (
    <Card className={`custom-card ${inView && !isLast ? "custom-card-border" : ""}`} ref={ref}>
      <div className="d-flex justify-content-center">
        <Card.Img src={image} style={{ height: "80px", width: "80px" }} />
      </div>
      <Card.Body>
        <h4>{title}</h4>
        <h1>
          <span>{inView && <CountUp end={count} duration={5} />}</span>
        </h1>
        <h4>{subTitle}</h4>
      </Card.Body>
    </Card>
  );
};

const Counter = () => {
  const counterCardArray = [
    {
      image: "/counter/count1.png",
      title: "Experience",
      count: 37,
      subTitle: "Years",
    },
    {
      image: "/counter/count2.png",
      title: "Industry",
      count: 10,
      subTitle: "Sectors",
    },
    {
      image: "/counter/count3.png",
      title: "Customers",
      count: 700,
      subTitle: "Channel Partner",
    },
    {
      image: "/counter/count4.png",
      title: "Exports",
      count: 40,
      subTitle: "Countries",
    },
  ];

  return (
    <div className="d-flex justify-content-center">
      {counterCardArray.map((item, index) => (
        <CounterCard {...item} key={index} isLast={index === counterCardArray.length - 1} />
      ))}
    </div>
  );
};

export default Counter;
