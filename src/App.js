import {Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import {HomePage} from "./pages/HomePage/HomePage";
import {About}  from "./pages/About/About";
import {OurTeam} from "./components/OurTeam/OurTeam";
import { Footer } from "./components/Footer/Footer";

// import {Gallery} from "./pages/Gallery/Gallery"

function App() {
  return (
  <>
   <Navbar/>
   <Routes>
  <Route path="/" element ={<HomePage />} />
  <Route path="about" element ={<About />} />
  <Route path="our-team" element ={<OurTeam />} />
  {/* <Route path="gallery" element ={<Gallery />} /> */}
   </Routes>
   <Footer />
    </>
  );
}

export default App;
