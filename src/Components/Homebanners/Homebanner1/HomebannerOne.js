import React from 'react'
 import "./homebannerone.css"
 const person = require("../../../Images/person.png")
 const shield = require("../../../Images/shield.png")
 const man = require("../../../Images/man.png")
function HomebannerOne() {
  return (
    <div className='hb_conatiner'>
      <div className='hb_big_circle' data-aos="fade-up"  data-aos-delay="300">
        <h2>Here is some reson why most of the clients happy to <span>Choice us.</span></h2>
        <p >Aaborisum ipsum dolor seat ameat consecteturerslmore be eli elitl elite consect bonsecteture.Contrary to populabeliefLorem ips Ipsum is not sirand. It’s Imo</p>
      </div>

      <div className='hb_service_text_icon'>
        <div className='bh_service_text_card' data-aos="fade-up"  data-aos-delay="400">
          <div className='hb_service_card_logo'>
            <img src={person} alt='person' style={{width:"100%",height:"100%",objectFit:"contain"}}/>
          </div>
          <div className='hb_service_text'>
            <h3>Talented Team</h3>
            <p>When we get any projects that time we Planing how we,re compleate our clients projects perfectly and we are a lots of ti researching about our project.</p>
          </div>
        </div>

        <div className='bh_service_text_card' data-aos="fade-up"  data-aos-delay="400">
          <div className='hb_service_card_logo second'>
            <img src={shield} alt='person' style={{width:"100%",height:"100%",objectFit:"contain"}}/>
          </div>
          <div className='hb_service_text'>
            <h3>Safe & Sceure</h3>
            <p>When we get any projects that time we Planing how we,re compleate our clients projects perfectly and we are a lots of ti researching about our project.</p>
          </div>
        </div>


        <div className='bh_service_text_card' data-aos="fade-up"  data-aos-delay="400">
          <div className='hb_service_card_logo third'>
            <img src={man} alt='person' style={{width:"100%",height:"100%",objectFit:"contain"}}/>
          </div>
          <div className='hb_service_text'>
            <h3>Online Support</h3>
            <p>When we get any projects that time we Planing how we,re compleate our clients projects perfectly and we are a lots of ti researching about our project.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomebannerOne