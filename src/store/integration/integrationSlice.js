import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  servicesData: [
    {
      id: "1",
      name: "Service 1",
      status: "Running",
    },
  ],
};

const integrationSlice = createSlice({
  name: "integration",
  initialState,
  reducers: {
    setServiceData(state, action) {
      state.servicesData = action.payload;
    },
  },
});

export const { setServiceData } = integrationSlice.actions;
export default integrationSlice.reducer;
