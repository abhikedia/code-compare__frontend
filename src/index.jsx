import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./components/homepage";
import { MantineProvider } from "@mantine/core";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Homepage />
    </MantineProvider>
  </React.StrictMode>
);

reportWebVitals();
