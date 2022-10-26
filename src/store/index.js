import { configureStore } from "@reduxjs/toolkit";
import integrationReducer from "./integration/integrationSlice";

const store = configureStore({
  reducer: {
    integration: integrationReducer,
  },
});
export default store;
