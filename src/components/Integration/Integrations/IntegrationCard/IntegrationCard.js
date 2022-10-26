import * as React from "react";
import Card from "@mui/material/Card";
import { Avatar, CardActionArea } from "@mui/material";
import style from "./IntegrationCard.module.scss";

export default function IntegrationCard({ title, handleCardClick }) {
  return (
    <Card className={style.card_wrapper}>
      <CardActionArea onClick={handleCardClick}>
        <div className={style.integration_card}>
          <div className={style.integration_title}>
            <div>
              <Avatar sx={{ bgcolor: "#3f51b5" }}>N</Avatar>
            </div>
            <h6 className={style.title}>{title}</h6>
          </div>
          <div className={style.integration_instance}>
            <div className="subtitle2">{title}</div>
            <p className="body2">{title}</p>
          </div>
          <div className={style.integration_status}>
            <div className={style.dot}></div>
            <div className={style.status_info}>
              <div className="subtitle2">{title}</div>
              <p className="body2">{title}</p>
            </div>
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
}
