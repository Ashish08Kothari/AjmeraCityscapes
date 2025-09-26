import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // 🔄 Changed BrowserRouter → HashRouter
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import CursorFollower from "./components/CursorFollower";
import ImageSlider from "./components/ImageSlider";
import ButtonPage from "./components/ButtonPage"; 
import "./index.css";
import Disclaimer from "./components/Disclaimer";
import Flik from "./components/Flik";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div className="app-wrapper">
        <CursorFollower />
        {loading && <Loader onFinish={() => setLoading(false)} />}
        {!loading && (
          <>
            <div className="background-layer"></div>

            <Routes>
              {/* Home page */}
              <Route
                path="/"
                element={
                  <>
                    <div className="main-container">
                      <Navbar />
                      <Hero />
                    </div>
                    <ImageSlider />
                    <Footer />
                    <Disclaimer />
                    <Flik></Flik>
                  </>
                }
              />

              {/* Button detail pages */}
              <Route path="/button/:id" element={<ButtonPage />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
