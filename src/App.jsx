import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import Loader from "./components/Loader";
import "./styles/global.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </ThemeProvider>
  );
}

export default App;