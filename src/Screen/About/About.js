import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import BannerOne from "../Components/Banner1/BannerOne";
import HomebannerOne from "../Components/Homebanners/Homebanner1/HomebannerOne";
import Animatedbutton from "../Components/animatedBUtton/Animatedbutton";
import AboutBreadcrums from "../Components/About/AboutBreadcrums";
import Footer from "../Components/Footer/Footer";
function About() {
  return (
    <>
      <div className="About_main">
        <div className="About_section">
          <div className="About_Container">
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li className="second_text">About</li>
            </ul>
          </div>
        </div>
        <BannerOne />
        <div className="about_banner_">
          <h2>Some special reson of Why <br/>clients Choice Us</h2>
          <HomebannerOne />
          <div className="about_conta_banner">
             <div className="about_conta_banner_inner">
              <h2>If you have any project or task for us<br/>Please contact us</h2>
              <Animatedbutton btnname="Contact Us!"/>
             </div>
          </div>
        </div>
        <AboutBreadcrums/>
        <Footer/>
      </div>
    </>
  );
}

export default About;
