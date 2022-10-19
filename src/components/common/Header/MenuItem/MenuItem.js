import React from "react";
import MaterialMenuItem from "@mui/material/MenuItem";

const MenuItem = ({
  language,
  handleLanguageClose,
  flag,
  langText,
  langSubstring,
  langSymbol,
}) => {
  return (
    <MaterialMenuItem onClick={(e) => handleLanguageClose(langSymbol, e)}>
      {langText}
    </MaterialMenuItem>
  );
};

export default MenuItem;
