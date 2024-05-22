import React, { useEffect } from "react";
import "./Service.css";
import ContentHeading from "../../Components/PageContentHeading/ContentHeading";
import { IoIosArrowRoundForward } from "react-icons/io";
import styled from "styled-components";
import Homeemail from "../../Components/Homebanners/HomeemailSection/Homeemail";
import Faq from "react-faq-component";
import Testimonials from "../../Components/Homebanners/testimonials/Testimonials";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
function Service() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, []);
  const eclips = require("../../Images/servicepng.png");
  const icon1 = require("../../Images/aboutcodeoptimisation.png");

  const serviceArr = [
    {
      id: "1",
      heading: "Web Developmnt",
      icon: require("../../Images/serviceicon1.png"),
      para: "According to elite we providing web Development services to our honorable clients for business.",
      bg: "#4d41e1",
    },
    {
      id: "2",
      heading: "Digital Marketing",
      icon: require("../../Images/serviceicon2.png"),
      para: "According to elite we providing web Development services to our honorable clients for business.",
      bg: "#ff884e",
    },
    {
      id: "3",
      heading: "Web & Graphic Design",
      icon: require("../../Images/serviceicon3.png"),
      para: "According to elite we providing web Development services to our honorable clients for business.",
      bg: "#36c1ea",
    },
    {
      id: "4",
      heading: "Business Consulting",
      icon: require("../../Images/serviceicon4.png"),
      para: "According to elite we providing web Development services to our honorable clients for business.",
      bg: "#f14d5d",
    },
    {
      id: "5",
      heading: "Social Marketing",
      icon: require("../../Images/serviceicon5.png"),
      para: "According to elite we providing web Development services to our honorable clients for business.",
      bg: "#fdbc0d",
    },
    {
      id: "6",
      heading: "Email Marketing",
      icon: require("../../Images/serviceicon6.png"),
      para: "According to elite we providing web Development services to our honorable clients for business.",
      bg: "#ff884e",
    },
  ];

  const StyledDiv = styled.div`
    width: 40px;
    height: 40px;
    position: relative;
    margin-left: 20px;

    &::before {
      content: "";
      position: absolute;
      left: -30px;
      height: 100%;
      width: 100%;
      z-index: -1;
      opacity: 0.1;
      border-radius: 50%;
      background-color: ${(props) => props.color};
    }
  `;

  const data = {
    // title: "FAQ (How it works)",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:"Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
    ],
  };

  const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };

  return (
    <div className="Service_Section">
      <ContentHeading secondtextname="Service" />
      <img className="eclips" src={eclips} alt="eclips" />
      <div className="Service_container">
        <h2>
          We've helped hundreds <br /> of clients to reach internet & grow{" "}
          <br /> <span>their Business</span>
        </h2>
        <div className="Service_container_inner">
          {serviceArr.map((item, key) => {
            return (
              <div className="Service_container_inner_card">
                <div className="card_inner">
                  <StyledDiv
                    key={key}
                    color={item.bg}
                    className="s_inner_card_icon"
                  >
                    <img src={item.icon} alt="icon1" />
                  </StyledDiv>
                  <h3>Web Developmnt</h3>
                  <p>
                    According to elite we providing web Development services to
                    our honorable clients for business.
                  </p>
                  <div
                    className="card_inner_circle"
                    style={{ background: item.bg }}
                  >
                    <Link to="/ServiceInner">
                    <IoIosArrowRoundForward color="white" />
                    </Link>
            
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Homeemail />
      <Testimonials />
      <div className="Fqa_section">
        <Faq data={data} styles={styles} config={config} />
      </div>
      <Footer/>
    </div>
  );
}

export default Service;
