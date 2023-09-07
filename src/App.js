import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import WaitList from "./screens/Waitlist";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brandlist" element={<WaitList />} />
        <Route path="/waitlist" element={<WaitList />} />
      </Routes>
      {/* <ToastContainer /> */}
      {/* <Toaster /> */}
    </Router>
  );
}

export default App;
