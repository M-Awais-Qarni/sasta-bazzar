import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/style.scss";
import reportWebVitals from "./reportWebVitals";
import Modal from 'react-modal';

// import 'react-toastify/dist/ReactToastify.css'
import { AdminProvider } from "./components/common/AdminContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
Modal.setAppElement('#modal-root'); // Set the modal container element

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminProvider>
        <App />
      </AdminProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
