import React, { useEffect } from "react";

import Container from "@mui/material/Container";
import "./UserComponent.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "store/user/userAction";
import { Grid, Skeleton } from "@mui/material";
import UserCard from "./UserCard/UserCard";

const UserList = () => {
  const dispatch = useDispatch();
  const { userList, loading } = useSelector((state) => state.user);
  const userSkeleton = new Array(25).fill(1);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <Container maxWidth="l" className="mt-3">
      <Grid container spacing={2}>
        {userList &&
          userList.length > 0 &&
          userList.map((value) => (
            <Grid key={value.id} item xs={12 / 5}>
              <UserCard title={value.title} />
            </Grid>
          ))}
        {loading &&
          userSkeleton.map((value) => (
            <Grid key={value.id} item xs={12 / 5}>
              <Skeleton variant="rectangular" height={118} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default UserList;
