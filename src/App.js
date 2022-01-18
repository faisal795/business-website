import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navebar";
import Home from "./components/Home";
import Service from "./components/About";
import About from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error from "./components/Error";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route  path="about" element={<Service />} />
        <Route  path="service" element={<About />} />
        <Route  path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
