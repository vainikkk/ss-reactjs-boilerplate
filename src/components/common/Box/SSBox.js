import { Box } from "@mui/system";
import React from "react";

const SSBox = ({ children }) => {
  const styles = {
    border: "1px solid rgba(0, 0, 0, 0.12)",
    padding: "2rem",
    borderRadius: "4px",
    marginBottom: "1rem",
  };
  return <Box sx={styles}>{children}</Box>;
};

export default SSBox;
