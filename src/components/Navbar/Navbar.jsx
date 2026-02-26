import React from "react";
import { Link } from "react-router";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="search a song of your choice"
        searchData={searchData}
      />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;

// import styles from "./Navbar.module.css";
// import { Stack, Box, Button } from "@mui/material";
// import SearchBar from "./SearchBar";

// export default function Navbar() {
//   return (
//     <Stack className={styles.navbar} direction="row">
//       <Box sx={{ display: "flex" }}>
//         <img src="/assets/QTify_icon.png" alt="QTify_Icon" />
//       </Box>
//       <SearchBar className={"search-bar"} />
//       <Box sx={{ backgroundColor: "#101010", borderRadius: "12px" }}>
//         <Button
//           variant="contained"
//           sx={{
//             height: "100%",
//             width: "100%",
//             background: "#121212",
//             fontFamily: "Poppins, sans-serif",
//             color: "#34C94B",
//           }}
//         >
//           Give Feedback
//         </Button>
//       </Box>
//     </Stack>
//   );
// }
