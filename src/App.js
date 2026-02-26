import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { Outlet } from "react-router";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
