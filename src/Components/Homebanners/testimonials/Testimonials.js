import React from "react";
import "./Testimonials.css";
import { Rating } from "react-simple-star-rating";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
const testiminoalsimg1 = require("../../../Images/testti1.jpg");
function Testimonials() {
  return (
    <div className="Testimonials_section" data-aos="fade-up"  data-aos-delay="300">
      <div className="Testimonials_container">
        <h2>Let’s see testimonials to what clients says</h2>
        <div className="Testimonials_card_container">
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
            className=""
          >
            <SwiperSlide>
              <div className="Testimonials_cards">
                <p>
                  Maboriosam in a nesciung eget magna dapibus disting tloctio in
                  the find it per odiy.
                </p>
                <h4>Backey Tompson</h4>
                <p>Ceo of Atardam</p>
                <Rating initialValue={4} size={20} readonly />
                <div className="img_circle">
                  <img
                    src={testiminoalsimg1}
                    alt="testiminoalsimg1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Testimonials_cards">
                <p>
                  Maboriosam in a nesciung eget magna dapibus disting tloctio in
                  the find it per odiy.
                </p>
                <h4>Backey Tompson</h4>
                <p>Ceo of Atardam</p>
                <Rating initialValue={4} size={20} readonly />
                <div className="img_circle">
                  <img
                    src={testiminoalsimg1}
                    alt="testiminoalsimg1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Testimonials_cards">
                <p>
                  Maboriosam in a nesciung eget magna dapibus disting tloctio in
                  the find it per odiy.
                </p>
                <h4>Backey Tompson</h4>
                <p>Ceo of Atardam</p>
                <Rating initialValue={4} size={20} readonly />
                <div className="img_circle">
                  <img
                    src={testiminoalsimg1}
                    alt="testiminoalsimg1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Testimonials_cards">
                <p>
                  Maboriosam in a nesciung eget magna dapibus disting tloctio in
                  the find it per odiy.
                </p>
                <h4>Backey Tompson</h4>
                <p>Ceo of Atardam</p>
                <Rating initialValue={4} size={20} readonly />
                <div className="img_circle">
                  <img
                    src={testiminoalsimg1}
                    alt="testiminoalsimg1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
