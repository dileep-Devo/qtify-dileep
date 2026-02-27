import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import AlbumPage from "./pages/AlbumPage";
const root = ReactDOM.createRoot(document.getElementById("root"));

let router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "home",
        Component: HomePage,
      },
      {
        path: "/album/:albumId",
        Component: AlbumPage,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// root.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ThemeProvider>
//   </React.StrictMode>,
// );
