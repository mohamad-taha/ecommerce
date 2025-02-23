import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Sidebar from "./components/Sidebar/Sidebar";
import { Context } from "./context/Context";
import "./App.css";

const App = () => {
  const { setShowSidebar } = useContext(Context);
  const location = useLocation();
  useEffect(() => {
    setShowSidebar(false);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Shop />} path="/shop" />
        <Route element={<Product />} path="/product/:id" />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
