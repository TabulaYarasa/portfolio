import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";

import posthog from "posthog-js";
import { useEffect } from "react";
import PostHogPageviewTracker from "./components/PostHogPageviewTracker";

function App() {


  return (
    <Router>
        <PostHogPageviewTracker/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
