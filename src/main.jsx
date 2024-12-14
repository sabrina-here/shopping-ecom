import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { DarkModeProvider } from "./Components/DarkModeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <RouterProvider router={routes}></RouterProvider>
    </DarkModeProvider>
  </StrictMode>
);
