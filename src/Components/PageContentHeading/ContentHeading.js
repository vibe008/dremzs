import React from "react";
import "./Pagecontent.css";
import { Link } from "react-router-dom";
function ContentHeading(props) {
  return (
    <div className="ContentHeading_container">
      <div className="ContentHeading_container_innner">
        <div className="ch_pri">
        <Link  to="/" >Home</Link>
        </div>
         <span></span>
        <div className="ch_seco">
        <p  >{props.secondtextname}</p>
        </div>       
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="second_text">{props.secondtextname}</li>
        </ul> */}
      </div>
    </div>
  );
}

export default ContentHeading;
