import React from "react";
import "./Homeblog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { LuClock9 } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
const blogdata = [
  {
    id: 1,
    text: "While The Lovely Valley Team Work",
    name: "Philip Hobs",
    date: "Dec 22 2020",
    img: require("../../../Images/homeblog1.jpg"),
  },
  {
    id: 2,
    text: "University while the lovely valley team work ",
    name: "Philip Hobs",
    date: "June 15 2020",
    img: require("../../../Images/homeblog2.jpg"),
  },
  {
    id: 3,
    text: "Modern School The Lovely Valley Team Work",
    name: "Philip Hobs",
    date: "Aug 28 2020",
    img: require("../../../Images/homeblog3.jpg"),
  },
  {
    id: 4,
    text: "While The Lovely Valley Team Work",
    name: "Philip Hobs",
    date: "Dec 22 2020",
    img: require("../../../Images/homeblog4.jpg"),
  },
  {
    id: 5,
    text: "While The Lovely Valley Team Work",
    name: "Philip Hobs",
    date: "Dec 22 2020",
    img: require("../../../Images/homeblog2.jpg"),
  },
  {
    id: 6,
    text: "While The Lovely Valley Team Work",
    name: "Philip Hobs",
    date: "Dec 22 2020",
    img: require("../../../Images/homeblog6.jpg"),
  },
];
function Homeblog() {
  return (
    <div className="homeblog_section">
      <div className="homeblog_container">
        <h2>
          See our latest & popular tips & tricks <span>from our Experts</span>
        </h2>

        <div className="Homeblog_slider_section">
          <Swiper
            // navigation={true}
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
            {blogdata.map((item, key) => {
              return (
                <SwiperSlide>
                  <div className="homeblog_card">
                    <div className="img_min_card">
                      <img src={item.img} alt="hblog1" />
                      <div className="hmblg_text_container">
                        <div className="hmblg_text_container_min">
                          <div className="uerename">
                            <IoPersonSharp color="#818090" />
                            <p>{item.name}</p>
                          </div>
                          <div className="uerdate">
                            <LuClock9 color="#818090" />
                            <p>{item.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card_text">
                      <a href="/">{item.text}</a>
                      <IoArrowForwardCircle color="#4d41e1" size={30} />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Homeblog;
