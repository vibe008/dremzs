import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Screen/Home/Home";
import AOS from "aos";
import { Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import About from "../src/Screen/About/About";
import Contactus from "./Screen/ConatctUs/Contactus";
import Blog from "./Screen/Blog/Blog";
import Casestudy from "./Screen/caseStudy/Casestudy";
import Casestudyinner from "./Screen/caseStudy/CaseStudyInner/Casestudyinner";
import BLogDetails from "./Screen/Blog/BlogDetails/BLogDetails";
function App() {
  useEffect(() => {
    AOS.init(); 
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, []);

  return (
    <div>
      <Navbar />
       <div>
       <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contactus />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Casestudy" element={<Casestudy />}></Route>
        <Route path="/Casestudyinner" element={<Casestudyinner />}></Route>
        <Route path="/BLogDetails" element={<BLogDetails />}></Route>
      </Routes>
       </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
