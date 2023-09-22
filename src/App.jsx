import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Trending" element={<Landing />}></Route>
        <Route path="/NewRelease" element={<Landing />}></Route>
        <Route path="/RecentUpdate" element={<Landing />}></Route>
        <Route path="*" element={<Landing />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
