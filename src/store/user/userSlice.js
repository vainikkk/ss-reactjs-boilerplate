import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action) {
      state.userList = action.payload;
      state.loading = false;
    },
    userLoading(state, action) {
      state.loading = true;
    },
  },
});

export const { setUserData, userLoading } = userSlice.actions;
export default userSlice.reducer;
