import React, { useState } from "react";
import "./Homefooter.css";
import { TfiYoutube } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import Animatedbutton from "../../animatedBUtton/Animatedbutton";
const dootedimg = require("../../../Images/dottednavpng.png");
const footerlogo = require("../../../Images/homefooterlogo.png");
function Homefooter() {
  const [email, setEmail] = useState("");
  return (
    <div className="Homefooter_Section">
      {/* <div className="dotted_footer">
        <img src={dootedimg} alt="dootedimg" />
      </div> */}
      <div className="Homefooter_contact_us">
        <div className="Homefooter_contact_us_innner">
          <h2>
            If you have any project or task for us<br></br>
            <b>Please contact us</b>
          </h2>
          <Animatedbutton btnname="Contact Us!" />
        </div>
      </div>
      <div className="Homefooter_content">
        <div className="row">
          <div className="content_heading">
            <div className="hf_logo">
              <img src={footerlogo} alt="footerlogo" />
            </div>
            <p>
              This is Photoshop's version of LoreiIpsum.
              <br />
              Aenean sollicitudin,{" "}
            </p>
            <div className="hf_address">
              <p>Address: House 22, Road No : 3, Street address, DHK</p>
              <p>
                Phone: <a href="tel:+000-1234-678">+000-1234-678</a>
                <br />
                <span>
                  Email:{" "}
                  <a href="mailto:info@yourmail.com">
                    mailto:info@yourmail.com
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="contetnt_links">
            <h3 className="footerh3">Quick Links</h3>
            <ul>
              <li>
                <a href="/">Tips & Tricks</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Trams & Conditions</a>
              </li>
              <li>
                <a href="/">Portfolio</a>
              </li>
            </ul>
          </div>
          <div className="contetnt_suscribe">
            <h3 className="footerh3">Subscribes</h3>
            <p>
              This is Photoshop's version of LoreiIpsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin,{" "}
            </p>
            <div className="input_div">
              <input
                className="home_email_input"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <button className="email_send_btn">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="hf_social_media">
          <div className="icons">
            <div className="inner_icon">
              <TfiYoutube />
            </div>
            <div className="inner_icon">
              <FaFacebook />
            </div>
            <div className="inner_icon">
              <FaTwitter />
            </div>
            <div className="inner_icon">
              <PiInstagramLogoFill />
            </div>
          </div>
          <p>
            © 2021 All Right Reserved,<a href="/">Rasin</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homefooter;
