import React, { useState } from "react";
import "./recentstudy.css";
function RecentStudy() {
  const [rebtnid, setRebtnId] = useState(0);
  const [rebtnvalue, setRebtnValue] = useState("Web Development");

  console.log("rebtnid", rebtnid);
  const data = [
    {
      id: "1",
      text: "Web Development",
    },
    {
      id: "2",
      text: "Digital Marketing",
    },
    {
      id: "3",
      text: "Web & Graphic Design",
    },
    {
      id: "4",
      text: "Business Consulting",
    },
    {
      id: "5",
      text: "Social media",
    },
  ];
  const img1 = require("../../../Images/webdevelopment/web1.jpg");
  const webdevelopment = [
    {
      id: "1",
      image: require("../../../Images/webdevelopment/web3.jpg"),
      heading: "Online educational website development",
    },
    {
      id: "2",
      image: require("../../../Images/webdevelopment/web2.jpg"),
      heading: "Educational website development",
    },
    {
      id: "3",
      image: require("../../../Images/webdevelopment/web1.jpg"),
      heading: "Business website Development",
    },
  ];
  const DigitalMarketing = [
    {
      id: "1",
      image: require("../../../Images/Digitalmarketing/web3.jpg"),
      heading: "Online educational website development",
    },
    {
      id: "2",
      image: require("../../../Images/Digitalmarketing/web2.jpg"),
      heading: "Educational website development",
    },
    {
      id: "3",
      image: require("../../../Images/Digitalmarketing/web1.jpg"),
      heading: "Business website Development",
    },
  ];
  const GraphicDesign = [
    {
      id: "1",
      image: require("../../../Images/graphics/graphics1.jpg"),
      heading: "Online educational website development",
    },
    {
      id: "2",
      image: require("../../../Images/graphics/graphics2.jpg"),
      heading: "Educational website development",
    },
    {
      id: "3",
      image: require("../../../Images/graphics/graphics3.jpg"),
      heading: "Business website Development",
    },
  ];
  const Consulting = [
    {
      id: "1",
      image: require("../../../Images/webdevelopment/web3.jpg"),
      heading: "Online educational website development",
    },
    {
      id: "2",
      image: require("../../../Images/webdevelopment/web1.jpg"),
      heading: "Educational website development",
    },
    {
      id: "3",
      image: require("../../../Images/graphics/graphics3.jpg"),
      heading: "Business website Development",
    },
  ];

  const Socialmedia = [
    {
      id: "1",
      image: require("../../../Images/Digitalmarketing/web3.jpg"),
      heading: "Online educational website development",
    },
    {
      id: "2",
      image: require("../../../Images/Digitalmarketing/web1.jpg"),
      heading: "Educational website development",
    },
    {
      id: "3",
      image: require("../../../Images/Digitalmarketing/web2.jpg"),
      heading: "Business website Development",
    },
  ];

  return (
    <div className="recnet_container_h">
      <div className="recent_text_container">
        <h2>Recent Case Study</h2>
        <div className="re_te_section">
          {data.map((item, key) => {
            return (
              <div className="re_te_btn" key={key}>
                <button
                  className={rebtnid === key ? "rebtnactive" : "rebtn"}
                  href="/"
                  onClick={(index, value) => {
                    console.log("value", item.text);
                    setRebtnId(key);
                    setRebtnValue(item.text);
                  }}
                >
                  {item.text}
                  <div
                    className={rebtnid === key ? "ren_link" : "ren_linkun"}
                  ></div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="recent_view">
        {rebtnvalue === "Web Development" &&
          webdevelopment.map((item, key) => {
            return (
              <div className="recent_view_card" key={key}>
                <div className="re_view_img">
                  <img
                    src={item.image}
                    alt="webimg1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="rec_view_text">
                  <h4 className="rec_view_text_hea">
                    <a href="/">{item.heading}t</a>
                  </h4>
                  <a href="/" className="rec_view_text-remo">
                    Read more
                  </a>
                </div>
              </div>
            );
          })}

        {rebtnvalue === "Digital Marketing" &&
          DigitalMarketing.map((item, key) => {
            return (
              <div className="recent_view_card" key={key}>
                <div className="re_view_img">
                  <img
                    src={item.image}
                    alt="webimg1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="rec_view_text">
                  <h4 className="rec_view_text_hea">
                    <a href="/">{item.heading}t</a>
                  </h4>
                  <a href="/" className="rec_view_text-remo">
                    Read more
                  </a>
                </div>
              </div>
            );
          })}


        {rebtnvalue === "Web & Graphic Design" &&
          GraphicDesign.map((item, key) => {
            return (
              <div className="recent_view_card" key={key}>
                <div className="re_view_img">
                  <img
                    src={item.image}
                    alt="webimg1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="rec_view_text">
                  <h4 className="rec_view_text_hea">
                    <a href="/">{item.heading}t</a>
                  </h4>
                  <a href="/" className="rec_view_text-remo">
                    Read more
                  </a>
                </div>
              </div>
            );
          })}


        {rebtnvalue === "Business Consulting" &&
          Consulting.map((item, key) => {
            return (
              <div className="recent_view_card" key={key}>
                <div className="re_view_img">
                  <img
                    src={item.image}
                    alt="webimg1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="rec_view_text">
                  <h4 className="rec_view_text_hea">
                    <a href="/">{item.heading}t</a>
                  </h4>
                  <a href="/" className="rec_view_text-remo">
                    Read more
                  </a>
                </div>
              </div>
            );
          })}


        {rebtnvalue === "Social media" &&
          Socialmedia.map((item, key) => {
            return (
              <div className="recent_view_card" key={key}>
                <div className="re_view_img">
                  <img
                    src={item.image}
                    alt="webimg1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="rec_view_text">
                  <h4 className="rec_view_text_hea">
                    <a href="/">{item.heading}t</a>
                  </h4>
                  <a href="/" className="rec_view_text-remo">
                    Read more
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default RecentStudy;
