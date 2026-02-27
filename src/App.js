import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router";
import { fetchData } from "./api/api";
import { Box } from "@mui/material";

function App() {
  const getInitialData = () => ({
    topAlbums: [],
    newAlbums: [],
    songs: [],
    genres: [],
  });
  const [data, setData] = useState(getInitialData);

  const generateData = (key, fetchData) => {
    fetchData(key)
      .then((response) => {
        setData((prevData) => ({
          ...prevData,
          [key]: response,
        }));
      })
      .catch((error) => {
        console.error(`Error fetching ${key} data:`, error);
      });
  };

  useEffect(() => {
    // Simulate fetching data from an API
    const dataObj = getInitialData();
    Object.keys(dataObj).forEach((key) => {
      generateData(key, fetchData);
    });
  }, []);

  const { topAlbums, newAlbums, songs, genres } = data;
  return (
    <Box sx={{ backgroundColor: "primary.dark", height: "100vh" }}>
      <Navbar />
      {/* <div>
        <Link to="/">Home</Link> | {""}
        <Link to={`/album/1`}>Album</Link>
      </div> */}
      <Outlet context={{ topAlbums, newAlbums, songs, genres }} />
    </Box>
  );
}

export default App;
