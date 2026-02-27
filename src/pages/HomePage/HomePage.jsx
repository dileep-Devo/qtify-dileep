import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import styles from "./HomePage.module.css";
import { Box, Divider } from "@mui/material";
import { useOutletContext } from "react-router";

export default function HomePage() {
  const { topAlbums, newAlbums, songs, genres } = useOutletContext();
  return (
    <Box>
      {" "}
      <Hero />
      {/* Albums section */}
      <Box className={styles.sectionsContainer}>
        <Box>
          <Section title="Top Albums" albums={topAlbums} />
        </Box>

        <Box sx={{ marginTop: "40px" }}>
          <Section title="New Albums" albums={newAlbums} />
        </Box>

        <Divider sx={{ backgroundColor: "primary.main", margin: "40px 0" }} />
        <Box sx={{ marginTop: "40px" }}>
          <Section title="Songs" albums={songs} genres={genres} />
        </Box>
      </Box>
    </Box>
  );
}
