import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Workpage from "./pages/Workpage";
import Aboutpage from "./pages/Aboutpage";
import Navbar from "./components/Navbar";
import Contactus from "./pages/Contactus";
import ServicePage from "./pages/ServicePage";
import Footer from "./components/Footer";
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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
