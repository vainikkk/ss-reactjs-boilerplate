import * as React from "react";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import style from "./IntegrationFilter.module.scss";

export default function IntegrationFilter() {
  return (
    <div className={style.integration_filter_wrapper}>
      <Container maxWidth="xxl">
        <Stack spacing={2}>Filter here</Stack>
      </Container>
    </div>
  );
}
