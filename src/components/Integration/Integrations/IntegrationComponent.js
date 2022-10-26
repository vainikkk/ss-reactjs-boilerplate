import React, { useEffect } from "react";

import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Skeleton } from "@mui/material";
import IntegrationCard from "./IntegrationCard/IntegrationCard";
import BreadCrumbsComponent from "components/common/Breadcrumbs/Breadcrumbs";
import IntegrationFilter from "components/common/Filters/IntegrationFilter";
import { useNavigate } from "react-router-dom";
import { fetchIntegration } from "store/integration/integrationAction";

const IntegrationList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { integrationList, loading } = useSelector(
    (state) => state.integration
  );
  const userSkeleton = new Array(25).fill(1);

  useEffect(() => {
    dispatch(fetchIntegration());
  }, [dispatch]);

  const handleCardClick = (title) => {
    navigate(`/integration/${title}`);
  };

  return (
    <>
      <BreadCrumbsComponent
        title={"Integrations"}
        displayCrumbs={false}
        subNav="Integration"
      />
      <IntegrationFilter />
      <Container maxWidth="l" className="mt-3">
        <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 9, lg: 10 }}>
          {integrationList?.length > 0 &&
            integrationList.map((value) => (
              <Grid key={value.id} item xs={4} lg={2} md={3} sm={4}>
                <IntegrationCard
                  title={value.title.slice(0, 10)}
                  handleCardClick={() =>
                    handleCardClick(value.title.slice(0, 10))
                  }
                />
              </Grid>
            ))}
          {loading &&
            userSkeleton.map((value) => (
              <Grid key={value.id} item xs={4} lg={2} md={3} sm={4}>
                <Skeleton variant="rectangular" height={118} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default IntegrationList;
