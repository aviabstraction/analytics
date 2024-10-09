import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Analytics from "./Analytics.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Analytics />
  </StrictMode>
);
