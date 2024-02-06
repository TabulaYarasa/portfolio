import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Preloader from "../src/components/Pre";
import posthog from "posthog-js";
import { useEffect, useState } from "react";
import PostHogPageviewTracker from "./components/PostHogPageviewTracker";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./screens/Projects";
import Footer from "./components/Footer";
import StarsCanvas from "./components/StarBackground";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <StarsCanvas />
<Preloader load={load}/>
        <PostHogPageviewTracker/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
 
    </Router>
  );
}

export default App;
