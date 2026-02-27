import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <Navbar />
      {/* <div>
        <Link to="/">Home</Link> | {""}
        <Link to={`/album/1`}>Album</Link>
      </div> */}
      <Outlet />
    </div>
  );
}

export default App;
