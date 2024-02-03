import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";


posthog.init("phc_8ZFJhCPgHSwQKw11impw4SEWcnN0gToiVH5SzFnuUel", {
  api_host: "https://app.posthog.com",
  capture_pageview: false
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </React.StrictMode>
);
