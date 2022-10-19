import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import PageNotFound404 from "assets/images/404.png";

import "./PageNotFound.scss";

const PageNotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <section className="unauthorized-container">
      <div className="box-center">
        <div className="image-404">
          <img src={PageNotFound404} alt="" />
        </div>
        <div className="content">
          <p>{t("auth.pageNotFound")}</p>
          <Button variant="contained" onClick={goToHomePage}>
            Go To Home Page
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
