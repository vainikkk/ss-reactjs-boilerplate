import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "@mui/material";
import BreadCrumbsComponent from "components/common/Breadcrumbs/Breadcrumbs";
import IntegrationFilter from "components/common/Filters/IntegrationFilter";
import style from "./IntegrationPage.module.scss";
import { useSelector } from "react-redux";
import InstanceTable from "../Table/InstanceTable";

function createData({
  name,
  description,
  interval,
  addigyUserName,
  password,
  integrationId,
  instanceId,
}) {
  return {
    name,
    description,
    interval,
    addigyUserName,
    password,
    integrationId,
    instanceId,
  };
}

const headCells = [
  {
    id: "Instance name",
    numeric: false,
    disablePadding: true,
    label: "Instance name",
  },
  {
    id: "# of Entities",
    numeric: true,
    disablePadding: false,
    label: "# of Entities",
  },
  {
    id: "Most recent job status",
    numeric: true,
    disablePadding: false,
    label: "Most recent job status",
  },
  {
    id: "Most recent job date",
    numeric: true,
    disablePadding: false,
    label: "Most recent job date",
  },
  {
    id: "Schedule",
    numeric: true,
    disablePadding: false,
    label: "Schedule",
  },
];

export default function IntegrationPage() {
  const { integrationId } = useParams();
  const navigate = useNavigate();
  const { instanceData } = useSelector((state) => state.integration);
  const handleAddInstance = () => {
    navigate(`/integration/${integrationId}/add`);
  };
  const rows = instanceData.map((value) => {
    return createData(value);
  });
  return (
    <>
      <BreadCrumbsComponent
        title={integrationId}
        displayCrumbs
        subNav="Integration"
      />
      <IntegrationFilter />

      <Container maxWidth="xxl">
        {rows?.length > 0 && (
          <Button
            variant="contained"
            size="small"
            className="mt-3 mb-3"
            onClick={handleAddInstance}
          >
            Add Instance
          </Button>
        )}
        {rows?.length > 0 ? (
          <InstanceTable headCells={headCells} rows={rows} />
        ) : (
          <div className={style.add_instance_btn}>
            <div className={style.title}>
              You haven’t added any integration instances yet
            </div>
            <Button
              variant="contained"
              size="small"
              onClick={handleAddInstance}
            >
              Add Instance
            </Button>
          </div>
        )}
      </Container>
    </>
  );
}
