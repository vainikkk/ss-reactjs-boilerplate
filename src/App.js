import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/constants/theme";
import React from "react";
import RoutesConfig from "./routes";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <RoutesConfig />
      </ThemeProvider>
    </div>
  );
}

export default App;
