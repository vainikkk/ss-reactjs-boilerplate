import PageNotFound from "components/Authentication/PageNotFound/PageNotFound";
import Header from "components/common/Header/Header";
import UserList from "components/Users/UserComponent";
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

const RoutesConfig = ({ childProps }) => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<UserList />}>
          <Route index element={<UserList />} />
          {/* <Route path="teams" element={<Teams />}>
                <Route path=":teamId" element={<Team />} />
                <Route path="new" element={<NewTeamForm />} />
                <Route index element={<LeagueStandings />} />
              </Route> */}
        </Route>
        <Route path="*" exact element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default RoutesConfig;
