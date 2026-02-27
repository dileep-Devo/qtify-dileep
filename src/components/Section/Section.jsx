import { Typography } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
export default function Section({ title, albums, genres = [] }) {
  return (
    <>
      {title !== "Songs" ? (
        <>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ marginBottom: "20px" }}
          >
            <Typography variant="h4" sx={{ color: "primary.contrastText" }}>
              {title}
            </Typography>
            <Typography variant="h4" sx={{ color: "primary.main" }}>
              Show all
            </Typography>
          </Stack>
          <Box sx={{ padding: "0px 25px" }}>
            <Carousel albums={albums} />
          </Box>
        </>
      ) : (
        <Box>
          <Typography variant="h4" sx={{ color: "primary.contrastText" }}>
            {title}
          </Typography>
          <Box></Box>
          <Box sx={{ padding: "0px 25px", marginTop: "20px" }}>
            <Carousel albums={albums} />
          </Box>
        </Box>
      )}
    </>
  );
}
