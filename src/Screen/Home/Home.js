import React, { useEffect, useState } from "react";
import "./Home.css";
import Slider from "../../Components/Slider/Slider";
import BannerOne from "../../Components/Banner1/BannerOne";
import Slidersecond from "../../Components/Slider/Slidersecond";
import HomebannerOne from "../../Components/Homebanners/Homebanner1/HomebannerOne";
import RecentStudy from "../../Components/Homebanners/recentstudy/RecentStudy";
import Homeslider3 from "../../Components/Homebanners/HomeSlider3/Homeslider3";
import Homeemail from "../../Components/Homebanners/HomeemailSection/Homeemail";
import Testimonials from "../../Components/Homebanners/testimonials/Testimonials";
import Homeblog from "../../Components/Homebanners/Homeblog/Homeblog";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Homefooter from "../../Components/Homebanners/HomeFooter/Homefooter";
const project1img = require("../../Images/projectcompletepng.png")
const project2img = require("../../Images/projectcompletepng2.png")
const project3img = require("../../Images/projectcompletepng3.png")
const project4img = require("../../Images/projectcompletepng4.png")

function Home() {
  const [count, setCount] = useState(0);
  const desiredNumber = 2382;
  const duration = 2000; // 1 second in milliseconds
  const [aos ,setaos]=useState(false)
  useEffect(() => {
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const newCount = Math.min(Math.floor((progress / duration) * desiredNumber), desiredNumber);
      setCount(newCount);

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(desiredNumber);
      }
    };

    requestAnimationFrame(step);

    // Cleanup function in case the component is unmounted
    return () => cancelAnimationFrame(step);
  }, [aos]);

  useEffect(() => {
    AOS.init();
    setaos(true)
  }, [])
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, []);
  useEffect(() => {
    setCount(0); // Reset the count
  }, []); 
  return (
    <div className="home_section">
      <Slider />
      <div className="Home_project_reviews " >
        <div className="project_complete com_pro_rew">
          <div className="project_complete_circle com_pro_circle">
            <img src={project1img} alt="projectcompleteimage " style={{width:"100%",height:"100%",objectFit:"contain"}}/>
          </div>
          <div>
            <p className="num_cou_para" data-aos="fade-up" data-aos-delay="300"  >{count} +</p>
            <p className="text_cou_para">Our Project Compleate</p>
          </div>
        </div>
        <div className="experinced_member com_pro_rew">
          <div className="experinced_member_circle com_pro_circle">
          <img src={project2img} alt="projectcompleteimage " style={{width:"100%",height:"100%",objectFit:"contain"}}/>
          </div>
          <div>
            <p className="num_cou_para" data-aos="fade-up" data-aos-delay="300">{count} +</p>
            <p className="text_cou_para">Our Project Compleate</p>
          </div>
        </div>
        <div className="Setisfied_client com_pro_rew">
          <div className="Setisfied_client_circle com_pro_circle">
          <img src={project3img} alt="projectcompleteimage " style={{width:"100%",height:"100%",objectFit:"contain"}}/>
          </div>
          <div>
            <p className="num_cou_para" data-aos="fade-up" data-aos-delay="300">{count} +</p>
            <p className="text_cou_para">Our Project Compleate</p>
          </div>
        </div>
        <div className="running_projects com_pro_rew">
          <div className="running_projects_circle com_pro_circle">
          <img src={project4img} alt="projectcompleteimage " style={{width:"100%",height:"100%",objectFit:"contain"}}/>
          </div>
          <div>
            <p className="num_cou_para"data-aos="fade-up" data-aos-delay="300">{count} +</p>
            <p className="text_cou_para">Our Project Compleate</p>
          </div>
        </div>
      </div>
      <BannerOne  />
      <Slidersecond/>
      <HomebannerOne/>
      <RecentStudy/>
      <Testimonials/>
      {/* <Homeslider3/> */}
      <Homeemail/>
      <Homeblog/>
      <Homefooter/>
    </div>
  );
}

export default Home;
