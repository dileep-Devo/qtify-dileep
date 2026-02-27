import axios from "axios";

const BACKEND_ENDPOINT = "https://qtify-backend.labs.crio.do";

const queryParams = {
  topAlbums: "/albums/top",
  newAlbums: "/albums/new",
  songs: "/songs",
  genres: "/genres",
};

export const fetchData = async (endpoint) => {
  const searchQuery = queryParams[endpoint];
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}${searchQuery}`);
    if (endpoint === "genres") return response.data.data;
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
