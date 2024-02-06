import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Preloader from "../src/components/Pre";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./screens/Projects";

import StarsCanvas from "./components/StarBackground";

function App() {
  let width = window.innerWidth;
  console.log("width: " , width)
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {width > 700 && <StarsCanvas /> }
      
      <Preloader load={load} />

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
