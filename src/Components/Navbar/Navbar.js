import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { RxCross2 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
const logo = require("../../Images/logo.png");

function Navbar() {
  const [activatesticky, setActiveSticky] = useState(false);
  const [navlinkactive, setnavlinkactive] = useState(1);
  const [toggled, setToggled] = React.useState(false);


  useEffect(() => {
    window.addEventListener("scroll", function () {
      // Get the current scroll position
      var scrollPosition = window.scrollY;
      if (scrollPosition >= 200) {
        setActiveSticky(true);
      }
      if (scrollPosition === 0) {
        setActiveSticky(false);
      }
      // Log the scroll position to the console
      // console.log("Scroll Position:", scrollPosition);
    });
  }, []);
  return (
    <>
      <div className="mob_menu">
        <div className="logo_container">
          <img src={logo} alt="logo" />
        </div>
        <Sidebar
          rtl
          onBackdropClick={() => setToggled(false)}
          toggled={toggled}
          breakPoint="always"
        >
          <div style={{ height: "100%", position: "relative" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                position: "absolute",
                left: "10px",
                top: "10px",
              }}
            >
              <RxCross2 size={40} onClick={() => setToggled(false)} />
            </div>
            <div style={{ width: "70%", paddingTop: "100px" }}>
              <Menu>
                <MenuItem>
                  {" "}
                  <Link
                    to="/"
                    className="navlinkactive"
                    onClick={() => {
                      setToggled(false);
                    }}
                  >
                    Home
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link
                    to="/About"
                    className="navlinkactive"
                    onClick={() => {
                      setToggled(false);
                    }}
                  >
                    About
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/Service"
                    className="navlinkactive"
                    onClick={() => {
                      setToggled(false);
                    }}
                  >
                    Service
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/Blog"
                    className="navlinkactive"
                    onClick={() => {
                      setToggled(false);
                    }}
                  >
                    Blog
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link
                    to="/Contact"
                    className="navlinkactive"
                    onClick={() => {
                      setToggled(false);
                    }}
                  >
                    Contact
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </Sidebar>
        {!toggled && (
          <div style={{ width: "50px", height: "50px", zIndex: 999 }}>
            <IoMdMenu size={50} onClick={() => setToggled(!toggled)} />
          </div>
        )}
      </div>

      {/* <div className={hidenav ? "cross_menu" : "hamburger_menu"}>
        <button
          style={{ background: "none", border: "none" }}
          onClick={ToggleNavbar}
          href="/"
        >
          {hidenav ? (
            <i className="fa-solid fa-xmark" style={{ fontSize: "30px" }}></i>
          ) : (
            <i className="fa-solid fa-bars" style={{ fontSize: "30px" }}></i>
          )}
        </button>
      </div> */}

      <div className={activatesticky ? "navbar_container" : "navbar_web"}>
        <div className="navbar_Section">
          <div className="navbar_content">
            <div className="logo_container">
              <img src={logo} alt="logo" />
            </div>
            <div className="Nav_link_content">
              <ul className="nav_ul">
                <li className="nav_link_list">
                  <Link
                    to="/"
                    className={
                      navlinkactive === 1 ? "navlinkactive" : "Nav_link"
                    }
                    onClick={() => {
                      setnavlinkactive(1);
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav_link_list">
                  <Link
                    to="/About"
                    className={
                      navlinkactive === 2 ? "navlinkactive" : "Nav_link"
                    }
                    onClick={() => {
                      setnavlinkactive(2);
                    }}
                  >
                    About
                  </Link>
                </li>
                <li className="nav_link_list">
                  <Link to="/Service"
                    className={
                      navlinkactive === 3 ? "navlinkactive" : "Nav_link"
                    }
                    onClick={() => {
                      setnavlinkactive(3);
                    }}
                  >
                    Service
                  </Link>
                </li>
                <li className="nav_link_list">
                  <Link
                    className={
                      navlinkactive === 4 ? "navlinkactive" : "Nav_link"
                    }
                    to="/Blog"
                    onClick={() => {
                      setnavlinkactive(4);
                    }}
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav_link_list">
                  <Link
                    to="/Contact"
                    className={
                      navlinkactive === 5 ? "navlinkactive" : "Nav_link"
                    }
                    onClick={() => {
                      setnavlinkactive(5);
                    }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="Appointment_btn">
                <a href="/">Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
