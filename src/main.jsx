import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <script src="/chat-bubble/chat-bubble.min.js"></script>
            <App />
        </Router>
    </React.StrictMode>
);
