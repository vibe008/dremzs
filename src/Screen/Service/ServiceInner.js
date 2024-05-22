import React, { useEffect, useState } from "react";
import "./ServiceInner.css";
import Animatedbutton from "../../Components/animatedBUtton/Animatedbutton";
import Ctabutton from "../../Components/CtaButton/Ctabutton";
import Testimonials from "../../Components/Homebanners/testimonials/Testimonials";
import Modal from "../../Components/Modal/Modal";
import styled from "styled-components";
import Footer from "../../Components/Footer/Footer"
function ServiceInner() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, []);
  const ModalContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      color: #5c3aff;
    }
  `;

  const [isOpen, toggle] = useState(false);
  function handlOpenModal(open) {
    console.log("close modal");
    toggle(open);
  }
  // const banner = require("../../Images/servicebannner1.jpg");
  const banner = require("../../Images/servicebannner1.jpg");
  const spacesi = require("../../Images/spaceshi.png");
const customer = require("../../Images/customer.png");
  return (
    <div className="ServiceInner_section">
      <div className="ServiceInner_container">
        <div className="Serivce_Banner_image_con">
          {/* <img src={banner} alt='banner' style={{width:"100%",height:"600px",objectFit:"cover"}}/> */}
          <div className="Serivce_Banner_image_overlay">
            <div className="image_overlay_inner">
              <div className="overlay_inner_text">
                <h1>Web Development Services</h1>
                <p className="servicePara">
                  We design and build industry-leading web-based products that
                  bring value to your customers, delivered with compelling UX.
                </p>
                <Animatedbutton btnname="Read More" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ServiceInner_container_containet">
        <h2 className="heading2">
          What are web development <span>services?</span>
        </h2>
        <p className="servicePara Parase">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <div className="ServiceInner_CTA">
          <Ctabutton />
        </div>
        <div className="ServiceInner_second_contanet">
          <div className="second_contanet_para">
            <p className="servicePara Parase">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
          <div className="second_contanet_img">
            <img
              src={banner}
              alt="banner"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <Testimonials />

        <div className="service_iner_contact_us">
          <div className="iner_contact_usin">
            <div>
              <h3 className="service_iner_contact_us_heading">
                Turn Your Vision into Reality
              </h3>
              <p className="service_iner_contact_us_para">
                Get Free Consultancy
              </p>
            </div>
            <div>
              <div className="csno">
                <span>contact us now</span>
                <p>9826374593</p>
              </div>
              <div className="GETs">
                <span>or</span>
                <button
                  onClick={() => {
                    toggle(true);
                  }}
                >
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="servicePara Parase">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div className="client_review">
          <div className="client_review_container">
          <div style={{height:"50%"}}>
          <div className="tr">
            <div className="toratedimg">
              <img
                src={spacesi}
                alt="spac"
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <div className="topratedtext">
              <h5 className="topRatedp1">Top Rated</h5>
              <p className="topRatedp2">Creative Agency</p>
            </div>
          </div>
          </div>
          <div style={{height:"50%"}}>
          <div className="tr">
            <div className="toratedimg">
              <img
                src={customer}
                alt="spac"
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <div className="topratedtext">
              <h5 className="topRatedp1">Happy Clients</h5>
              <p className="topRatedp2">5K+ Happy Clients</p>
            </div>
          </div>
          </div>

          </div>
          <div className="Cta">
            <Ctabutton/>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} handleClose={() => handlOpenModal(false)}>
        <ModalContent>
          <h1> Awesome modal </h1>
        </ModalContent>
      </Modal>
      <Footer/>
    </div>
  );
}

export default ServiceInner;
