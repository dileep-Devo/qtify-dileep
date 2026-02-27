import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import styles from "./MediaCard.module.css";

// Replace with your actual album image import
// import albumCover from "./english-song.jpg";

/**
 * MediaCard
 * Displays an album cover with a Warner Classic badge overlay,
 * a "100 Follows" chip, and the album title.
 * Inherits all typography and colour tokens from the MUI theme
 * provided in App.js — no local theme access needed.
 */
export default function MediaCard({ album }) {
  return (
    <>
      <Card className={styles.card}>
        {/* ── Album Art + Badge Overlay ── */}

        <CardMedia
          component="img"
          image={album.image}
          alt={album.title}
          className={styles.media}
          sx={{ height: "85%" }}
        ></CardMedia>

        {/* ── Meta: Chip + Title ── */}
        <CardContent
          className={styles.content}
          sx={{ backgroundColor: "primary.contrastText", height: "15%" }}
        >
          <Chip
            label={`${album.follows} Follows`}
            size="small"
            className={styles.chip}
            sx={{
              backgroundColor: "primary.dark",
              typography: "body1",
              color: "primary.contrastText",
              height: "100%",
            }}
          />
        </CardContent>
      </Card>

      <Typography
        variant="body1"
        sx={{
          color: "primary.contrastText",
          backgroundColor: "primary.dark",
          margin: "10px 0",
        }}
      >
        {album.title}
      </Typography>
    </>
  );
}
