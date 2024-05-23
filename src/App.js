// src/App.js
import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Screen/Home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./Screen/About/About";
import Contactus from "./Screen/ConatctUs/Contactus";
import Blog from "./Screen/Blog/Blog";
import Casestudy from "./Screen/caseStudy/Casestudy";
import Casestudyinner from "./Screen/caseStudy/CaseStudyInner/Casestudyinner";
import BLogDetails from "./Screen/Blog/BlogDetails/BLogDetails";
import Service from "./Screen/Service/Service";
import ServiceInner from "./Screen/Service/ServiceInner";
import AOSProvider from "./Aos/AOSProvider"; // Import the AOSProvider

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <AOSProvider>
      <Navbar />
      <div>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contactus />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Casestudy" element={<Casestudy />} />
          <Route path="/Casestudyinner" element={<Casestudyinner />} />
          <Route path="/BLogDetails" element={<BLogDetails />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/ServiceInner" element={<ServiceInner />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </AOSProvider>
  );
}

export default App;
