import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"
// import { Provider } from "react-redux"
// import store from "./store.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
reportWebVitals()