import React from "react";
import { useTranslation } from "react-i18next";

import UserUnauthorized from "assets/images/403.png";

import "./Error.scss";

const Error = () => {
  const { t } = useTranslation();
  return (
    <section className="unauthorized-container">
      <div className="box-center">
        <div className="image-403">
          <img src={UserUnauthorized} alt="" />
        </div>
        <div className="content">
          <p>{t("auth.unauthorized")}</p>
        </div>
      </div>
    </section>
  );
};

export default Error;
