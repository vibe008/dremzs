import React from 'react'
import "./recentstudy.css"
function RecentStudy() {
    const data = [
        {
            id:"1",
            text:"Web Development"
        },
        {
            id:"2",
            text:"Digital Marketing"
        },
        {
            id:"3",
            text:"Web & Graphic Design"
        },
        {
            id:"4",
            text:"Business Consulting"
        },
        {
            id:"5",
            text:"Social media"
        },
    ]
  return (
    <div className='recnet_container_h'>
      <div className='recent_text_container'>
         <h2>Recent Case Study</h2>
         <div className='re_te_section'>
             <div className='re_te_btn'>
                <a className='rebtn' href='/'>Social media</a>
                <div className='re_line'></div>
             </div>
         </div>
      </div>
      <div className='recent_view'>

      </div>
    </div>
  )
}

export default RecentStudy