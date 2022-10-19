import React from "react";

import UnitedStates from "assets/images/flags/United States.svg";
import French from "assets/images/flags/French.svg";

const Flag = ({ language }) => {
  const renderFlag = (language) => {
    switch (language) {
      case "en":
        return <img src={UnitedStates} alt="en" />;
      case "fr":
        return <img src={French} alt="fr" />;
      default:
        return <img src={UnitedStates} alt="en" />;
    }
  };
  return <>{renderFlag(language)}</>;
};

export default Flag;
