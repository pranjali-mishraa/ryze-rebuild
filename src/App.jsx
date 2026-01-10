import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import { BrowserRouter } from "react-router-dom";
import CaseStudy from "./components/CaseStudy";
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path= "/aboutUs"element={<AboutUs />} />
      <Route path = "/caseStudy" element={<CaseStudy />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
