import React from "react";
import "./slidersecond.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
const icon1 = require("../../Images/digitalmarketing1.png");
function Slidersecond() {
  return (
    <div className="second_mul_sli_cont">
      <div className="sec_mul_text_cont">
        <h2>We’ve halped hundreds</h2>
        <h2>of clients to reach internet & grow</h2>
        <h2 style={{ color: "#4d41e1" }}>their Business</h2>
      </div>
      <div className="multiple_slider_section">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mul_swiper_slider"
        >
          <SwiperSlide>
            <div className="mul_slider_card">
              <div className="_mulcard_icon">
                <img
                  src={icon1}
                  alt="icon 1"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="mul_card_text">
                <h2>Web Developmnt</h2>
                <p>
                  According to elite we providing web Development services to
                  our honorable clients for business.
                </p>
              </div>
              <div className="mul_card_circle">
                <IoIosArrowRoundForward color="white" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mul_slider_card">
              <div className="_mulcard_icon">
                <img
                  src={icon1}
                  alt="icon 1"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="mul_card_text">
                <h2>Web Developmnt</h2>
                <p>
                  According to elite we providing web Development services to
                  our honorable clients for business.
                </p>
              </div>
              <div className="mul_card_circle">
                <IoIosArrowRoundForward color="white" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mul_slider_card">
              <div className="_mulcard_icon">
                <img
                  src={icon1}
                  alt="icon 1"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="mul_card_text">
                <h2>Web Developmnt</h2>
                <p>
                  According to elite we providing web Development services to
                  our honorable clients for business.
                </p>
              </div>
              <div className="mul_card_circle">
                <IoIosArrowRoundForward color="white" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mul_slider_card">
              <div className="_mulcard_icon">
                <img
                  src={icon1}
                  alt="icon 1"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="mul_card_text">
                <h2>Web Developmnt</h2>
                <p>
                  According to elite we providing web Development services to
                  our honorable clients for business.
                </p>
              </div>
              <div className="mul_card_circle">
                <IoIosArrowRoundForward color="white" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mul_slider_card">
              <div className="_mulcard_icon">
                <img
                  src={icon1}
                  alt="icon 1"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="mul_card_text">
                <h2>Web Developmnt</h2>
                <p>
                  According to elite we providing web Development services to
                  our honorable clients for business.
                </p>
              </div>
              <div className="mul_card_circle">
                <IoIosArrowRoundForward color="white" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mul_slider_card">
              <div className="_mulcard_icon">
                <img
                  src={icon1}
                  alt="icon 1"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="mul_card_text">
                <h2>Web Developmnt</h2>
                <p>
                  According to elite we providing web Development services to
                  our honorable clients for business.
                </p>
              </div>
              <div className="mul_card_circle">
                <IoIosArrowRoundForward color="white" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mul_hyp_li">
        <a href="/">Explore All Services</a>
      </div>
    </div>
  );
}

export default Slidersecond;
