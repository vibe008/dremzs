import React, { useEffect, useState } from "react";
import "./Blog.css";
import { LuSearch } from "react-icons/lu";
import { LuClock9 } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { IoPersonSharp } from "react-icons/io5";
import ContentHeading from "../../Components/PageContentHeading/ContentHeading";
import { Link } from "react-router-dom";
import { IoArrowForwardCircle } from "react-icons/io5";
import Footer from "../../Components/Footer/Footer"
const blogdata = [
  {
    id: 1,
    text: "While The Lovely Valley Team Work",
    name: "Philip Hobs",
    date: "Dec 22 2020",
    img: require("../../Images/homeblog1.jpg"),
  },
  {
    id: 2,
    text: "University while the lovely valley team work ",
    name: "Philip Hobs",
    date: "June 15 2020",
    img: require("../../Images/homeblog2.jpg"),
  },
  {
    id: 3,
    text: "Modern School The Lovely Valley Team Work",
    name: "Philip Hobs",
    date: "Aug 28 2020",
    img: require("../../Images/homeblog3.jpg"),
  },
  {
    id: 4,
    text: "While The Lovely Valley Team Work",
    name: "Philip Hobs",
    date: "Dec 22 2020",
    img: require("../../Images/homeblog4.jpg"),
  },
  {
    id: 5,
    text: "While The Lovely Valley Team Work",
    name: "Philip Hobs",
    date: "Dec 22 2020",
    img: require("../../Images/homeblog2.jpg"),
  },
  {
    id: 6,
    text: "While The Lovely Valley Team Work",
    name: "Philip Hobs",
    date: "Dec 22 2020",
    img: require("../../Images/homeblog6.jpg"),
  },
];
function Blog() {
  const blogImg1 = require("../../Images/homeblog1.jpg");
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="Blog_section">
      <ContentHeading secondtextname="Blog" />
      <div className="blog_container">
        <div className="blog_search">
          <div className="search_inner">
            <input
              type="text"
              value={searchValue}
              placeholder="Search"
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <LuSearch size={25} color="skyblue" style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className="Blog_shown_container">
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
            {blogdata.map((item ,key)=>{
               return (
                <SwiperSlide key={key}>
                <div className="Blog_card">
                  <div className="Blog_image">
                    <img src={item.img} alt="blogImg1" />
                  </div>
                  <div className="Blog_overview">
                    <div className="overview_inner">
                      <div className="blog_heading">
                        <div className="bloguerename">
                          <IoPersonSharp color="#818090" />
                          <p>{item.name}</p>
                        </div>
                        <div className="bloguerdate">
                          <LuClock9 color="#818090" />
                          <p>{item.date}</p>
                        </div>
                      </div>
                      <div className="blog_desc">
                        <h3>
                          <Link>{item.text}</Link>
                        </h3>
                        <IoArrowForwardCircle color="#4d41e1" size={30} />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
               )
            })}

          </Swiper>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Blog;
