import React, { useState } from "react";
import "./homeslider3.css";
// import StarRatings from "./react-star-ratings";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "react-simple-star-rating";
const testimonials1 = require("../../../Images/testimonialbgdotone.png");
const testimonials2 = require("../../../Images/testimonialbgdottwo.png");
const testimonials3 = require("../../../Images/testimonial3user.jpg");

function Homeslider3() {
  return (
    <div className="ho_sli-3_con">
      <div className="ho_dot_one hdot">
        <img
          src={testimonials1}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt="testimonials1"
        />
      </div>
      <div className="ho_dot_two hdot">
        <img
          src={testimonials2}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt="testimonials1"
        />
      </div>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="home3slider_slider_swiper"
      >
        <SwiperSlide>
          <div className="home3slider_container">
            <div className="home3slider_container_image">
              <img
                src={testimonials3}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="testimonials1"
              />
            </div>

            <div className="home3slider_container_text">
              <h4>Backey Tompson</h4>
              <p className="home3slider_container_textp1">Ceo of Atardam</p>
              <p className="home3slider_container_textp2">
                Maboriosam in a nesciung eget magna dapibus disting tloctio in
                the find it per odiy.
              </p>
              <Rating initialValue={5} size={20} readonly />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home3slider_container">
            <div className="home3slider_container_image">
              <img
                src={testimonials3}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="testimonials1"
              />
            </div>

            <div className="home3slider_container_text">
              <h4>Backey Tompson</h4>
              <p className="home3slider_container_textp1">Ceo of Atardam</p>
              <p className="home3slider_container_textp2">
                Maboriosam in a nesciung eget magna dapibus disting tloctio in
                the find it per odiy.
              </p>
              <Rating initialValue={5} size={20} readonly />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Homeslider3;
