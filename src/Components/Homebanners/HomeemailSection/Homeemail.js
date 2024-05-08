import React from 'react'
import Animatedbutton from '../../animatedBUtton/Animatedbutton'
import "./Homeemail.css"
function Homeemail() {
  return (
    <div className='homeecail_container'>
         <div className='homee_sect'>
         <h2>To get weekly & monthly our news subscribe Newsletter.</h2>
         <input type='text' placeholder='Enter Your Email'  className='homeemailinput'/>
         <Animatedbutton btnname="Subscribe"/>
         </div>
    </div>
  )
}

export default Homeemail