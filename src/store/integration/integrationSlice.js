import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  instanceData: [],
  integrationList: [],
};

const integrationSlice = createSlice({
  name: "integration",
  initialState,
  reducers: {
    setInstanceData(state, action) {
      state.instanceData.push(action.payload);
    },
    setIntegrationList(state, action) {
      state.integrationList = action.payload;
      state.loading = false;
    },
    integrationLoading(state) {
      state.loading = true;
    },
  },
});

export const { setInstanceData, setIntegrationList, integrationLoading } =
  integrationSlice.actions;
export default integrationSlice.reducer;
