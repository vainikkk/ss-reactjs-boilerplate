import PageNotFound from "components/Authentication/PageNotFound/PageNotFound";
import Header from "components/common/Header/Header";
import AddIntegration from "components/Integration/AddIntegration/AddIntegration";
import IntegrationPage from "components/Integration/IntegrationPage/IntegrationPage";
import IntegrationList from "components/Integration/Integrations/IntegrationComponent";
import IntegrationSummary from "components/Integration/IntegrationSummary/IntegrationSummry";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = true;
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Navigate to="/" />
      }
    />
  );
};

export const PublicRoute = ({ component: Component, ...rest }) => {
  const token = false;
  return (
    <Route
      {...rest}
      render={(props) =>
        !token ? <Component {...props} /> : <Navigate to="/" />
      }
    />
  );
};

const RoutesConfig = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" index element={<IntegrationList />}></Route>
        <Route path="/integration" element={<IntegrationList />} />
        <Route
          path="/integration/:integrationId"
          element={<IntegrationPage />}
        />
        <Route
          path="/integration/:integrationId/add"
          element={<AddIntegration />}
        ></Route>
        <Route
          path="/integration/:integrationId/:instanceId"
          element={<IntegrationSummary />}
        />
        <Route path="*" exact element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default RoutesConfig;
