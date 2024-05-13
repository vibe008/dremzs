import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Screen/Home/Home";
import AOS from "aos";
import { Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import About from "./About/About";
import Footer from "./Components/Footer/Footer";
import Contactus from "./Screen/ConatctUs/Contactus";
function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contactus />}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
