import React, { useEffect } from 'react'
import "./Blog.css"
import ContentHeading from '../../Components/PageContentHeading/ContentHeading'
function Blog() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, []);
  return (
    <div className='Blog_section'>
              <ContentHeading secondtextname="Blog" />
    </div>
  )
}

export default Blog