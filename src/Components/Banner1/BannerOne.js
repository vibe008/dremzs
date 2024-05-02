import React from "react";
import "./Bannerone.css";
import Animatedbutton from "../animatedBUtton/Animatedbutton";
function BannerOne() {
  return (
    <div className="bannerone_conatiner">
      <div className="bannerone_image_container"></div>
      <div className="bannerone_text">
        <div className="banner_main_text">
          <h2>A creative agency of some <span className="special_text">Creative & inteligents</span> people</h2>
        </div>
        <p className="banner_para">
        Lorem ipsum dolor seat ameat dui too consecteture elite. Wel are raisn a creative & digital agency who always provideing a huge creative and marketing relatated.
        </p>
        <div className="banner_top_client">
            <div className="topRated">
            <h5 className="topRatedp1">Top Rated</h5>
            <p className="topRatedp2">Creative Agency</p>
            </div>
            <div className="happy_cient">
            <h5 className="topRatedp1">Happy Clients</h5>
            <p className="topRatedp2">5K+ Happy Clients</p>
            </div>
        </div>
        <div className="bannner_explore_more">
            <Animatedbutton btnname="Explore More"/>
        </div>
      </div>
    </div>
  );
}

export default BannerOne;
