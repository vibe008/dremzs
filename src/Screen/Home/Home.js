import React from "react";
import "./Home.css";
import Slider from "../../Components/Slider/Slider";
import BannerOne from "../../Components/Banner1/BannerOne";
import Slidersecond from "../../Components/Slider/Slidersecond";
import HomebannerOne from "../../Components/Homebanners/Homebanner1/HomebannerOne";
import RecentStudy from "../../Components/Homebanners/recentstudy/RecentStudy";
const project1img = require("../../Images/projectcompletepng.png")
const project2img = require("../../Images/projectcompletepng2.png")
const project3img = require("../../Images/projectcompletepng3.png")
const project4img = require("../../Images/projectcompletepng4.png")
function Home() {
  return (
    <div className="home_section">
      <Slider />
      <div className="Home_project_reviews">
        <div className="project_complete com_pro_rew">
          <div className="project_complete_circle com_pro_circle">
            <img src={project1img} alt="projectcompleteimage " style={{width:"100%",height:"100%",objectFit:"contain"}}/>
          </div>
          <div>
            <p className="num_cou_para">2382 +</p>
            <p className="text_cou_para">Our Project Compleate</p>
          </div>
        </div>
        <div className="experinced_member com_pro_rew">
          <div className="experinced_member_circle com_pro_circle">
          <img src={project2img} alt="projectcompleteimage " style={{width:"100%",height:"100%",objectFit:"contain"}}/>
          </div>
          <div>
            <p className="num_cou_para">2382 +</p>
            <p className="text_cou_para">Our Project Compleate</p>
          </div>
        </div>
        <div className="Setisfied_client com_pro_rew">
          <div className="Setisfied_client_circle com_pro_circle">
          <img src={project3img} alt="projectcompleteimage " style={{width:"100%",height:"100%",objectFit:"contain"}}/>
          </div>
          <div>
            <p className="num_cou_para">2382 +</p>
            <p className="text_cou_para">Our Project Compleate</p>
          </div>
        </div>
        <div className="running_projects com_pro_rew">
          <div className="running_projects_circle com_pro_circle">
          <img src={project4img} alt="projectcompleteimage " style={{width:"100%",height:"100%",objectFit:"contain"}}/>
          </div>
          <div>
            <p className="num_cou_para">2382 +</p>
            <p className="text_cou_para">Our Project Compleate</p>
          </div>
        </div>
      </div>
      <BannerOne/>
      <Slidersecond/>
      <HomebannerOne/>
      <RecentStudy/>
    </div>
  );
}

export default Home;
