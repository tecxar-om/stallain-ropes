import React from "react";
import { Card } from "react-bootstrap";

const IndustryFocus = () => {
  const industryFocusArray = [
    {
      image: "/industry-focus/if1.jpeg",
      heading: "Fishing & Aquaculture",
      subtitle: "Providing Great Breeding Environment",
    },
    {
      image: "/industry-focus/if2.jpeg",
      heading: "Industrial",
      subtitle: "Commitment For Our Industrial Applications",
    },
    {
      image: "/industry-focus/if3.jpeg",
      heading: "Mountaineering & Safety",
      subtitle: "UIAA & EN Standard Certified",
    },
    {
      image: "/industry-focus/if4.jpeg",
      heading: "Yachting",
      subtitle: "Engineered Perfection For Your Yacht",
    },
    {
      image: "/industry-focus/if5.jpeg",
      heading: "Sports Nets",
      subtitle: "World Of Sports Nets",
    },
    {
      image: "/industry-focus/if6.jpeg",
      heading: "Shipping",
      subtitle: "MEG4 Approved By DNV",
    },
  ];

  return (
    <>
      <h3>World Class Standards For In-House Manufacturing & Research</h3>
      <h2 className="fw-bold">Innovation Centric Industry Focus</h2>
      <div className="d-flex flex-wrap justify-content-between p-5">
        {industryFocusArray.map((item, index) => (
          <Card
            key={index}
            style={{
              width: index === 0 || index === industryFocusArray.length - 1 ? "36rem" : "18rem",
              position: "relative",
              marginBottom: "1rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src={item.image} style={{ borderRadius: "10px" }} />
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                transform: "translate(5%, -10%)", // Adjust the translation as needed
                textAlign: "left",
                color: "white",
                width: "100%",
                padding: "1rem",
              }}
            >
              <Card.Title>{item.heading}</Card.Title>
              <Card.Text style={{ fontSize: "13px" }}>{item.subtitle}</Card.Text>
              <Card.Link href="#" className="text-white">
                Read More
              </Card.Link>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default IndustryFocus;
