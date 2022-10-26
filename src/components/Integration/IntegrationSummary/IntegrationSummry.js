import * as React from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import BreadCrumbsComponent from "components/common/Breadcrumbs/Breadcrumbs";
import style from "./IntegrationSummary.module.scss";
import SSBox from "components/common/Box/SSBox";
import Summary from "./Summary";
import { useSelector } from "react-redux";

export default function IntegrationSummary() {
  const { integrationId, instanceId } = useParams();
  const [value, setValue] = React.useState(0);
  const { instanceData } = useSelector((state) => state.integration);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log("instance", instanceData);
  const instanceValues = instanceData.find(
    (value) =>
      value.integrationId === integrationId && value.instanceId === instanceId
  );
  console.log("instanceValues", instanceValues);
  return (
    <div>
      <BreadCrumbsComponent
        title={integrationId}
        displayCrumbs
        subNav="Integration"
      />
      <Container maxWidth="xxl">
        <div className={style.add_instance_btn}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Instance Tab"
              >
                <Tab label="Summary" />
                <Tab label="Instance Job" />
              </Tabs>
            </Box>
            <div
              role="tabpanel"
              className="mt-3"
              hidden={value !== 0}
              id={`simple-tabpanel-${0}`}
              aria-labelledby={`simple-tab-${0}`}
            >
              {value === 0 && instanceValues && (
                <Summary summaryValues={instanceValues} />
              )}
            </div>
            <div
              role="tabpanel"
              hidden={value !== 1}
              id={`simple-tabpanel-${1}`}
              className="mt-3"
              aria-labelledby={`simple-tab-${1}`}
            >
              {value === 1 && (
                <SSBox>
                  <Typography>hello2</Typography>
                </SSBox>
              )}
            </div>
          </Box>
        </div>
      </Container>
    </div>
  );
}
