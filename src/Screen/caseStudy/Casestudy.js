import React, { useState } from "react";
import ContentHeading from "../../Components/PageContentHeading/ContentHeading";
import { GrFormPrevious ,GrFormNext} from "react-icons/gr";
import "./Casestudy.css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer"
function Casestudy() {
  const data = [
    {
      id: "1",
      image: require("../../Images/webdevelopment/web3.jpg"),
      heading: "Online educational website development",
    },
    {
      id: "2",
      image: require("../../Images/webdevelopment/web2.jpg"),
      heading: "Educational website development",
    },
    {
      id: "3",
      image: require("../../Images/webdevelopment/web1.jpg"),
      heading: "Business website Development",
    },
    {
      id: "4",
      image: require("../../Images/Digitalmarketing/web3.jpg"),
      heading: "Online educational website development",
    },
    {
      id: "5",
      image: require("../../Images/Digitalmarketing/web2.jpg"),
      heading: "Educational website development",
    },
    {
      id: "6",
      image: require("../../Images/Digitalmarketing/web1.jpg"),
      heading: "Business website Development",
    },
    {
      id: "7",
      image: require("../../Images/graphics/graphics1.jpg"),
      heading: "Online educational website development",
    },
    {
      id: "8",
      image: require("../../Images/graphics/graphics2.jpg"),
      heading: "Educational website development",
    },
    {
      id: "9",
      image: require("../../Images/graphics/graphics3.jpg"),
      heading: "Business website Development",
    },
    {
      id: "10",
      image: require("../../Images/webdevelopment/web3.jpg"),
      heading: "Online educational website development",
    },
    {
      id: "11",
      image: require("../../Images/webdevelopment/web1.jpg"),
      heading: "Educational website development",
    },
    {
      id: "12",
      image: require("../../Images/graphics/graphics3.jpg"),
      heading: "Business website Development",
    },
    {
      id: "13",
      image: require("../../Images/webdevelopment/web3.jpg"),
      heading: "Online educational website development",
    },
    {
      id: "14",
      image: require("../../Images/webdevelopment/web2.jpg"),
      heading: "Educational website development",
    },
    {
      id: "15",
      image: require("../../Images/webdevelopment/web1.jpg"),
      heading: "Business website Development",
    },
    {
      id: "16",
      image: require("../../Images/Digitalmarketing/web3.jpg"),
      heading: "Online educational website development",
    },
    {
      id: "17",
      image: require("../../Images/Digitalmarketing/web2.jpg"),
      heading: "Educational website development",
    },
    {
      id: "18",
      image: require("../../Images/Digitalmarketing/web1.jpg"),
      heading: "Business website Development",
    },
    {
      id: "19",
      image: require("../../Images/webdevelopment/web3.jpg"),
      heading: "Online educational website development",
    },
    {
      id: "20",
      image: require("../../Images/webdevelopment/web2.jpg"),
      heading: "Educational website development",
    },
    {
      id: "21",
      image: require("../../Images/webdevelopment/web1.jpg"),
      heading: "Business website Development",
    },
    {
      id: "22",
      image: require("../../Images/Digitalmarketing/web3.jpg"),
      heading: "Online educational website development",
    },
    {
      id: "23",
      image: require("../../Images/Digitalmarketing/web2.jpg"),
      heading: "Educational website development",
    },
    {
      id: "24",
      image: require("../../Images/webdevelopment/web1.jpg"),
      heading: "Business website Development",
    },
  ];

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item, index) => (
            <div key={index} className="recent_studey_card">
              <div className="re_st_img">
                <img src={item.image} alt={`img${index}`} />
              </div>
              <div className="re_st_text">
                <h4>
                  <Link className="re_st_text_link">{item.heading}</Link>
                </h4>
                <Link className="re_st_text_readMOre">Read more</Link>
              </div>
            </div>
          ))}
      </>
    );
  }

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const currentItems = data.slice(offset, offset + itemsPerPage);
  return (
    <div className="casestudy_section">
      <ContentHeading secondtextname="Case Study" />
      <div className="casestudy_container">
        <h2>
          Recently done case study by our <br />
          inteligents team
        </h2>
        <div className="casestude_card_container">
          <Items currentItems={currentItems} />
        </div>

      </div>
      <ReactPaginate
          previousLabel={<GrFormPrevious size={20}  style={{marginTop:"5px"}}/>}
          nextLabel={<GrFormNext size={20}  style={{marginTop:"5px"}}/>}
          breakLabel="..."
          breakClassName="break-me"
          pageCount={pageCount}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          activeClassName="active"
        />
      <Footer/>
    </div>
  );
}

export default Casestudy;
