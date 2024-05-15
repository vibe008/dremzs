import React, { useEffect } from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import "./Casestudyinner.css";
import ContentHeading from "../../../Components/PageContentHeading/ContentHeading";
import Footer from "../../../Components/Footer/Footer";
import { useLocation } from "react-router-dom";
function Casestudyinner() {
    const location = useLocation();
    const item = location?.state?.item
    console.log("item",item)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const img = require("../../../Images/Digitalmarketing/web3.jpg");
  const img2 = require("../../../Images/projectresult.png");
  return (
    <div className="Casestudyinner_section">
      <ContentHeading secondtextname="Case Study Details" />
      <div className="Casestudyinner_container_main">
        <div className="Casestudyinner_container_inner">
          <div className="_container_inner_image">
            <img src={item.image} alt="img" />
          </div>
          <div className="_container_inner__text">
            <h3>Project Details</h3> <hr />
            <div className="_container_inner_project-details">
              <p>
                Date <span> : 11/10/2021</span>
              </p>
              <p>
                Skills Needed <span> : Html/CSS/Wordpress</span>
              </p>
              <p>
                Technologies <span> : Adobe Phtoshop CC </span>
              </p>
              <p>
                Live project <span> : www.clientscom</span>
              </p>
              <p>
                Created by <span> : Philip Hobs </span>
              </p>
              <p>
                Client name <span> : Crist Deo </span>
              </p>
              <p>
                Project type <span> : Development</span>
              </p>
            </div>
          </div>
        </div>
        <div className="Casestudyinner_container_para">
          <h3 className="_paraheading">
            Educational Website Design & Development
          </h3>
          <p className="_container_para">
            Control about the blind texts it is an almost unorthographic life
            One day however a small line of blind text by the name of Lorem
            Ipsum decided to leave for the far World of Grammar. The Big Oxmox
            advised On the other hand, we denounce with righteous indignation
            and dislike.
          </p>
          <p className="_container_para">
            by the charms of pleasure of the moment, so blinded by desire, that
            they cannot foresee the pain and trouble that are bound to ensue;
            and equal blame belongs to those who fail in their duty through
            weakness which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided
          </p>
        </div>
        <div className="Casestudyinner_container_Analysis">
          <div className="ProjectAnalysis">
            <h3 className="_paraheading">Project Analysis</h3>
            <p className="_container_para _paraheading_inner">
              We Reseach deeply to give the best quality services.
            </p>
            <div>
              <div className="_container_Analysis_question">
                <MdOutlineArrowRight size={25} color="#6b6a75" />
                <p className="_container_para added">
                  On the other hand, we denounce with righteous indignation
                  ipsum doler seat am
                </p>
              </div>
              <div className="_container_Analysis_question">
                <MdOutlineArrowRight size={25} color="#6b6a75" />
                <p className="_container_para added">
                  On the other hand, we denounce with righteous indignation
                  ipsum doler seat am
                </p>
              </div>
              <div className="_container_Analysis_question">
                <MdOutlineArrowRight size={25} color="#6b6a75" />
                <p className="_container_para added">
                  On the other hand, we denounce with righteous indignation
                  ipsum doler seat am
                </p>
              </div>
              <div className="_container_Analysis_question">
                <MdOutlineArrowRight size={25} color="#6b6a75" />
                <p className="_container_para added">
                  On the other hand, we denounce with righteous indignation
                  ipsum doler seat am
                </p>
              </div>
              <div className="_container_Analysis_question">
                <MdOutlineArrowRight size={25} color="#6b6a75" />
                <p className="_container_para added">
                  On the other hand, we denounce with righteous indignation
                  ipsum doler seat am
                </p>
              </div>
            </div>
          </div>
          <div className="ProjectSolution">
            <h3 className="_paraheading">Find Solution and Solve it</h3>
            <p className="_container_para _paraheading_inner">
              We Reseach deeply to give the best quality services.
            </p>
            <div>
              <div className="_container_Analysis_question">
                <MdOutlineArrowRight size={25} color="#6b6a75" />
                <p className="_container_para added">
                  On the other hand, we denounce with righteous indignation
                  ipsum doler seat am
                </p>
              </div>
              <div className="_container_Analysis_question">
                <MdOutlineArrowRight size={25} color="#6b6a75" />
                <p className="_container_para added">
                  On the other hand, we denounce with righteous indignation
                  ipsum doler seat am
                </p>
              </div>
              <div className="_container_Analysis_question">
                <MdOutlineArrowRight size={25} color="#6b6a75" />
                <p className="_container_para added">
                  On the other hand, we denounce with righteous indignation
                  ipsum doler seat am
                </p>
              </div>
              <div className="_container_Analysis_question">
                <MdOutlineArrowRight size={25} color="#6b6a75" />
                <p className="_container_para added">
                  On the other hand, we denounce with righteous indignation
                  ipsum doler seat am
                </p>
              </div>
              <div className="_container_Analysis_question">
                <MdOutlineArrowRight size={25} color="#6b6a75" />
                <p className="_container_para added">
                  On the other hand, we denounce with righteous indignation
                  ipsum doler seat am
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Casestudyinner_container_image">
            <div className="_container_image" >
             <img src={img2} alt="img2"/>
            </div>
            <div className="ProjectSolution">
            <h3 className="_paraheading">Find Solution and Solve it</h3>
            <p className="_container_para _paraheading_inner">
              We Reseach deeply to give the best quality services.
            </p>
            <div>
              <div className="_container_Analysis_question">
                <MdOutlineArrowRight size={25} color="#6b6a75" />
                <p className="_container_para added">
                  On the other hand, we denounce with righteous indignation
                  ipsum doler seat am
                </p>
              </div>
              <div className="_container_Analysis_question">
                <MdOutlineArrowRight size={25} color="#6b6a75" />
                <p className="_container_para added">
                  On the other hand, we denounce with righteous indignation
                  ipsum doler seat am
                </p>
              </div>
              <div className="_container_Analysis_question">
                <MdOutlineArrowRight size={25} color="#6b6a75" />
                <p className="_container_para added">
                  On the other hand, we denounce with righteous indignation
                  ipsum doler seat am
                </p>
              </div>
              <div className="_container_Analysis_question">
                <MdOutlineArrowRight size={25} color="#6b6a75" />
                <p className="_container_para added">
                  On the other hand, we denounce with righteous indignation
                  ipsum doler seat am
                </p>
              </div>
              <div className="_container_Analysis_question">
                <MdOutlineArrowRight size={25} color="#6b6a75" />
                <p className="_container_para added">
                  On the other hand, we denounce with righteous indignation
                  ipsum doler seat am
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Casestudyinner;
