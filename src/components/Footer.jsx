import React from "react";

const Footer = () => {
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
    <div className="row footer-bg px-5 pt-5">
      <div className="col-lg-8 border-bottom">
        <div className="row">
          {serviceArray.map((item, index) => (
            <>
              <div className="col-lg-4">
                <img src={item.image} alt={item.text} width={90} height={80} key={index} />
                <h6 className="p-4 font-white">{item.text}</h6>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="col-lg-4 border-bottom text-left">
        <img src="/footer/footer.png" alt="footer" width={250} height={55} />
        <h4 className="p-4 font-white">Corporate Office</h4>
        <div className="d-flex mb-3 text-left">
          <img
            src="/footer/location.svg"
            alt="footer"
            width={30}
            height={30}
            style={{ color: "white" }}
          />
          <h6 className="font-white ms-2 mb-0">
            Kohinoor Ropes Pvt. Ltd. Office No B7, B8 2nd Floor, Prozone Trade Center, Cidco, Ch.
            Sambhajinagar, Aurangabad 431006 Maharashatra, India
          </h6>
        </div>
        <div className="d-flex align-items-center">
          <img
            src="/footer/message.svg"
            alt="footer"
            width={20}
            height={20}
            style={{ color: "white" }}
          />
          <h6 className="font-white ms-2 mb-0">info@kohinoorropes.com</h6>
        </div>
      </div>
      <p className="font-white mt-3">© 2024 Kohinoor Ropes Pvt Ltd</p>
    </div>
  );
};

export default Footer;
