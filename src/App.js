import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Workpage from "./pages/Workpage";
import Aboutpage from "./pages/Aboutpage";
import Navbar from "./components/Navbar";
import Contactus from "./pages/Contactus";
import ServicePage from "./pages/ServicePage";
import Footer from "./components/Footer";
import styled from "styled-components";
import OrderPage from "./pages/OrderPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/work" element={<Workpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/order" element={<OrderPage />}/>
        </Routes>
        <Footer />
        <a href="https://wa.me/918126631053" target="_blank">
          <WhatsappIcon>
            <FontAwesomeIcon icon={faWhatsapp} className="icon2" />
          </WhatsappIcon>
        </a>
      </Router>
    </div>
  );
}
const WhatsappIcon = styled.div`
  position: fixed;
  background: green;
  color: white;
  width: 50px;
  height: 50px;
  bottom: 15px;
  right: 15px;
  border-radius: 25px;
  .icon2 {
    padding-left: 7px;
    padding-top: 5px;
    font-size: 40px;
  }
`;
export default App;
