import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Screen/Home/Home";
import AOS from "aos";
import { Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import About from "../src/Screen/About/About";
import Contactus from "./Screen/ConatctUs/Contactus";
import Blog from "./Screen/Blog/Blog";
function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
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
      </Routes>
       </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
