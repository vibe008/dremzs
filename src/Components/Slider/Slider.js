import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import Aos from "aos";
import Animatedbutton from "../animatedBUtton/Animatedbutton";

const circlepng = require("../../Images/circleshape.png");
// const zigzag = require("../../Images/curlyshape.png")
const sliderimg1 = require("../../Images/sliderimg1.jpg");
function Slider() {
  return (
    <div className="main_slider_section">
      <div className="slider_section">
        <img src={circlepng} alt="circlepng" className="circlepng" />
        <img src={circlepng} alt="circlepng2" className="circlepng2" />
        {/* <img src={zigzag} alt="circlepng2" className="zigzag"/> */}
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="slider_swiper"
          onSlideChange={() => {
            console.log("f")
            Aos.refresh(); // Trigger AOS to refresh animations
          }}
        >
          <SwiperSlide>
            <div className="slider_content">
              <div className="text_content">
                <div
                  className="inner_text"
                >
                  <h3    className="main_para inner_text_para">Rasin Agency</h3>
                  <div   className="mid_para inner_text_para">
                    Digital & Cretive Agency <br/>Providing Solution
                  </div>
                  <div  className="End_para inner_text_para">
                    Lorem ipsum dolor consecteture elite we’re a creative
                    digital agency to to your business growing up.
                  </div>
                </div>
                <div className="innner_button">
                 <Animatedbutton btnname="Lets Get Started"/>
                </div>
              </div>
              <div className="image_content">
                <img
                  src={sliderimg1}
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  alt="alt"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider_content">
              <div className="text_content">
                <div

                  className="inner_text"
                >
                  <h3   data-aos="fade-right" className="main_para inner_text_para">Rasin Agency</h3>
                  <div data-aos="fade-left"  className="mid_para inner_text_para">
                    Digital & Cretive Agency Providing Solution
                  </div>
                  <div data-aos="fade-up"   data-aos-once="false" className="End_para inner_text_para">
                    Lorem ipsum dolor consecteture elite we’re a creative
                    digital agency to to your business growing up.
                  </div>
                </div>
                <div className="innner_button">
                 <Animatedbutton btnname="Lets Get Started"/>
                </div>
              </div>
              <div className="image_content">
                <img
                  src={sliderimg1}
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  alt="alt"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
