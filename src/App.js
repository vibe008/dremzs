import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Screen/Home/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []); 
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
