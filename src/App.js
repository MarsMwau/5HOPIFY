import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import ProductList from "./ProductList";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<ProductList />} />
      </Routes>
    </div>
  );
}
export default App;