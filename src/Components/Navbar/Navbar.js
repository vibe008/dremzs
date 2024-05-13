import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const logo = require("../../Images/logo.png");
function Navbar() {
    const [activatesticky , setActiveSticky]=useState(false)
    const [hidenav , setHideNav] =useState(false)
    const [navlinkactive , setnavlinkactive]=useState(1)
    const [isactive , setisactive]=useState(false)
    const ToggleNavbar = ()=>{
        // setHideNav(!hidenav)
    }
    useEffect(()=>{
      window.addEventListener('scroll', function() {
        // Get the current scroll position
        var scrollPosition = window.scrollY;
         if(scrollPosition >= 200){
          setActiveSticky(true)
         }
         if(scrollPosition === 0){
          setActiveSticky(false)
         }
        // Log the scroll position to the console
        console.log('Scroll Position:', scrollPosition);
    });
    },[])
  return (
    <>
      <div className={hidenav?"cross_menu":"hamburger_menu"}>
        <button style={{background:"none" ,border:"none"}} onClick={ToggleNavbar} href="/">
            {hidenav ? <i className="fa-solid fa-xmark" style={{fontSize:"30px"}} ></i>
            :<i className="fa-solid fa-bars" style={{fontSize:"30px"}} ></i>}</button>
      </div>

      <div className={activatesticky?"navbar_container":""}>
      <div className={hidenav?"navbar_Section_active":"navbar_Section"}>
        <div className="navbar_content">
          <div className="logo_container">
            <img src={logo} alt="logo" />
          </div>
          <div className="Nav_link_content">
            <ul className="nav_ul">
              <li className="nav_link_list">
                <Link to="/" className={navlinkactive === 1 ? "navlinkactive" :"Nav_link"}  onClick={()=>{
                  setisactive(true)
                  setnavlinkactive(1)
                }}>
                  Home
                </Link>
              </li>
              <li className="nav_link_list">
                <Link to="/About" className={navlinkactive === 2 ? "navlinkactive" :"Nav_link"}  onClick={()=>{
                  setnavlinkactive(2)

                }}>
                  About
                </Link>
              </li>
              <li className="nav_link_list">
                <a className={navlinkactive === 3 ? "navlinkactive" :"Nav_link"} href="/" onClick={()=>{
                  setnavlinkactive(3)
                }}>
                  Service
                </a>
              </li>
              <li className="nav_link_list">
                <a className={navlinkactive === 4 ? "navlinkactive" :"Nav_link"} href="/" onClick={()=>{
                  setnavlinkactive(4)
                }}>
                  Blog
                </a>
              </li>
              <li className="nav_link_list">
                <Link to="/Contact" className={navlinkactive === 5 ? "navlinkactive" :"Nav_link"}  onClick={()=>{
                  setnavlinkactive(5)
                }} >
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
