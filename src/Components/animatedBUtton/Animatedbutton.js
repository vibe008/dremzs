import React from "react";
import "./Animatedbutton.css";

import { IoIosArrowRoundForward } from "react-icons/io";

function Animatedbutton(props) {

  console.log("props.btnname",props.btnname)
  return (
    <div className="button_ani" data-aos="fade-up" >
      <a className="animated_href" href="/">
        {props.btnname}
      </a>
      <div
        style={{
          marginLeft: "-30px",
          zIndex: 999,
          opacity: 0.8,
          marginTop: "5px",
        }}
      >
        {props.btnname === "Next Post" && 
         <IoIosArrowRoundForward size={25} color="white" />
        }       
        {
          props.btnname === "Subscribe" && 
          <IoIosArrowRoundForward size={25} color="white" />
        }
        {
          props.btnname === "Contact Us!" && 
          <IoIosArrowRoundForward size={25} color="white" />
        }
      </div>
    </div>
  );
}
export default Animatedbutton;
