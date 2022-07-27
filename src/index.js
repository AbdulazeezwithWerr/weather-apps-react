import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './components/style.css';


import ContextApi from "./components/ContextApi";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextApi children={<App />}   />
  </StrictMode>
);
