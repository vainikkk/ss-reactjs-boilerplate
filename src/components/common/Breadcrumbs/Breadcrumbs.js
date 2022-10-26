import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import style from "./BreadCrumbs.module.scss";
import { Link } from "react-router-dom";

export default function BreadCrumbsComponent({ title, subNav, displayCrumbs }) {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="text.primary" to="/">
      {subNav}
    </Link>,
    <Typography key="3" color="inherit">
      {title}
    </Typography>,
  ];

  return (
    <div className={style.breadcrumbs_wrapper}>
      <Container maxWidth="xxl">
        <Stack spacing={2}>
          {displayCrumbs && (
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          )}
          <h4>{title}</h4>
        </Stack>
      </Container>
    </div>
  );
}
