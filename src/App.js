import React from "react";
import { Routes, Route } from "react-router-dom";
import List from './components/list';
import Navbar from "./components/navbar";
import Search from "./components/search";
import "./style.css";

export default function App() {
  return (
    <div className="app-container">
      <div className="app-navigator"><Navbar /></div>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="list" element={<List />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
}
