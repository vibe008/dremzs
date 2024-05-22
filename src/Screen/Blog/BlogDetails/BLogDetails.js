import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Blogdetails.css";
import ContentHeading from "../../../Components/PageContentHeading/ContentHeading";
import { BsFillClockFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { BiSolidQuoteRight } from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import YouTube from "react-youtube";
import { IoIosPause } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaTag } from "react-icons/fa6";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Player from "react-player";
import Footer from "../../../Components/Footer/Footer";
import Animatedbutton from "../../../Components/animatedBUtton/Animatedbutton";
import { Link } from "react-router-dom";
import Ctabutton from "../../../Components/CtaButton/Ctabutton";
function BLogDetails() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, []);
  const videoref = useRef()
  const [search, setSearch] = useState("");
  const [isplaying, setisplaying] = useState(false);
  const blogdetailimg = require("../../../Images/homeblog1.jpg");
  const blogdetailimg1 = require("../../../Images/serbg.jpg");
  console.log("videoref",videoref)
  return (
    <div className="BLogDetails_section">
      <ContentHeading secondtextname="Blog Details" />
      <div className="BLogDetails_container">
      <div className="BLogDetails_recent_post">
          <div className="BLogDetails_recent_post_section">
            <div className="repo_inner">
              <h3 className="repo_inner_heading">Recent Posts</h3>
              <div className="bg_rp_post_">
                <div className="bg_rp_post__Card">
                  <div className="bg_rp_post_img">
                    <img src={blogdetailimg} alt="blogdetailimg" />
                  </div>
                  <div className="bg_rp_post_desc">
                    <p>12 September 2021</p>
                    <h3 className="bg_rp_post_desc_heading">
                      Lorem ipsum dolor sit amet Lorem ipsum
                    </h3>
                  </div>
                </div>
                <div className="bg_rp_post__Card">
                  <div className="bg_rp_post_img">
                    <img src={blogdetailimg} alt="blogdetailimg" />
                  </div>
                  <div className="bg_rp_post_desc">
                    <p>12 September 2021</p>
                    <h3 className="bg_rp_post_desc_heading">
                      Lorem ipsum dolor sit amet Lorem ipsum
                    </h3>
                  </div>
                </div>
                <div className="bg_rp_post__Card">
                  <div className="bg_rp_post_img">
                    <img src={blogdetailimg} alt="blogdetailimg" />
                  </div>
                  <div className="bg_rp_post_desc">
                    <p>12 September 2021</p>
                    <h3 className="bg_rp_post_desc_heading">
                      Lorem ipsum dolor sit amet Lorem ipsum
                    </h3>
                  </div>
                </div>
                <div className="bg_rp_post__Card">
                  <div className="bg_rp_post_img">
                    <img src={blogdetailimg} alt="blogdetailimg" />
                  </div>
                  <div className="bg_rp_post_desc">
                    <p>12 September 2021</p>
                    <h3 className="bg_rp_post_desc_heading">
                      Lorem ipsum dolor sit amet Lorem ipsum
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="BLogDetails_recent_post_img">
           <img src={blogdetailimg1} alt="blogdetailimg" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
          </div>
        </div>
        <div className="BLogDetails_containet">
          <div className="Blogdetail_image">
            <img src={blogdetailimg} alt="blogdetailimg" />
          </div>
          <div className="bdetails">
            <div className="bdetailsinnner">
              <IoPersonSharp color="#6b6a75" style={{ marginRight: "5px" }} />
              <p>James Smith</p>
            </div>
            <div className="bdetailsinnner">
              <BsFillClockFill color="#6b6a75" style={{ marginRight: "5px" }} />
              <p>21 Feb,2021</p>
            </div>
            <div className="bdetailsinnner">
              <FaTag color="#6b6a75" style={{ marginRight: "5px" }} />
              <p>Marketing</p>
            </div>
          </div>
          <h2 className="bdheading">Financial Planning & Finance Aduiting</h2>
          <p className="bdpara">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laborisi nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisi
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="bd_more">
            <BiSolidQuoteRight
              size={80}
              color="#5048b7"
              style={{ marginRight: "30px" }}
            />
            <p>
              What's happened to me?" he thought. It wasn't a dream. His room, a
              proper human room although a little too small, lay peacefully
              between.
            </p>
          </div>
          <p className="bdpara">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laborisi nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="bd_video_section">
            <div className="bd_play_con">
              <div
                className="ply_btn"
                onClick={() => {
                  setisplaying(!isplaying);
                }}
              >
                {isplaying? <IoIosPause color="#4d41e1" /> :       <FaPlay color="#4d41e1" />}
          
              </div>
            </div>
            {/* <YouTube
              className="youtubeplayer"
              videoId={`tj9ARZlSj6g`}
              opts={opts}
              onReady={onReady}
            /> */}
            <Player
              url={require("../../../Images/video/Businessvideo.mp4")}
              playing={isplaying}
              // controls
              width="100%"
              ref={videoref}
              height="100%"
            />
          </div>
           <div style={{height:"100px",margin:"100px 0px"}}>
           <Ctabutton/>
           </div>
          <h2 className="bdheading">How to Prepare?</h2>
          <p className="bdpara">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laborisi nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="post_detail_section">
            <div className="post_detail_section_inner" >
              <div
                className="pre_details pre_details_pre"
              >
                <GoArrowLeft
                  size={25}
                  color="white"
                  style={{ marginRight: "5px" }}
                />
                <Link>Previous Post</Link>
              </div>
              <div
                className="pre_details pre_details_next"
                
              >
                <Link style={{ marginRight: "5px" }}>Next Post</Link>
                <GoArrowRight size={25} color="white" />
              </div>
            </div>
            <div>
              <div className="posr_detail_social">
                <div className="posr_detail_icon">
                  <TfiYoutube />
                </div>
                <div className="posr_detail_icon">
                  <FaFacebook />
                </div>
                <div className="posr_detail_icon">
                  <FaTwitter />
                </div>
                <div className="posr_detail_icon">
                  <PiInstagramLogoFill />
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </div>
  );
}

export default BLogDetails;
