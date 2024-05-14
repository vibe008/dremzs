import React, { useState } from "react";
import ContentHeading from "../../Components/PageContentHeading/ContentHeading";
import "./Contactus.css";
import Select from "react-dropdown-select";
import Animatedbutton from "../../Components/animatedBUtton/Animatedbutton"
import Footer from "../../Components/Footer/Footer"
function Contactus() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [values, setValues] = useState();
  const options = [
    {
      value: 1,
      label: "General Inquiry",
    },
    {
      value: 2,
      label: "Customer Support",
    },
    {
      value: 3,
      label: "Development",
    },
  ];
  return (
    <div className="contactus_section">
      <ContentHeading secondtextname="Contact " />
      <div className="Contact_form_section">
        <div className="contform_text">
          <h2 className="contactheading">GET IN TOUCH</h2>
          <p>
            Lorem ipsum dolor seat ameat dui hambes duitag istu leling too
            consecteture more be elite adipaiscing. According to contact with us
            you can easilly co- contact with us.
          </p>
          <h6>Address:</h6>
          <p>
            Rasin Avenew 02, Road No#02, House No#03, Street Address, New York,
            NY030, U.S.A.
          </p>
          <h6>Email:</h6>
          <p>Support.Rasin2021@e-mail.com</p>
          <h6>Phone:</h6>
          <p>(012) 222 33 4444, +000 22 333 444</p>
        </div>
        <div className="contform_inputform">
          <h2 className="contactheading hsecond">Book an Appointments</h2>
          <input
            className="contactus_input"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="contactus_input"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div style={{width:"95%"}} >
          <Select options={options}  defaultValue={options[0]} onChange={(values) => setValues(values)} style={{width:"100%",border:'1px solid #6b6a75',borderRadius:"5px"}} />
          </div>
          <textarea className="textarea" placeholder="Message"/>
           <Animatedbutton btnname="Send Message"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contactus;
