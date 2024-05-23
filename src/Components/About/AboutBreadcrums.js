import React from "react";
import "./Aboutbreadcrums.css";
function AboutBreadcrums() {
  const aboutimg = require("../../Images/aboutbreadcrums.jpg");
  const aboutsvgimg1 = require("../../Images/aboutpentool.png");
  const aboutsvgimg2 = require("../../Images/aboutdigitalmarketing.png");
  const aboutsvgimg3 = require("../../Images/aboutcodeoptimisation.png");
  return (
    <div className="abbrd_container">
      <div className="abbrd_container_text">
        <div className="abText_inner">
          <h2>
            A agency experience
            <span className="color-title">
              {" "}
              creative & <br /> inteligents people.
            </span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            seieiusmodil Lorem ipsum dolor sit amet, consectetur adipisicing
            elit, seieiusmod tempor is exercitation ullamco laboris.
          </p>
        </div>
        <div className="percent_section">
          <div className="percent_inner" data-aos="fade-up"  data-aos-delay="400">
            <svg
              width={240}
              height={240}
              viewBox="0 0 240 240"
              style={{
                transform: "rotate(-90deg)",
              }}
            >
              <circle
                cx={120}
                cy={120}
                r={100}
                fill="none"
                stroke="#e6e6e6"
                strokeWidth={2}
                strokeDasharray="628.3185307179587, 628.3185307179587"
                strokeLinecap="square"
                className="RCP__track"
                style={{
                  transition: "all 0s ease 0s",
                }}
              />
              <circle
                cx={120}
                cy={120}
                r={100}
                fill="none"
                stroke="#4d41e1"
                strokeWidth={2}
                strokeDasharray="628.3185307179587, 628.3185307179587"
                strokeDashoffset={62.83185307179586}
                strokeLinecap="square"
                className="RCP__progress"
                style={{
                  transition: "all 1.5s ease 0.5s",
                }}
              />
            </svg>
            <div className="svginner">
              <div className="svginner_text">
                <div className="svginnerimg">
                  <img src={aboutsvgimg1} alt="aboutsvgimg1" />
                </div>
                <h3>90%</h3>
              </div>
            </div>
          </div>

          <div className="percent_inner" data-aos="fade-up"  data-aos-delay="350">
            <svg
              width={240}
              height={240}
              viewBox="0 0 240 240"
              style={{
                transform: "rotate(-90deg)",
              }}
            >
              <circle
                cx={120}
                cy={120}
                r={100}
                fill="none"
                stroke="#e6e6e6"
                strokeWidth={2}
                strokeDasharray="628.3185307179587, 628.3185307179587"
                strokeLinecap="square"
                className="RCP__track"
                style={{
                  transition: "all 0s ease 0s",
                }}
              />
              <circle
                cx={120}
                cy={120}
                r={100}
                fill="none"
                stroke="#ff884e"
                strokeWidth={2}
                strokeDasharray="628.3185307179587, 628.3185307179587"
                strokeDashoffset={188.49555921538757}
                strokeLinecap="square"
                className="RCP__progress"
                style={{
                  transition: "all 1.5s ease 0.5s",
                }}
              />
            </svg>
            <div className="svginner">
              <div className="svginner_text">
                <div className="svginnerimg">
                  <img src={aboutsvgimg2} alt="aboutsvgimg1" />
                </div>
                <h3>70%</h3>
              </div>
            </div>
          </div>

          <div className="percent_inner" data-aos="fade-up"  data-aos-delay="400">
            <svg
              width={240}
              height={240}
              viewBox="0 0 240 240"
              style={{
                transform: "rotate(-90deg)",
              }}
            >
              <circle
                cx={120}
                cy={120}
                r={100}
                fill="none"
                stroke="#e6e6e6"
                strokeWidth={2}
                strokeDasharray="628.3185307179587, 628.3185307179587"
                strokeLinecap="square"
                className="RCP__track"
                style={{
                  transition: "all 0s ease 0s",
                }}
              />
              <circle
                cx={120}
                cy={120}
                r={100}
                fill="none"
                stroke="#36c1ea"
                strokeWidth={2}
                strokeDasharray="628.3185307179587, 628.3185307179587"
                strokeDashoffset={62.83185307179586}
                strokeLinecap="square"
                className="RCP__progress"
                style={{
                  transition: "all 1.5s ease 0.5s",
                }}
              />
            </svg>
            <div className="svginner">
              <div className="svginner_text">
                <div className="svginnerimg">
                  <img src={aboutsvgimg3} alt="aboutsvgimg1" />
                </div>
                <h3>90%</h3>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="abbrd_container_image">
        <img src={aboutimg} alt="aboutimg" />
      </div>
    </div>
  );
}

export default AboutBreadcrums;
