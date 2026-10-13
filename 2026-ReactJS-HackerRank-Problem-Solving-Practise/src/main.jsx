import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";

import ContactForm from "2026-ReactJS-HackerRank-Problem-Solving-Practise\src\Medium Difficulty\[Solution Evidence] Contact Form\ContactForm.js";

import ItemListManager from "./2026-ReactJS-HackerRank-Problem-Solving-Practise\src\Medium Difficulty\[Solution Evidence] Item List Manager\ItemListManager.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <div className="module">
      <ContactForm />
    </div>
    <div className="module">
      <ItemListManager />
    </div>
  </StrictMode>,
);
