import * as React from "react";
import Card from "@mui/material/Card";
import { Avatar, CardActionArea } from "@mui/material";
import style from "./UserCard.module.scss";

export default function UserCard({ title }) {
  return (
    <Card>
      <CardActionArea>
        <div className={style.user_card}>
          <div className={style.user_title}>
            <div>
              <Avatar sx={{ bgcolor: "#3f51b5" }}>N</Avatar>
            </div>
            <div className={style.title}>abc</div>
          </div>
          <div className={style.user_instance}>
            <div>abc</div>
            <div className={style.title}>abc</div>
          </div>
          <div className={style.user_status}>
            <div>abc</div>
            <div className={style.title}>abc</div>
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
}
