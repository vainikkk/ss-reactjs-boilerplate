import { configureStore } from "@reduxjs/toolkit";
import integrationReducer from "./integration/integrationSlice";
import userReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    integration: integrationReducer,
    user: userReducer,
  },
});
export default store;
